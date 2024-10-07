import { css } from '@emotion/css';

export const styles = {
  /**
   * Class name applied to a messages list that has a parent.
   * This list is considered part of a thread, and is rendered to
   * be displayed as such.
   */
  childRoot: css`
    margin-left: 1em;
  `,
  /**
   * Class name applied to the <ul />
   * that holds the list of messages
   * received in the chat
   */
  root: css`
    list-style: none;
    margin: 0;
    padding: 0;

    & > li {
      margin-bottom: 0.5em;

      &:last-child {
        margin-bottom: 0;
      }
    }
  `,
};
