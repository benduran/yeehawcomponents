import { useMakeCx } from '../../../../hooks';
import { useConversationPitContext } from '../../../context';
import { ChatInputButtonsProps } from '../../../types';
import { styles } from './styles';

const displayName = 'ChatInputButtons';

const buttonDisplayName = 'ChatInputButton';
export function ChatInputButtons({ onSend }: ChatInputButtonsProps) {
  /** context */
  const { classes } = useConversationPitContext();

  /** hooks */
  const cx = useMakeCx('ConversationPit', 'ChatInputButtons');

  /** styles */
  const rootClassname = cx(styles.root, classes?.chatInputButtons, displayName);
  const buttonClassName = cx(styles.button, classes?.chatInputButton, buttonDisplayName);

  return (
    <div className={rootClassname}>
      <button className={buttonClassName} type='button'>
        Cancel
      </button>
      <button className={cx(buttonClassName, 'send')} onClick={onSend} type='button'>
        Send Message
      </button>
    </div>
  );
}
