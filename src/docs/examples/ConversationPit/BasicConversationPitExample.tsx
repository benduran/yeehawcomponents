import { ConversationPit, ConversationPitMessage } from '../../../components';

/* ---FENCE--- */

const messages: ConversationPitMessage[] = [
  {
    id: '1',
    message: 'Hey there! How are you doing?',
  },
];

export function BasicConversationPitExample() {
  return <ConversationPit messages={messages} />;
}
