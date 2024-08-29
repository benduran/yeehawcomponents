import { css } from '@emotion/css';

import { colors, heights } from '../../../styles';

export const styles = {
  /**
   * Class name applied to the initials when they need to be hidden becuase an image loaded successfully
   */
  hideInitials: css`
    display: none;
  `,
  /**
   * Class name applied to the actual user avatar <img />
   */
  image: css`
    height: 100%;
    object-fit: cover;
    width: 100%;
  `,
  /**
   * Class name applied when the avatar has failed to load
   */
  imageError: css`
    display: none;
  `,
  /**
   * Class name applied to the avatar image while it is loading
   */
  imageLoading: css`
    visibility: hidden;
  `,

  /** Class name applied to the initials */
  initials: css``,

  /**
   * Class name applied to the <div />
   * that holds a user's avatar chat avatar
   */
  root: css`
    align-items: center;
    background-color: ${colors.COLOR_GRAY};
    border-radius: 50%;
    display: flex;
    font-size: 0.8em;
    height: ${heights.HEIGHT_AVATAR};
    justify-content: center;
    overflow: hidden;
    width: ${heights.HEIGHT_AVATAR};
  `,
};
