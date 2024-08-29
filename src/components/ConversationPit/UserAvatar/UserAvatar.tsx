import { useEffect, useMemo, useState } from 'react';

import { cx } from '../../../util';
import { useConversationPitContext } from '../Context';
import { UserAvatarProps } from '../types';
import { styles } from './styles';

const displayName = 'ChatAvatar';
export function UserAvatar({ user }: UserAvatarProps) {
  /** context */
  const { classes } = useConversationPitContext();

  /** state */
  const [imageLoading, setImageLoading] = useState<'error' | 'loading' | 'ready-to-display' | 'loaded'>('loading');

  /** styles */
  const rootClassName = cx(styles.root, classes?.userAvatar, displayName);

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
          className={cx(styles.image)}
          onError={() => setImageLoading('error')}
          onLoad={e => {
            console.info(e);
            setImageLoading('loaded');
          }}
          src={user.avatarUrl}
        />
      )}
      <span className={cx(styles.initials, showImage && styles.hideInitials)}>{initials}</span>
    </div>
  );
}
