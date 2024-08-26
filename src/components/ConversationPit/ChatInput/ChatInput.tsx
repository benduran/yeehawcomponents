import { ChangeEvent, useCallback, useState } from 'react';

import { cx } from '../../../util';
import { ChatInputButtons } from '../ChatInputButtons';
import { useConversationPitContext } from '../Context';
import type { ChatInputProps } from '../types';
import { styles } from './styles';

/**
 * Textbox a user can interact with and type their message
 */
export function ChatInput({ main, message }: ChatInputProps) {
  /** context */
  const { classes, getChatInputPlaceholder } = useConversationPitContext();

  /** state */
  const [text, setText] = useState(message?.message || '');

  /** callbacks */
  const handleChatInputChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => setText(e.currentTarget.value),
    [],
  );

  /** local variables */
  const placeholder =
    getChatInputPlaceholder?.(main, message) || main ? 'Type your message here...' : 'Type your reply here...';

  return (
    <div className={cx(styles.root, classes?.chatInput, main && classes?.mainChatInput)}>
      <textarea
        className={cx(styles.textarea, classes?.textarea)}
        onChange={handleChatInputChange}
        placeholder={placeholder}
        value={text}
      />
      <ChatInputButtons onSend={() => {}} />
    </div>
  );
}
