import { createContext, PropsWithChildren, useCallback, useContext, useMemo, useState } from 'react';

import { Nullish } from '../../types';
import { ConversationPitContextProps, ConversationPitMessage, ConversationPitProps } from '../types';

const context = createContext<Nullish<ConversationPitContextProps>>(null);

export function ConversationPitContext({ children, messages, ...props }: ConversationPitProps & PropsWithChildren) {
  /** state */
  const [openedReplyMessageId, setOpenedReplyMessageId] = useState('');
  const [collapsedMessageIds, setCollapsedMessageIds] = useState<Set<string>>(new Set());

  /** callbacks */
  const handleOpenReply = useCallback(
    (parentMessage: ConversationPitMessage) => setOpenedReplyMessageId(parentMessage.id),
    [],
  );

  const handleCloseReply = useCallback(() => setOpenedReplyMessageId(''), []);

  const handleIndentGuideClick = useCallback((parentMessage: ConversationPitMessage) => {
    setCollapsedMessageIds(prev => {
      if (prev.has(parentMessage.id)) {
        return new Set(Array.from(prev).filter(id => id !== parentMessage.id));
      }
      return new Set([...Array.from(prev), parentMessage.id]);
    });
  }, []);

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
      collapsedMessageIds,
      handleCloseReply,
      handleIndentGuideClick,
      handleOpenReply,
      messages,
      openedReplyMessageId,
      parentIdsToChildMessages,
    }),
    [
      collapsedMessageIds,
      handleCloseReply,
      handleIndentGuideClick,
      handleOpenReply,
      messages,
      openedReplyMessageId,
      parentIdsToChildMessages,
      props,
    ],
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
