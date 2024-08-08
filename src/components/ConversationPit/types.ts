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

export interface ConversationPitProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  /**
   * Array of messages to display in the component
   */
  messages: ConversationPitMessage[];
}
