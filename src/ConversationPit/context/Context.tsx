import { createContext, PropsWithChildren, useCallback, useContext, useMemo, useState } from 'react';

import { ConversationPitContextProps, ConversationPitMessage } from '../types';

const context = createContext<ConversationPitContextProps | null>(null);

export function ConversationPitContext({
  children,
  messages,
  ...props
}: Omit<
  ConversationPitContextProps,
  'handleCloseReply' | 'handleOpenReply' | 'openedReplyMessageId' | 'parentIdsToChildMessages'
> &
  PropsWithChildren) {
  /** state */
  const [openedReplyMessageId, setOpenedReplyMessageId] = useState('');

  /** callbacks */
  const handleOpenReply = useCallback(
    (parentMessage: ConversationPitMessage) => setOpenedReplyMessageId(parentMessage.id),
    [],
  );
  const handleCloseReply = useCallback(() => setOpenedReplyMessageId(''), []);

  /** memos */

  const parentIdsToChildMessages = useMemo<Map<string, ConversationPitMessage[]>>(() => {
    const out: Map<string, ConversationPitMessage[]> = new Map();

    for (const msg of messages) {
      if (!msg.parentId) continue;

      const children = out.get(msg.parentId) ?? [];
      out.set(msg.parentId, [...children, msg]);
    }

    return out;
  }, [messages]);

  const providerVal = useMemo(
    (): ConversationPitContextProps => ({
      ...props,
      handleCloseReply,
      handleOpenReply,
      messages,
      openedReplyMessageId,
      parentIdsToChildMessages,
    }),
    [handleCloseReply, handleOpenReply, messages, openedReplyMessageId, parentIdsToChildMessages, props],
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
