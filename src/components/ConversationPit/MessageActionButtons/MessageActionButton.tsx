import { cx } from '../../../util';
import { useConversationPitContext } from '../Context';
import { ConversationPitMessage } from '../types';
import { styles } from './styles';

export interface MessageActionButtonsProps {
  parentMessage: ConversationPitMessage;
}

export function MessageActionButtons({ parentMessage }: MessageActionButtonsProps) {
  /** context */
  const { handleOpenReply } = useConversationPitContext();

  /** styles */
  const rootClassName = cx(styles.root);

  return (
    <div className={rootClassName}>
      <button onClick={() => console.info('handle delete')} type='button'>
        Delete
      </button>
      <button onClick={() => console.info('handle edit')} type='button'>
        Edit
      </button>
      <button onClick={() => handleOpenReply(parentMessage)} type='button'>
        Reply
      </button>
    </div>
  );
}
