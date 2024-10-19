import { css } from '@emotion/css';
import dayjs from 'dayjs';
import { useCallback, useRef, useState } from 'react';

import {
  ConversationPit,
  ConversationPitMessage,
  ConversationPitProps,
  ConversationPitUser,
} from '../../../ConversationPit';

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

export function MentionsConversationPitExample() {
  /** refs */
  const mentionsTimeout = useRef<NodeJS.Timeout | number | void>();

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

  /** callbacks */
  const handleFetchMentions = useCallback<NonNullable<ConversationPitProps['fetchMentions']>>(
    mentionQuery =>
      new Promise(resolve => {
        const possibleUsers: ConversationPitUser[] = [
          {
            avatarUrl:
              'https://static1.colliderimages.com/wordpress/wp-content/uploads/2019/10/strange-secret-of-bruce-wayne-joker-600x451.jpg',
            email: 'joker@mischief.net',
            fullName: 'The Joker',
          },
          {
            avatarUrl: 'https://qph.cf2.quoracdn.net/main-qimg-4b39440acdf8db23f0b7a64dc8fc9820',
            email: 'bruce@wayneenterprises.com',
            fullName: 'Bruce Wayne',
          },
          {
            avatarUrl:
              'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c10a26e2-8af9-43b4-b871-1c7dbe15b650/dg19q2a-d9f4f3b4-0253-4e0f-8633-b403c218345e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2MxMGEyNmUyLThhZjktNDNiNC1iODcxLTFjN2RiZTE1YjY1MFwvZGcxOXEyYS1kOWY0ZjNiNC0wMjUzLTRlMGYtODYzMy1iNDAzYzIxODM0NWUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.X2tj-AFX_3aF5ebVgFtL58Zsaou1VjV9PsrRGd0y6Pk',
            email: 'neo@therealworld.com',
            fullName: 'Neo',
          },
          {
            avatarUrl:
              'https://upload.wikimedia.org/wikipedia/en/1/1f/Agent_Smith_%28The_Matrix_series_character%29.jpg',
            email: 'smith@agents.net',
            fullName: 'Agent Smith',
          },
        ].sort((a, b) => a.fullName.localeCompare(b.fullName));

        if (mentionsTimeout.current) {
          mentionsTimeout.current = clearTimeout(mentionsTimeout.current);
        }

        mentionsTimeout.current = setTimeout(() => {
          if (!mentionQuery) return resolve(possibleUsers);
          const lowerQuery = mentionQuery.toLowerCase();

          return resolve(possibleUsers.filter(u => u.fullName.toLowerCase().includes(lowerQuery)));
        }, 200);
      }),
    [],
  );

  return (
    <div className={rootClassName}>
      <ConversationPit
        currentUser={currentUser}
        fetchMentions={handleFetchMentions}
        messages={messages}
        onSend={(user, message, mentions, parentMessage) => {
          setMessages(prev => [
            ...prev,
            {
              author: user,
              createDate: new Date(),
              id: performance.now().toString(),
              message,
              parentId: parentMessage?.id,
              mentions,
            },
          ]);
        }}
      />
    </div>
  );
}
