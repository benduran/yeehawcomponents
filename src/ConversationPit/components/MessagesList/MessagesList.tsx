import { useConversationPitContext } from '../../context';
import { useMakeConversationPitCx } from '../../hooks';
import { MessagesListProps } from '../../types';
import { Message } from '../Message';
import { styles } from './styles';

const displayName = 'MessagesList';
export function MessagesList({ className, depth, messages, parent }: MessagesListProps) {
  /** context */
  const { classes } = useConversationPitContext();

  /** hooks */
  const cx = useMakeConversationPitCx('MessagesList');

  /** local variables */
  const hasParent = Boolean(parent);

  /** styles */
  const rootClassName = cx(
    styles.root,
    classes?.messagesList,
    className,
    displayName,
    hasParent && cx(styles.childRoot, classes?.childMessagesList),
  );

  return (
    <ul className={rootClassName}>
      {messages
        .filter(m => !m.parentId || (parent && parent.id === m.parentId))
        .map(m => (
          <Message depth={depth} key={m.id} message={m} />
        ))}
    </ul>
  );
}
