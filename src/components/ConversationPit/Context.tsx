import { createContext, ReactNode, useContext } from 'react';

import { ConversationPitContextProps } from './types';

const context = createContext<ConversationPitContextProps | null>(null);

export function ConversationPitContext({ children, ...props }: ConversationPitContextProps & { children: ReactNode }) {
  return <context.Provider value={props}>{children}</context.Provider>;
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
