import { css } from '@emotion/css';

import { colors } from '../../../styles';

export const styles = {
  /**
   * Class name applied to any rendered <textarea />
   */
  textarea: css`
    border: 1px solid ${colors.COLOR_GRAY};
    border-radius: 0;
    font-family: inherit;
    font-size: 1em;
    padding: 0.5em 2.5em 0.5em 0.5em;
    resize: none;
    margin: 0;
    width: 100%;
  `,
  /**
   * Class name applied to the <div />
   * that contains the <textarea /> and its control buttons
   */
  root: css`
    padding: 0;
    position: relative;
  `,
};
