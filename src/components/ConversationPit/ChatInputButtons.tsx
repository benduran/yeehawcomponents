import { IoHappyOutline, IoSendOutline } from 'react-icons/io5';

import { useConversationPitContext } from './Context';
import { ChatInputButtonsProps } from './types';

export function ChatInputButtons({ onSend }: ChatInputButtonsProps) {
  /** context */
  const { classes } = useConversationPitContext();

  return (
    <div className={classes?.chatInputButtons}>
      <button type='button'>
        <IoSendOutline />
      </button>
      <button type='button'>
        <IoHappyOutline />
      </button>
    </div>
  );
}
