import { ConversationPit, ConversationPitMessage } from '../../../components';

/* ---FENCE--- */

const messages: ConversationPitMessage[] = [
  {
    author: {
      avatarUrl: 'https://qph.cf2.quoracdn.net/main-qimg-4b39440acdf8db23f0b7a64dc8fc9820',
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
