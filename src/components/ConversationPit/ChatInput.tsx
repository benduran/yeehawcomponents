import { ChangeEvent, useCallback, useState } from 'react';

import { cx } from '../../util';
import { useConversationPitContext } from './Context';
import type { ChatInputProps } from './types';

/**
 * Textbox a user can interact with and type their message
 */
export function ChatInput({ main, message }: ChatInputProps) {
  /** context */
  const { classes } = useConversationPitContext();

  /** state */
  const [text, setText] = useState(message?.message || '');

  /** callbacks */
  const handleChatInputChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => setText(e.currentTarget.value),
    [],
  );

  return (
    <div className={cx(classes?.chatInput, main && classes?.mainChatInput)}>
      <textarea onChange={handleChatInputChange} value={text} />
    </div>
  );
}
