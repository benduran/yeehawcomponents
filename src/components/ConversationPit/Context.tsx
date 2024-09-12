import { createContext, PropsWithChildren, useCallback, useContext, useMemo, useState } from 'react';

import { ConversationPitContextProps, ConversationPitMessage } from './types';

const context = createContext<ConversationPitContextProps | null>(null);

export function ConversationPitContext({
  children,
  ...props
}: Omit<ConversationPitContextProps, 'handleOpenReply' | 'openedReplyMessageId'> & PropsWithChildren) {
  /** state */
  const [openedReplyMessageId, setOpenedReplyMessageId] = useState('');

  /** callbacks */
  const handleOpenReply = useCallback(
    (parentMessage: ConversationPitMessage) => setOpenedReplyMessageId(parentMessage.id),
    [],
  );

  /** memos */
  const providerVal = useMemo(
    (): ConversationPitContextProps => ({
      ...props,
      handleOpenReply,
      openedReplyMessageId,
    }),
    [handleOpenReply, openedReplyMessageId],
  );

  return <context.Provider value={providerVal}>{children}</context.Provider>;
}

export function useConversationPitContext() {
  const ctx = useContext(context);

  if (!ctx) {
    throw new Error(
      'unable to useConversationPitContext() because no <ConversationPitProvider /> was in the parent render tree',
    );
  }

  return ctx;
}
