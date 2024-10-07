import { useConversationPitContext } from '../../context';
import { useMakeConversationPitCx } from '../../hooks';
import { ConversationPitMessage } from '../../types';
import { styles } from './styles';

export interface MessageActionButtonsProps {
  message: ConversationPitMessage;
}

export function MessageActionButtons({ message }: MessageActionButtonsProps) {
  /** context */
  const { allowDeletion, allowEdit, currentUser, handleOpenReply, openedReplyMessageId } = useConversationPitContext();

  /** hooks */
  const cx = useMakeConversationPitCx('MessageActionButtons');

  /** styles */
  const rootClassName = cx(styles.root);

  /** local variables */
  const authorIsCurrentUser = message.author.email === currentUser.email;

  const thisHasReplyOpen = message.id === openedReplyMessageId;

  if (thisHasReplyOpen) return null;

  return (
    <div className={rootClassName}>
      {allowDeletion && authorIsCurrentUser && (
        <button onClick={() => console.info('handle delete')} type='button'>
          Delete
        </button>
      )}
      {allowEdit && authorIsCurrentUser && (
        <button onClick={() => console.info('handle edit')} type='button'>
          Edit
        </button>
      )}
      {!authorIsCurrentUser && (
        <button onClick={() => handleOpenReply(message)} type='button'>
          Reply
        </button>
      )}
    </div>
  );
}
