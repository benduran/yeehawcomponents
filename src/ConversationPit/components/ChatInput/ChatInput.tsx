import { ChangeEvent, KeyboardEvent, useCallback, useEffect, useRef, useState } from 'react';

import { useEventCallback } from '../../../hooks';
import { Nullish } from '../../../types';
import { useConversationPitContext } from '../../context';
import { useGetCursorPosition, useMakeConversationPitCx } from '../../hooks';
import { ChatInputProps, ConversationPitUser } from '../../types';
import { MentionsSuggestions } from '../MentionsSuggestions';
import { styles } from './styles';

/**
 * Textbox a user can interact with and type their message
 */
export function ChatInput({ className, main, message, parentMessage }: ChatInputProps) {
  /** context */
  const { classes, currentUser, fetchMentions, getChatInputPlaceholder, handleCloseReply, mentionTriggers, onSend } =
    useConversationPitContext();

  /** ref */
  const fetchMentionsRef = useRef(fetchMentions);

  /** state */
  const [text, setText] = useState(message?.message || '');
  const [isFocused, setIsFocused] = useState(false);
  const [textareaRef, setTextareaRef] = useState<Nullish<HTMLTextAreaElement>>(null);
  const [mentionsSuggestions, setMentionsSuggestions] = useState<ConversationPitUser[]>([]);

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
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) return handleSend();
    // otherwise, we check if there are arrow keys and transition the mentions active selection
  });

  /** effects */
  useEffect(() => {
    fetchMentionsRef.current = fetchMentions;
  });

  useEffect(() => {
    if (!isNestedReply || !textareaRef) return;

    textareaRef.focus();
  }, [isNestedReply, textareaRef]);

  useEffect(() => {
    if (!mention) return;

    const doPerformFetch = async () => {
      if (!fetchMentionsRef.current) return;
      const mentionsResult = await fetchMentionsRef.current(mention.mention);

      setMentionsSuggestions(mentionsResult);
    };

    doPerformFetch();
  }, [fetchMentions, mention]);

  return (
    <div className={rootClassName}>
      {isFocused && Boolean(mention?.fullMention.length) && (
        <MentionsSuggestions mentionsSuggestions={mentionsSuggestions} textareaRef={textareaRef} />
      )}
      <textarea
        className={cx(styles.textarea, classes?.textarea)}
        onChange={handleChatInputChange}
        onBlur={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
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
