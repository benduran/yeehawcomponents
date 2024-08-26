import { css } from '@emotion/css';

export const styles = {
  /**
   * Class name applied to the <div /> that holds a chat
   * message's author name and send time
   */
  details: css`
    align-items: center;
    display: flex;
    gap: 0.5em;
  `,

  /**
   * Class name applied to the actual sent message text
   */
  text: css`
    padding: 0.5em 0;
  `,

  /**
   *  Class name applied to the <li /> that holds each received message
   */
  root: css``,
};
