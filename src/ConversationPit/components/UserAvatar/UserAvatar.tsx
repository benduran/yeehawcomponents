import { useEffect, useMemo, useState } from 'react';

import { useConversationPitContext } from '../../context';
import { useMakeConversationPitCx } from '../../hooks';
import { UserAvatarProps } from '../../types';
import { styles } from './styles';

const displayName = 'ChatAvatar';
export function UserAvatar({ className, displayIndent, user }: UserAvatarProps) {
  /** context */
  const { classes } = useConversationPitContext();

  /** state */
  const [imageLoading, setImageLoading] = useState<'error' | 'loading' | 'ready-to-display' | 'loaded'>('loading');

  /** styles */
  const cx = useMakeConversationPitCx('UserAvatar');
  const rootClassName = cx(styles.root, classes?.userAvatar, className, displayName);
  const indentClassName = cx(styles.indentGuide);

  /** memos */
  const initials = useMemo(() => {
    if (!user.fullName) return '';
    const splitFullName = user.fullName.split(/\s+/);

    return `${(splitFullName[0]?.charAt(0) ?? '').toLocaleUpperCase()}${splitFullName.pop()?.charAt(0)?.toLocaleUpperCase()}`;
  }, [user.fullName]);

  /** effects */
  useEffect(() => {
    if (!user.avatarUrl) return;
    const tryFetchImage = async () => {
      const r = await fetch(user.avatarUrl!);
      if (!r.ok) return setImageLoading('error');
      setImageLoading('ready-to-display');
    };
    tryFetchImage();
  }, [user.avatarUrl]);

  /** local variables */
  const showImage = imageLoading === 'ready-to-display' || imageLoading === 'loaded';

  return (
    <div className={rootClassName}>
      {Boolean(user.avatarUrl) && showImage && (
        <img
          alt={`${user.fullName}'s Avatar`}
          className={cx(styles.image, styles.imageOrInitials)}
          src={user.avatarUrl}
        />
      )}
      {(!user.avatarUrl || !showImage) && (
        <div className={cx(styles.initials, styles.imageOrInitials, showImage && styles.hideInitials)}>{initials}</div>
      )}
      {displayIndent && (
        <div aria-label={`Expand or collapse chat message`} className={indentClassName} role='button' />
      )}
    </div>
  );
}
