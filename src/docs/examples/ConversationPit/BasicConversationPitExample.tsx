import dayjs from 'dayjs';
import { useState } from 'react';

import { ConversationPit, ConversationPitMessage, ConversationPitUser } from '../../../ConversationPit';

/* ---FENCE--- */

const currentUser: ConversationPitUser = {
  email: 'someuser@yeehawcomponents.com',
  fullName: 'Yeehaw Cowboy',
};

export function BasicConversationPitExample() {
  /** state */
  const [messages, setMessages] = useState<ConversationPitMessage[]>([
    {
      author: {
        avatarUrl: 'https://qph.cf2.quoracdn.net/main-qimg-4b39440acdf8db23f0b7a64dc8fc9820',
        email: 'bruce@wayneenterprises.com',
        fullName: 'Bruce Wayne',
      },
      createDate: dayjs().subtract(4, 'hour').toDate(),
      id: '1',
      message: 'Hey there! How are you doing?',
    },
  ]);

  console.info(messages);

  return (
    <ConversationPit
      currentUser={currentUser}
      messages={messages}
      onSend={(user, message, mentions, parentMessage) =>
        setMessages(prev => [
          ...prev,
          {
            author: user,
            createDate: new Date(),
            id: performance.now().toString(),
            message,
            parentId: parentMessage?.id,
          },
        ])
      }
    />
  );
}
