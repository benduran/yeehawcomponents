import React from 'react';

import { ConversationPitProps } from './types.js';

export const ConversationPit = React.forwardRef<HTMLDivElement, ConversationPitProps>(({ messages, ...rest }, ref) => {
  return (
    <div {...rest} ref={ref}>
      Number of messages {messages.length}
    </div>
  );
});
