import { css } from '@emotion/css';

import { heights } from '../../styles';

export const styles = {
  /**
   * Class name applied to the <ul />
   * that holds the list of messages
   * received in the chat
   */
  root: css`
    list-style: none;
    margin-top: 1em;
    padding: 0;

    & > li {
      margin-bottom: 0.5em;

      &:last-child {
        margin-bottom: 0;
      }
    }
  `,

  /** Class name applied to only the main, outer-most messages list */
  mainRoot: css`
    left: 0;
    bottom: ${heights.TEXTAREA_HEIGHT};
    margin: 1em 0 0 0;
    max-height: calc(100% - ${heights.TEXTAREA_HEIGHT});
    overflow-y: auto;
    position: absolute;
    right: 0;
    -webkit-overflow-scrolling: touch;
  `,
};
