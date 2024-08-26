import { css } from '@emotion/css';

import { colors, heights } from '../../../styles';

export const styles = {
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
    width: ${heights.HEIGHT_AVATAR};
  `,
};
