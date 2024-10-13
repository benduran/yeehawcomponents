import { ChangeEvent, KeyboardEvent, useCallback, useEffect, useState } from 'react';

import { useEventCallback } from '../../../hooks';
import { Nullish } from '../../../types';
import { useConversationPitContext } from '../../context';
import { useGetCursorPosition, useMakeConversationPitCx } from '../../hooks';
import { ChatInputProps } from '../../types';
import { styles } from './styles';

/**
 * Textbox a user can interact with and type their message
 */
export function ChatInput({ className, main, message, parentMessage }: ChatInputProps) {
  /** context */
  const { classes, currentUser, getChatInputPlaceholder, handleCloseReply, mentionTriggers, onSend } =
    useConversationPitContext();

  /** state */
  const [text, setText] = useState(message?.message || '');
  const [textareaRef, setTextareaRef] = useState<Nullish<HTMLTextAreaElement>>(null);

  /** hooks */
  const cx = useMakeConversationPitCx('ChatInput');
  const buttonsCx = useMakeConversationPitCx('ChatButtons');
  const buttonCx = useMakeConversationPitCx('Button');
  const mention = useGetCursorPosition(textareaRef, mentionTriggers);

  /** local variables */
  const placeholder =
    getChatInputPlaceholder?.(main, message) || main ? 'Type your message here...' : 'Type your reply here...';
  const isNestedReply = Boolean(parentMessage);

  /** styles */
  const rootClassName = cx(
    styles.root,
    classes?.chatInput,
    main && styles.mainChatInput,
    main && classes?.mainChatInput,
    className,
  );
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
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) handleSend();
  });

  /** effects */
  useEffect(() => {
    if (!isNestedReply || !textareaRef) return;

    textareaRef.focus();
  }, [isNestedReply, textareaRef]);

  return (
    <div className={rootClassName}>
      <textarea
        className={cx(styles.textarea, classes?.textarea)}
        onChange={handleChatInputChange}
        onKeyDown={handleSendOnKeydown}
        placeholder={placeholder}
        ref={setTextareaRef}
        value={text}
      />
      <div className={chatInputButtonsClassName}>
        <button className={buttonClassName} disabled={main && !text.length} onClick={handleCancel} type='button'>
          Cancel
        </button>
        <button className={cx(buttonClassName, 'send')} onClick={handleSend} type='button'>
          Send Message
        </button>
      </div>
    </div>
  );
}
