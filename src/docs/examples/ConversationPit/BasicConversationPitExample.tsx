import { ConversationPit, ConversationPitMessage } from '../../../components';

/* ---FENCE--- */

const messages: ConversationPitMessage[] = [
  {
    author: {
      avatarUrl:
        'https://static.wikia.nocookie.net/batmantheanimatedseries/images/b/b1/PP_20_-_Your_crazy_friend.jpg/revision/latest?cb=20210328110721',
      email: 'bruce@wayneenterprises.com',
      fullName: 'Bruce Wayne',
    },
    id: '1',
    message: 'Hey there! How are you doing?',
  },
];

export function BasicConversationPitExample() {
  return <ConversationPit messages={messages} />;
}
