import { useMemo } from 'react';

import { cx } from '../../../util';
import { useConversationPitContext } from '../Context';
import { UserAvatarProps } from '../types';
import { styles } from './styles';

const displayName = 'ChatAvatar';
export function UserAvatar({ user }: UserAvatarProps) {
  /** context */
  const { classes } = useConversationPitContext();

  /** styles */
  const rootClassName = cx(styles.root, classes?.userAvatar, displayName);

  /** memos */
  const initials = useMemo(() => {
    if (!user.fullName) return '';
    const splitFullName = user.fullName.split(/\s+/);

    return `${(splitFullName[0]?.charAt(0) ?? '').toLocaleUpperCase()}${splitFullName.pop()?.charAt(0)?.toLocaleUpperCase()}`;
  }, [user.fullName]);

  return <div className={rootClassName}>{initials}</div>;
}
