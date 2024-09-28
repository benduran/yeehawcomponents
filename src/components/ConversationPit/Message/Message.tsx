import { cx } from '../../../util';
import { ChatInput } from '../ChatInput';
import { useConversationPitContext } from '../Context';
import { MessageActionButtons } from '../MessageActionButtons/MessageActionButton';
import { MessageProps } from '../types';
import { UserAvatar } from '../UserAvatar';
import { styles } from './styles';

const displayName = 'Message';
const messageDetailsDisplayName = 'MessageDetails';
const messageTextDisplayName = 'MessageText';
const replyChatInputDisplayName = 'ReplyChatInput';
const messageActionsDisplayName = 'MessageActions';

export function Message({ message }: MessageProps) {
  /** context */
  const { classes, openedReplyMessageId } = useConversationPitContext();

  /** styles */
  const rootClassName = cx(styles.root, classes?.message, displayName);
  const usernameClassname = cx(styles.details, classes?.messageDetails, messageDetailsDisplayName);
  const messageTextClassName = cx(styles.text, classes?.messageText, messageTextDisplayName);
  const replyChatInputClassName = cx(styles.replyChatInput, classes?.replyChatInput, replyChatInputDisplayName);
  const messageActionsClassName = cx(styles.messageActions, classes?.messageActions, messageActionsDisplayName);

  return (
    <li className={rootClassName}>
      <UserAvatar user={message.author} />
      <div className={usernameClassname}>
        <div>{message.author.fullName}</div>
      </div>
      <div className={messageTextClassName}>{message.message}</div>
      {openedReplyMessageId === message.id && <ChatInput className={replyChatInputClassName} main={false} />}
      <div className={messageActionsClassName}>
        <MessageActionButtons parentMessage={message} />
      </div>
    </li>
  );
}
