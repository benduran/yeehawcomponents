import { useMakeCx } from '../../../hooks';
import { useConversationPitContext } from '../Context';
import { Message } from '../Message';
import { MessagesListProps } from '../types';
import { styles } from './styles';

const displayName = 'MessagesList';
export function MessagesList({ messages, parent }: MessagesListProps) {
  /** context */
  const { classes } = useConversationPitContext();

  /** hooks */
  const cx = useMakeCx('ConversationPit', 'MessagesList');

  /** local variables */
  const hasParent = Boolean(parent);

  /** styles */
  const rootClassName = cx(
    styles.root,
    classes?.messagesList,
    displayName,
    hasParent && cx(styles.childRoot, classes?.childMessagesList),
  );

  return (
    <ul className={rootClassName}>
      {messages.map(m => (
        <Message key={m.id} message={m} />
      ))}
    </ul>
  );
}
