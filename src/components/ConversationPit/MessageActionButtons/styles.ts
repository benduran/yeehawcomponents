import { css } from '@emotion/css';

import { colors } from '../../../styles';

export const styles = {
  /**
   * Class name applied to the root of the message action buttons
   */
  root: css`
    align-items: center;
    display: flex;
    font-size: 0.8em;
    gap: 1em;
    margin-bottom: 1em;

    & > button {
      background: none transparent;
      border: none;
      color: ${colors.COLOR_BLUE};
      padding: 0;

      &:hover {
        cursor: pointer;
      }
    }
  `,
};
