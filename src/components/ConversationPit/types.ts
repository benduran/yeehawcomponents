export interface ConversationPitMessage {
  /**
   * Unique ID for this thread
   */
  id: string;
  /**
   * Collection of text blobs that map to
   * email addresses or other form of contacting
   * a person
   */
  mentions?: Record<string, string>;
  /**
   * Contents of the message
   */
  message: string;
  /**
   * If this is set, this chat will become
   * nested under the parent in a thread-like manner
   */
  parentId?: string;
}

export interface ConversationPitClasses {
  /**
   * Class name applied to each individual textbox (<textarea>, specifically)
   */
  chatInput: string;
  /**
   * Class name applied to the button bar that's docked inside of the chat input
   */
  chatInputButtons: string;
  /**
   * Class name applied to the main chat box that is persistent and always visible
   */
  mainChatInput: string;
  /**
   * Class name applied to the outer-most root of the <ConversationPit /> component
   */
  root: string;
}

export interface ConversationPitContextProps {
  /**
   * CSS classes to provide to style Conversation Pit
   */
  classes?: Partial<ConversationPitClasses>;
  /**
   * Array of messages to display in the component
   */
  messages: ConversationPitMessage[];
}

export type ConversationPitProps = ConversationPitContextProps &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface ChatInputProps {
  /**
   * If set, sets this content as the initial
   * content available for the user to edit
   * in the text input
   */
  message?: ConversationPitMessage;

  /**
   * If true, treats this chat input if it's the main
   * box that appears at the very bottom of the widget
   */
  main: boolean;
}

export interface ChatInputButtonsProps {
  onSend: () => void;
}
