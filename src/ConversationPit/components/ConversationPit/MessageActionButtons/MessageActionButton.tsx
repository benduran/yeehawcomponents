import { useMakeCx } from '../../../../hooks';
import { useConversationPitContext } from '../../../context';
import { ConversationPitMessage } from '../../../types';
import { styles } from '../ConversationPit';

export interface MessageActionButtonsProps {
  parentMessage: ConversationPitMessage;
}

export function MessageActionButtons({ parentMessage }: MessageActionButtonsProps) {
  /** context */
  const { allowDeletion, allowEdit, currentUser, handleOpenReply, openedReplyMessageId } = useConversationPitContext();

  /** hooks */
  const cx = useMakeCx('ConversationPit', 'MessageActionButtons');

  /** styles */
  const rootClassName = cx(styles.root);

  /** local variables */
  const authorIsCurrentUser = parentMessage.author.email === currentUser.email;
  const thisHasReplyOpen = parentMessage.id === openedReplyMessageId;

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
        <button onClick={() => handleOpenReply(parentMessage)} type='button'>
          Reply
        </button>
      )}
    </div>
  );
}
