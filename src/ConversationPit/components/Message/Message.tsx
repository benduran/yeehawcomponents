import { ReactNode, useMemo } from 'react';

import { Dates } from '../../../util';
import { useConversationPitContext } from '../../context';
import { useMakeConversationPitCx } from '../../hooks';
import { MessageProps } from '../../types';
import { ChatInput } from '../ChatInput';
import { MessageActionButtons } from '../MessageActionButtons';
import { MessagesList } from '../MessagesList';
import { UserAvatar } from '../UserAvatar';
import { styles } from './styles';

const displayName = 'Message';
const messageDetailsDisplayName = 'MessageDetails';
const messageTextDisplayName = 'MessageText';
const replyChatInputDisplayName = 'ReplyChatInput';
const messageActionsDisplayName = 'MessageActions';
const messageContentsDisplayName = 'MessageContents';
const messageDateDisplayName = 'MessageDate';

export function Message({ depth, message }: MessageProps) {
  /** context */
  const {
    allowDeletion,
    allowEdit,
    classes,
    collapsedMessageIds,
    currentUser,
    maxThreadDepth = 1,
    openedReplyMessageId,
    parentIdsToChildMessages,
  } = useConversationPitContext();

  /** hooks */
  const cx = useMakeConversationPitCx('Message');
  const childCx = useMakeConversationPitCx('ChildMessages');

  /** memos */
  const mentionedReplacedMessage = useMemo((): ReactNode | ReactNode[] => {
    if (!message.mentions) return message.message;

    const out: ReactNode[] = [];

    for (const mention of message.mentions) {
      // TODO: Need to find ALL the spots in the string that match the mentioned text
      // and replace them with <a /> link tags.
    }

    return out;
  }, [message.mentions, message.message]);

  /** local variables */
  const isReplyOpened = openedReplyMessageId === message.id;
  const authorIsCurrentUser = message.author.email === currentUser.email;
  const isSomeActionAllowed = ((allowDeletion || allowEdit) && authorIsCurrentUser) || !authorIsCurrentUser;
  const childMessages = parentIdsToChildMessages.get(message.id);
  const isMaxDepth = depth >= maxThreadDepth;
  const canDelete = Boolean(allowDeletion && authorIsCurrentUser);
  const canEdit = Boolean(allowEdit && authorIsCurrentUser);
  const canReply = !isMaxDepth && !authorIsCurrentUser;
  const hasAnyAction = canDelete || canEdit || canReply;
  const childrenAreCollapsed = collapsedMessageIds.has(message.id);

  /** styles */
  const rootClassName = cx(styles.root, classes?.message, displayName);
  const usernameClassname = cx(styles.details, classes?.messageDetails, messageDetailsDisplayName);
  const messageTextClassName = cx(styles.text, classes?.messageText, messageTextDisplayName);
  const replyChatInputClassName = cx(styles.replyChatInput, classes?.replyChatInput, replyChatInputDisplayName);
  const messageActionsClassName = cx(styles.messageActions, classes?.messageActions, messageActionsDisplayName);
  const messageDateClassName = cx(styles.messageDate, classes?.messageDate, messageDateDisplayName);
  const messageContentsClassName = cx(styles.messageContents, classes?.messageContents, messageContentsDisplayName);
  const childMessagesClassName = childCx(styles.childMessages);

  return (
    <li className={rootClassName}>
      <UserAvatar displayIndent={Boolean(childMessages?.length)} message={message} user={message.author} />
      <div className={messageContentsClassName}>
        <div className={usernameClassname}>
          <div>{message.author.fullName}</div>
        </div>
        <div className={messageTextClassName}>{message.message}</div>
        <div className={messageActionsClassName}>
          <div className={messageDateClassName}>
            {Dates.relativeFromNow(message.updatedDate ?? message.createDate)}
            {hasAnyAction && !isReplyOpened && isSomeActionAllowed && <div>•</div>}
          </div>
          <MessageActionButtons canDelete={canDelete} canEdit={canEdit} canReply={canReply} message={message} />
        </div>
        {isReplyOpened && <ChatInput className={replyChatInputClassName} main={false} parentMessage={message} />}
        {childMessages?.length && !childrenAreCollapsed && (
          <MessagesList
            className={childMessagesClassName}
            depth={depth + 1}
            messages={childMessages}
            parent={message}
          />
        )}
      </div>
    </li>
  );
}
