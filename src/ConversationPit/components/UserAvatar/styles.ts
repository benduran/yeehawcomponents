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
    object-fit: cover;
  `,

  /**
   * Class name applied to the initial or image for rounding
   * the borders and normalizing the avatar display
   */
  imageOrInitials: css`
    align-items: center;
    background-color: ${colors.COLOR_GRAY};
    border-radius: 50%;
    display: flex;
    height: ${heights.HEIGHT_AVATAR};
    justify-content: center;
    overflow: hidden;
    width: ${heights.HEIGHT_AVATAR};
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

  /**
   * Class name for the conditionally-rendered indent guide line
   */
  indentGuide: css`
    background-color: ${colors.COLOR_GRAY};
    flex-grow: 1;
    width: 4px;
    transition: width 0.2s ease;

    &:hover {
      cursor: pointer;
      width: 10px;
    }
  `,

  /** Class name applied to the initials */
  initials: css``,

  /**
   * Class name applied to the <div />
   * that holds a user's avatar chat avatar
   */
  root: css`
    align-items: center;
    display: flex;
    flex-direction: column;
    font-size: 0.8em;
    gap: 0.5em;
    height: 100%;
    position: relative;
  `,
};
