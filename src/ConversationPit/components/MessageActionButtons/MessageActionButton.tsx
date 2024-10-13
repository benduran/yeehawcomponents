import { useConversationPitContext } from '../../context';
import { useMakeConversationPitCx } from '../../hooks';
import { ConversationPitMessage } from '../../types';
import { styles } from './styles';

export interface MessageActionButtonsProps {
  canDelete: boolean;
  canEdit: boolean;
  canReply: boolean;
  message: ConversationPitMessage;
}

export function MessageActionButtons({ canDelete, canEdit, canReply, message }: MessageActionButtonsProps) {
  /** context */
  const { handleOpenReply, openedReplyMessageId } = useConversationPitContext();

  /** hooks */
  const cx = useMakeConversationPitCx('MessageActionButtons');

  /** styles */
  const rootClassName = cx(styles.root);

  /** local variables */
  const thisHasReplyOpen = message.id === openedReplyMessageId;

  if (thisHasReplyOpen) return null;

  return (
    <div className={rootClassName}>
      {canDelete && (
        <button onClick={() => console.info('handle delete')} type='button'>
          Delete
        </button>
      )}
      {canEdit && (
        <button onClick={() => console.info('handle edit')} type='button'>
          Edit
        </button>
      )}
      {canReply && (
        <button onClick={() => handleOpenReply(message)} type='button'>
          Reply
        </button>
      )}
    </div>
  );
}
