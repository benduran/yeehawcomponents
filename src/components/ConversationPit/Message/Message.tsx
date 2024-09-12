import { cx } from '../../../util';
import { useConversationPitContext } from '../Context';
import { MessageActionButtons } from '../MessageActionButtons/MessageActionButton';
import { MessageProps } from '../types';
import { UserAvatar } from '../UserAvatar';
import { styles } from './styles';

const displayName = 'Message';
const messageDetailsDisplayName = 'MessageDetails';
const messageTextDisplayName = 'MessageText';

export function Message({ message }: MessageProps) {
  /** context */
  const { classes, currentUser } = useConversationPitContext();

  /** styles */
  const rootClassName = cx(styles.root, classes?.message, displayName);
  const usernameClassname = cx(styles.details, classes?.messageDetails, messageDetailsDisplayName);
  const messageTextClassName = cx(styles.text, classes?.messageText, messageTextDisplayName);

  return (
    <li className={rootClassName}>
      <div className={usernameClassname}>
        <UserAvatar user={message.author} />
        <div>{message.author.fullName}</div>
      </div>
      <div className={messageTextClassName}>{message.message}</div>
      {message.author.email !== currentUser.email && <MessageActionButtons parentMessage={message} />}
    </li>
  );
}
