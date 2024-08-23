import React from 'react';

import { cx } from '../../util';
import { ChatInput } from './ChatInput';
import { ConversationPitContext } from './Context';
import { ConversationPitProps } from './types';

export const ConversationPit = React.forwardRef<HTMLDivElement, ConversationPitProps>(
  ({ className, classes, messages, ...rest }, ref) => {
    return (
      <ConversationPitContext classes={classes} messages={messages}>
        <div {...rest} className={cx(className, classes?.root)} ref={ref}>
          <ChatInput main />
        </div>
      </ConversationPitContext>
    );
  },
);
