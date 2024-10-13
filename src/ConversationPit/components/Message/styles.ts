import { css } from '@emotion/css';

import { colors } from '../../../styles';

export const styles = {
  /**
   * Class name applied to any nested <ul /> child message list
   * (represents a thread)
   */
  childMessages: css`
    grid-column: 2 / 3;
    margin-top: 0.5em;
  `,

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
    align-items: center;
    display: flex;
    gap: 0.5em;
    grid-column: 2 / 3;
    margin-top: 0.5em;
  `,

  /**
   * Class name applied to the <div /> that contains all
   * message contents, excluding the <UserAvatar />
   */
  messageContents: css``,

  /**
   * Class name applied to the relative timestamp for when this
   * message was posted
   */
  messageDate: css`
    align-items: center;
    color: ${colors.COLOR_GRAY_DARK};
    display: flex;
    gap: 0.5em;
    font-size: 0.8em;
  `,

  /**
   * Class name applied to the nested reply text box
   */
  replyChatInput: css`
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
    align-items: flex-start;
    display: grid;
    gap: 0 0.5em;
    grid-template-columns: auto 1fr;
    padding-bottom: 0.5em;
    position: relative;
  `,
};
