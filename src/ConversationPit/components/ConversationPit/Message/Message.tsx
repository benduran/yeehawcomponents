import { useMakeCx } from '../../../../hooks';
import { Dates } from '../../../../util';
import { useConversationPitContext } from '../../../context';
import { MessageProps } from '../../../types';
import { ChatInput } from '../ChatInput';
import { MessageActionButtons } from '../MessageActionButtons';
import { UserAvatar } from '../UserAvatar';
import { styles } from './styles';

const displayName = 'Message';
const messageDetailsDisplayName = 'MessageDetails';
const messageTextDisplayName = 'MessageText';
const replyChatInputDisplayName = 'ReplyChatInput';
const messageActionsDisplayName = 'MessageActions';
const messageDateDisplayName = 'MessageDate';

export function Message({ message }: MessageProps) {
  /** context */
  const { allowDeletion, allowEdit, classes, currentUser, openedReplyMessageId } = useConversationPitContext();

  /** hooks */
  const cx = useMakeCx('ConversationPit', 'Message');

  /** styles */
  const rootClassName = cx(styles.root, classes?.message, displayName);
  const usernameClassname = cx(styles.details, classes?.messageDetails, messageDetailsDisplayName);
  const messageTextClassName = cx(styles.text, classes?.messageText, messageTextDisplayName);
  const replyChatInputClassName = cx(styles.replyChatInput, classes?.replyChatInput, replyChatInputDisplayName);
  const messageActionsClassName = cx(styles.messageActions, classes?.messageActions, messageActionsDisplayName);
  const messageDateClassName = cx(styles.messageDate, classes?.messageDate, messageDateDisplayName);

  /** local variables */
  const isReplyOpened = openedReplyMessageId === message.id;
  const authorIsCurrentUser = message.author.email === currentUser.email;
  const isSomeActionAllowed = ((allowDeletion || allowEdit) && authorIsCurrentUser) || !authorIsCurrentUser;

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
        <MessageActionButtons parentMessage={message} />
      </div>
      {isReplyOpened && <ChatInput className={replyChatInputClassName} main={false} parentMessage={message} />}
    </li>
  );
}
