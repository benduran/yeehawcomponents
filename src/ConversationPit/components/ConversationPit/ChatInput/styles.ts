import { css } from '@emotion/css';

import { borders, colors } from '../../../../styles';

export const styles = {
  /**
   * Class name applied to each of a chat input's corresponding buttons
   */
  button: css`
    background: none transparent;
    border: ${borders.WITH_COLOR(colors.COLOR_GRAY)};
    border-radius: ${borders.RADIUS};
    font-size: 0.9em;
    padding: 0.5em;
    transition:
      background-color 0.2s ease,
      color 0.2s ease;

    &:hover {
      background-color: ${colors.COLOR_GRAY};
      cursor: pointer;
    }

    &.send {
      border-color: ${colors.COLOR_BLUE};
      color: ${colors.COLOR_BLUE};

      &:hover {
        background-color: ${colors.COLOR_BLUE};
        color: ${colors.COLOR_WHITE};
        cursor: pointer;
      }
    }
  `,
  /**
   * Class name applied to the button bar that's docked inside of the chat input
   */
  chatInputButtons: css`
    align-items: center;
    display: flex;
    justify-content: flex-end;
    gap: 0.5em;
  `,

  /**
   * Class name applied to any rendered <textarea />
   */
  textarea: css`
    border: ${borders.WITH_COLOR(colors.COLOR_GRAY)};
    border-radius: ${borders.RADIUS};
    font-family: inherit;
    font-size: 1em;
    outline: none;
    padding: 0.5em;
    resize: none;
    margin: 0;
    width: 100%;

    &:focus {
      border-color: ${colors.COLOR_BLUE};
      box-shadow: 0 0 4px inset ${colors.COLOR_BLUE};
    }
  `,
  /**
   * Class name applied to the <div />
   * that contains the <textarea /> and its control buttons
   */
  root: css`
    margin-top: 1em;
    padding: 0;
    position: relative;
  `,
};
