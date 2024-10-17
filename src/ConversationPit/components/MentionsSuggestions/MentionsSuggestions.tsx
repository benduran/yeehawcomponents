import { useState } from 'react';

import { Nullish } from '../../../types';
import { useConversationPitContext } from '../../context';
import { useMakeConversationPitCx } from '../../hooks';
import { ConversationPitUser } from '../../types';
import { styles } from './styles';

interface MentionsSuggestionsProps {
  /**
   * current suggestions returned by the user's mention query function
   */
  mentionsSuggestions: ConversationPitUser[];
}

export function MentionsSuggestions({ mentionsSuggestions }: MentionsSuggestionsProps) {
  /** context */
  const { classes: classesOverrides } = useConversationPitContext();

  /** state */
  const [active, setActive] = useState<Nullish<ConversationPitUser>>(null);

  /** styles */
  const cx = useMakeConversationPitCx('MentionsSuggestions');
  const rootClassName = cx(styles.root, classesOverrides?.mentions);

  if (!mentionsSuggestions.length) return null;

  return (
    <div className={rootClassName} role='presentation'>
      <ul role='listbox'>
        {mentionsSuggestions.map(u => (
          <li aria-selected key={u.email} role='option' tabIndex={-1}>
            {u.fullName}
          </li>
        ))}
      </ul>
    </div>
  );
}
