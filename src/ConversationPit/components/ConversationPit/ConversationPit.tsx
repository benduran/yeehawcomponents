import { forwardRef } from 'react';

import { ConversationPitContext } from '../../context';
import { useMakeConversationPitCx } from '../../hooks';
import { ConversationPitProps } from '../../types';
import { ChatInput } from '../ChatInput';
import { MessagesList } from '../MessagesList';
import { styles } from './styles';

const displayName = 'ConversationPit';
export const ConversationPit = forwardRef<HTMLDivElement, ConversationPitProps>(
  ({ className, classes, currentUser, fetchMentions, onSend, messages, ...rest }, ref) => {
    /** hooks */
    const cx = useMakeConversationPitCx('Root');

    return (
      <ConversationPitContext
        classes={classes}
        currentUser={currentUser}
        fetchMentions={fetchMentions}
        messages={messages}
        onSend={onSend}
      >
        <div {...rest} className={cx(styles.root, displayName, className, classes?.root)} ref={ref}>
          <MessagesList depth={0} messages={messages} />
          <ChatInput main parentMessage={null} />
        </div>
      </ConversationPitContext>
    );
  },
);

ConversationPit.displayName = displayName;
