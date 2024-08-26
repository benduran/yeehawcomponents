import { IoHappyOutline, IoSendOutline } from 'react-icons/io5';

import { cx } from '../../../util';
import { useConversationPitContext } from '../Context';
import { ChatInputButtonsProps } from '../types';
import { styles } from './styles';

const displayName = 'ChatInputButtons';

const buttonDisplayName = 'ChatInputButton';
export function ChatInputButtons({ onSend }: ChatInputButtonsProps) {
  /** context */
  const { classes } = useConversationPitContext();

  /** styles */
  const rootClassname = cx(styles.root, classes?.chatInputButtons, displayName);
  const buttonClassName = cx(styles.button, classes?.chatInputButton, buttonDisplayName);

  return (
    <div className={rootClassname}>
      <button className={buttonClassName} type='button'>
        <IoSendOutline />
      </button>
      <button className={buttonClassName} type='button'>
        <IoHappyOutline />
      </button>
    </div>
  );
}
