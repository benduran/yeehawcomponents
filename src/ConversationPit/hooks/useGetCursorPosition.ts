import { useCallback, useEffect, useMemo, useState } from 'react';

import { Nullish } from '../../types';

export interface MentionMatch {
  /**
   * Ending location in the current string where the mention matches
   */
  end: number;

  /**
   * Full mention buffer, including the trigger character
   */
  fullMention: string;

  /**
   * Mention containing only the relevant text, sans-mention trigger
   */
  mention: string;

  /**
   * Starting location in the current string where the mention matches
   */
  start: number;
}

function charIsWhitespaceOrNewline(char: string) {
  return /\s/.test(char);
}

/**
 * Attempts to get the mentions buffer, based on the user's
 * current cursor pos in an input or a textarea
 */
export function useGetCursorPosition(
  inputOrTextarea: Nullish<HTMLInputElement | HTMLTextAreaElement>,
  mentionsTriggers: Nullish<string[]>,
) {
  /** state */
  const [mention, setMention] = useState<Nullish<MentionMatch>>(null);

  /** local variables */
  const triggersStr = JSON.stringify(mentionsTriggers ?? []);

  /** memos */
  const triggersSet = useMemo(() => {
    const triggersProp: string[] = JSON.parse(triggersStr);

    return new Set<string>(!triggersProp.length ? ['@'] : triggersProp);
  }, [triggersStr]);

  /** callbacks */
  const handleKeyup = useCallback(
    (e: Event) => {
      const tgt = e.currentTarget as HTMLInputElement | HTMLTextAreaElement;
      const { selectionStart, value } = tgt;

      if (!selectionStart) return;

      // from the current cursor position, walk backwards to the closest trigger character.
      // then, check if there is whitespace or a newline to the left-hand side of the trigger

      let buffer = '';
      for (let i = selectionStart - 1; i >= 0; i--) {
        const char = value.charAt(i);

        // NOTE: If you need to support Human names and *not* usernames,
        // remove this line to grab the buffer with all of its whitespaces
        if (charIsWhitespaceOrNewline(char)) break;

        if (triggersSet.has(char)) {
          // we found the trigger.
          // check if the next character to the left
          // is a whitespace
          const possibleWhitespaceChar = value.charAt(i - 1);
          // if (buffer && (!possibleWhitespaceChar || charIsWhitespaceOrNewline(possibleWhitespaceChar))) {
          if (!possibleWhitespaceChar || charIsWhitespaceOrNewline(possibleWhitespaceChar)) {
            // we are in a valid mention trigger condition
            return setMention({
              end: selectionStart,
              fullMention: `${char}${buffer}`,
              mention: buffer,
              start: selectionStart - (buffer.length + 1),
            });
          }
        }
        buffer = `${char}${buffer}`;
      }

      return setMention(null);
    },
    [triggersSet],
  );
  const handleBlur = useCallback(() => {
    // clear the mention whenever a user loses focus on this input
    setMention(null);
  }, []);

  /** effects */
  useEffect(() => {
    if (!inputOrTextarea) return;

    inputOrTextarea.addEventListener('keyup', handleKeyup);
    inputOrTextarea.addEventListener('blur', handleBlur);

    return () => {
      inputOrTextarea.removeEventListener('keyup', handleKeyup);
      inputOrTextarea.removeEventListener('focus', handleBlur);
    };
  }, [handleBlur, handleKeyup, inputOrTextarea, triggersSet]);

  return mention;
}
