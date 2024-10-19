import { css } from '@emotion/css';

import { colors } from '../../../styles';

const selected = `
  background-color: ${colors.COLOR_BLUE};
  color: ${colors.COLOR_WHITE};
`;

export const styles = {
  /**
   * Class name applied to the <ul /> that holds all of the mentions
   */
  mentionsList: css`
    list-style: none;
    margin: 0;
    padding: 0;
  `,

  /**
   * Class name applied to each individual, selectable mention
   */
  mention: css`
    background-color: ${colors.COLOR_WHITE};
    font-size: 1em;
    padding: 0.5em;
    transition:
      background-color 0.2s ease,
      color 0.2s ease;

    &:hover {
      ${selected}
      cursor: pointer;
    }
  `,

  /**
   * Class name applied when a specific mention is selected by the user
   * (typically from a keyboard UP or DOWN press)
   */
  mentionSelected: css`
    ${selected}
  `,

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
  `,
};
