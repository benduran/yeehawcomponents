import { useMakeCx } from '../../hooks';

/**
 * Makes a Conversation Pit scoped cx() classname concatenation function
 */
export function useMakeConversationPitCx(componentName: string) {
  return useMakeCx('ConversationPit', componentName);
}
