import { useCallback, useEffect, useState } from 'react';

import { Nullish } from '../../../types';
import { useConversationPitContext } from '../../context';
import { useMakeConversationPitCx } from '../../hooks';
import { ConversationPitUser } from '../../types';
import { styles } from './styles';

interface MentionsSuggestionsProps {
  /**
   * current suggestions returned by the user's mention query function
   */
  mentionsSuggestions: ConversationPitUser[];

  /**
   * Fired when a user makes a mention selection.
   * It is up to the textbox to determine how to inject
   * the replacement text
   */
  onMentionSelected: (mentionedUser: ConversationPitUser) => void;

  /**
   * Reference to the <textarea /> element that is triggering
   * these mentions
   */
  textareaRef: Nullish<HTMLTextAreaElement>;
}

export function MentionsSuggestions({ mentionsSuggestions, onMentionSelected, textareaRef }: MentionsSuggestionsProps) {
  /** context */
  const { classes: classesOverrides } = useConversationPitContext();

  /** local variables */
  const hasMentions = mentionsSuggestions.length > 0;

  /** state */
  const [activeIndex, setActiveIndex] = useState(0);

  /** styles */
  const cx = useMakeConversationPitCx('MentionsSuggestions');
  const rootClassName = cx(styles.root, classesOverrides?.mentions);

  /** callbacks */
  const handleTextareaKeydown = useCallback(
    (e: KeyboardEvent) => {
      if (!hasMentions) return;

      // change the active item, up or down, based on the user's pressed key
      if (e.key === 'ArrowUp') {
        e.stopPropagation();
        e.preventDefault();
        return setActiveIndex(prev => (!prev ? mentionsSuggestions.length - 1 : prev - 1));
      }
      if (e.key === 'ArrowDown') {
        e.stopPropagation();
        e.preventDefault();
        return setActiveIndex(prev => (prev === mentionsSuggestions.length - 1 ? 0 : prev + 1));
      }

      if (e.key === 'Enter') {
        const mentionedUser = mentionsSuggestions.at(activeIndex);
        if (mentionedUser) {
          e.stopPropagation();
          e.preventDefault();
          return onMentionSelected(mentionedUser);
        }
      }
    },
    [activeIndex, hasMentions, mentionsSuggestions, onMentionSelected],
  );

  /** effects */
  useEffect(() => {
    if (!textareaRef) return;

    textareaRef.addEventListener('keydown', handleTextareaKeydown);

    return () => {
      textareaRef.removeEventListener('keydown', handleTextareaKeydown);
    };
  }, [handleTextareaKeydown, textareaRef]);

  if (!mentionsSuggestions.length) return null;

  return (
    <div className={rootClassName} role='presentation'>
      <ul className={cx(styles.mentionsList)} role='listbox'>
        {mentionsSuggestions.map((u, i) => {
          const selected = activeIndex === i;

          return (
            <li
              aria-selected={selected}
              className={cx(styles.mention, selected && styles.mentionSelected)}
              key={u.email}
              role='option'
              tabIndex={-1}
            >
              {u.fullName}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
