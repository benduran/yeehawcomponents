import { cx } from '../../../util';
import { useConversationPitContext } from '../Context';
import { ConversationPitMessage } from '../types';
import { styles } from './styles';

export interface MessageActionButtonsProps {
  parentMessage: ConversationPitMessage;
}

export function MessageActionButtons({ parentMessage }: MessageActionButtonsProps) {
  /** context */
  const { allowDeletion, allowEdit, currentUser, handleOpenReply } = useConversationPitContext();

  /** styles */
  const rootClassName = cx(styles.root);

  /** local variables */
  const authorIsCurrentUser = parentMessage.author.email === currentUser.email;

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
