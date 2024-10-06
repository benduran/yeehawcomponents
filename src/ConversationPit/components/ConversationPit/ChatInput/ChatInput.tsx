import { ChangeEvent, KeyboardEvent, useCallback, useState } from 'react';

import { useEventCallback, useMakeCx } from '../../../../hooks';
import { useConversationPitContext } from '../../../context';
import type { ChatInputProps } from '../../../types';
import { styles } from './styles';

/**
 * Textbox a user can interact with and type their message
 */
export function ChatInput({ className, main, message, parentMessage }: ChatInputProps) {
  /** context */
  const { classes, currentUser, getChatInputPlaceholder, handleCloseReply, onSend } = useConversationPitContext();

  /** hooks */
  const cx = useMakeCx('ConversationPit', 'ChatInput');
  const buttonsCx = useMakeCx('ConversationPit', 'ChatButtons');
  const buttonCx = useMakeCx('ConversationPit', 'Button');

  /** state */
  const [text, setText] = useState(message?.message || '');

  /** styles */
  const rootClassName = cx(styles.root, classes?.chatInput, main && classes?.mainChatInput, className);
  const chatInputButtonsClassName = buttonsCx(styles.chatInputButtons, classes?.chatInputButtons);
  const buttonClassName = buttonCx(styles.button, classes?.chatInputButton, '');

  /** callbacks */
  const handleChatInputChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => setText(e.currentTarget.value),
    [],
  );
  const handleSend = useEventCallback(() => {
    // TODO: get the mentions from someplace?
    onSend(currentUser, text, [], parentMessage);
    setText('');
    handleCloseReply();
  });
  const handleCancel = useEventCallback(() => {
    setText('');
    handleCloseReply();
  });
  const handleSendOnKeydown = useEventCallback((e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && e.metaKey) handleSend();
  });

  /** local variables */
  const placeholder =
    getChatInputPlaceholder?.(main, message) || main ? 'Type your message here...' : 'Type your reply here...';

  return (
    <div className={rootClassName}>
      <textarea
        className={cx(styles.textarea, classes?.textarea)}
        onChange={handleChatInputChange}
        onKeyDown={handleSendOnKeydown}
        placeholder={placeholder}
        value={text}
      />
      <div className={chatInputButtonsClassName}>
        <button className={buttonClassName} disabled={main && !text.length} onClick={handleCancel} type='button'>
          Cancel
        </button>
        <button
          className={cx(buttonClassName, 'send')}
          onClick={() => onSend(currentUser, text, [], parentMessage)}
          type='button'
        >
          Send Message
        </button>
      </div>
    </div>
  );
}
