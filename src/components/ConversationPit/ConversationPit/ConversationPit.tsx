import React from 'react';

import { cx } from '../../../util';
import { ChatInput } from '../ChatInput';
import { ConversationPitContext } from '../Context';
import { MessagesList } from '../MessagesList';
import { ConversationPitProps } from '../types';
import { styles } from './styles';

const displayName = 'ConversationPit';
export const ConversationPit = React.forwardRef<HTMLDivElement, ConversationPitProps>(
  ({ className, classes, currentUser, onSend, messages, ...rest }, ref) => {
    return (
      <ConversationPitContext classes={classes} currentUser={currentUser} messages={messages} onSend={onSend}>
        <div {...rest} className={cx(styles.root, displayName, className, classes?.root)} ref={ref}>
          <MessagesList messages={messages} />
          <ChatInput main />
        </div>
      </ConversationPitContext>
    );
  },
);

ConversationPit.displayName = displayName;
