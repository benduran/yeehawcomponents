import { Dates } from '../../../util';
import { useConversationPitContext } from '../../context';
import { useMakeConversationPitCx } from '../../hooks';
import { MessageProps } from '../../types';
import { ChatInput } from '../ChatInput';
import { MessageActionButtons } from '../MessageActionButtons';
import { MessagesList } from '../MessagesList';
import { UserAvatar } from '../UserAvatar';
import { styles } from './styles';

const displayName = 'Message';
const messageDetailsDisplayName = 'MessageDetails';
const messageTextDisplayName = 'MessageText';
const replyChatInputDisplayName = 'ReplyChatInput';
const messageActionsDisplayName = 'MessageActions';
const messageDateDisplayName = 'MessageDate';

export function Message({ depth, message }: MessageProps) {
  /** context */
  const { allowDeletion, allowEdit, classes, currentUser, openedReplyMessageId, parentIdsToChildMessages } =
    useConversationPitContext();

  /** hooks */
  const cx = useMakeConversationPitCx('Message');
  const childCx = useMakeConversationPitCx('ChildMessages');

  /** styles */
  const rootClassName = cx(styles.root, classes?.message, displayName);
  const usernameClassname = cx(styles.details, classes?.messageDetails, messageDetailsDisplayName);
  const messageTextClassName = cx(styles.text, classes?.messageText, messageTextDisplayName);
  const replyChatInputClassName = cx(styles.replyChatInput, classes?.replyChatInput, replyChatInputDisplayName);
  const messageActionsClassName = cx(styles.messageActions, classes?.messageActions, messageActionsDisplayName);
  const messageDateClassName = cx(styles.messageDate, classes?.messageDate, messageDateDisplayName);
  const childMessagesClassName = childCx(styles.childMessages);

  /** local variables */
  const isReplyOpened = openedReplyMessageId === message.id;
  const authorIsCurrentUser = message.author.email === currentUser.email;
  const isSomeActionAllowed = ((allowDeletion || allowEdit) && authorIsCurrentUser) || !authorIsCurrentUser;
  const childMessages = parentIdsToChildMessages.get(message.id);

  return (
    <li className={rootClassName}>
      <UserAvatar user={message.author} />
      <div className={usernameClassname}>
        <div>{message.author.fullName}</div>
      </div>
      <div className={messageTextClassName}>{message.message}</div>
      <div className={messageActionsClassName}>
        <div className={messageDateClassName}>
          {Dates.relativeFromNow(message.updatedDate ?? message.createDate)}
          {!isReplyOpened && isSomeActionAllowed && <div>•</div>}
        </div>
        <MessageActionButtons depth={depth} message={message} />
      </div>
      {isReplyOpened && <ChatInput className={replyChatInputClassName} main={false} parentMessage={message} />}
      {childMessages?.length && (
        <MessagesList className={childMessagesClassName} depth={depth + 1} messages={childMessages} parent={message} />
      )}
    </li>
  );
}
