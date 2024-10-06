import { forwardRef } from 'react';

import { useMakeCx } from '../../../../hooks';
import { ConversationPitContext } from '../../../context';
import { ConversationPitProps } from '../../../types';
import { ChatInput } from '../ChatInput';
import { MessagesList } from '../MessagesList';
import { styles } from './styles';

const displayName = 'ConversationPit';
export const ConversationPit = forwardRef<HTMLDivElement, ConversationPitProps>(
  ({ className, classes, currentUser, onSend, messages, ...rest }, ref) => {
    /** hooks */
    const cx = useMakeCx('ConversationPit', 'Root');

    return (
      <ConversationPitContext classes={classes} currentUser={currentUser} messages={messages} onSend={onSend}>
        <div {...rest} className={cx(styles.root, displayName, className, classes?.root)} ref={ref}>
          <MessagesList messages={messages} />
          <ChatInput main parentMessage={null} />
        </div>
      </ConversationPitContext>
    );
  },
);

ConversationPit.displayName = displayName;
