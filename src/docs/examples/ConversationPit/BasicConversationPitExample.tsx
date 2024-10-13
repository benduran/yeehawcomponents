import { css } from '@emotion/css';
import dayjs from 'dayjs';
import { useState } from 'react';

import { ConversationPit, ConversationPitMessage, ConversationPitUser } from '../../../ConversationPit';

/* ---FENCE--- */

const rootClassName = css`
  display: flex;
  flex-direction: column;
  height: 400px;
`;

const currentUser: ConversationPitUser = {
  email: 'someuser@yeehawcomponents.com',
  fullName: 'Yeehaw Cowboy',
};

const firstMsgCreateDate = dayjs().subtract(4, 'hours');

export function BasicConversationPitExample() {
  /** state */
  const [messages, setMessages] = useState<ConversationPitMessage[]>([
    {
      author: {
        avatarUrl: 'https://qph.cf2.quoracdn.net/main-qimg-4b39440acdf8db23f0b7a64dc8fc9820',
        email: 'bruce@wayneenterprises.com',
        fullName: 'Bruce Wayne',
      },
      createDate: firstMsgCreateDate.toDate(),
      id: '1',
      message: 'Hey there! How are you doing?',
    },
    {
      author: {
        avatarUrl:
          'https://static1.colliderimages.com/wordpress/wp-content/uploads/2019/10/strange-secret-of-bruce-wayne-joker-600x451.jpg',
        email: 'joker@mischief.net',
        fullName: 'The Joker',
      },
      createDate: firstMsgCreateDate.add(10, 'minutes').toDate(),
      id: '2',
      message: 'What? Why are you contacting me?',
      parentId: '1',
    },
    {
      author: {
        avatarUrl:
          'https://static1.colliderimages.com/wordpress/wp-content/uploads/2019/10/strange-secret-of-bruce-wayne-joker-600x451.jpg',
        email: 'joker@mischief.net',
        fullName: 'The Joker',
      },
      createDate: firstMsgCreateDate.add(15, 'minutes').toDate(),
      id: '3',
      message: 'And I thought I was the crazy one!',
      parentId: '1',
    },
  ]);

  return (
    <div className={rootClassName}>
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
    </div>
  );
}
