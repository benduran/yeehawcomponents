import { css } from '@emotion/css';

import { colors } from '../../../styles';

export const styles = {
  /**
   * Class name applied to each of a chat input's corresponding buttons
   */
  button: css`
    background: ${colors.COLOR_WHITE};
    border: 1px solid ${colors.COLOR_GRAY};

    &:hover {
      background-color: ${colors.COLOR_GRAY};
      cursor: pointer;
    }
  `,
  /**
   * Class name applied to the button bar that's docked inside of the chat input
   */
  root: css`
    display: flex;
    flex-direction: column;
    gap: 0.25em;
    position: absolute;
    right: 0.5em;
    top: 1em;
    z-index: 1;
  `,
};
