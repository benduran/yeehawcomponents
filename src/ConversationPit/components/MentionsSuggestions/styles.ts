import { css } from '@emotion/css';

import { colors } from '../../../styles';

export const styles = {
  /**
   * Class name applied to the mentions suggestions list
   */
  root: css`
    border: 1px solid ${colors.COLOR_GRAY};
    box-shadow: 0 0 4px ${colors.COLOR_GRAY_DARK};
    bottom: 100%;
    left: 0;
    position: absolute;
    right: 0;

    & > ul {
      list-style: none;
      margin: 0;
      padding: 0;

      & > li {
        background-color: ${colors.COLOR_WHITE};
        font-size: 1em;
        padding: 0.5em;
      }
    }
  `,
};
