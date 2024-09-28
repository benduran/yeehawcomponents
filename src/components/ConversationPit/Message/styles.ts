import { css } from '@emotion/css';

export const styles = {
  /**
   * Class name applied to the <div /> that holds a chat
   * message's author name and send time
   */
  details: css`
    font-size: 0.8em;
    font-weight: bold;
  `,

  /**
   * Class name applied to the <div /> that wraps around the message reply, edit and deletion action buttons
   */
  messageActions: css`
    grid-column: 2 / 3;
    margin-top: 1em;
  `,

  /**
   * Class name applied to the nested reply text box
   */
  replyChatInput: css`
    grid-column: 2 / 3;
    margin-top: 1em;
  `,

  /**
   * Class name applied to the actual sent message text
   */
  text: css`
    grid-column: 2 / 3;
    padding: 0;
  `,

  /**
   *  Class name applied to the <li /> that holds each received message
   */
  root: css`
    align-items: center;
    display: grid;
    gap: 0 0.5em;
    grid-template-columns: min-content 1fr;
  `,
};
