export interface ConversationPitUser {
  /**
   * If present, will attempt to fetch a valid image file
   * to display in a circular avatar UI component.
   *
   * If not present, user's first and last initial will be displayed
   * instead.
   */
  avatarUrl?: string;
  /**
   * User's unique email address used when they started the chat
   */
  email: string;
  /**
   * User's first name and surname (last name).
   * This will be displayed beside their avatar on
   * each received message.
   */
  fullName: string;
}

export interface ConversationPitMessage {
  /**
   * Person that authored this particular message
   */
  author: ConversationPitUser;
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

export interface MessagesListProps {
  /**
   * List of messages for this particular thread
   */
  messages: ConversationPitMessage[];

  /**
   * Parent to this message thread
   */
  parent?: ConversationPitMessage;
}

export interface MessageProps {
  message: ConversationPitMessage;
}

export interface UserAvatarProps {
  user: ConversationPitUser;
}

export interface UserDetailsProps {
  user: ConversationPitUser;
}

export interface ConversationPitClasses {
  /**
   * Class name applied to each individual textbox (<textarea>, specifically)
   */
  chatInput: string;
  /**
   * Class name applied to each of a chat input's corresponding buttons
   */
  chatInputButton: string;
  /**
   * Class name applied to the button bar that's docked inside of the chat input
   */
  chatInputButtons: string;
  /**
   * Class name applied to a messages list that has a parent.
   * This list is considered part of a thread, and is rendered to
   * be displayed as such.
   */
  childMessagesList: string;
  /**
   * Class name applied to the main chat box that is persistent and always visible
   */
  mainChatInput: string;
  /**
   * Class name applied to the <div /> that holds a chat
   * message's author name and send time
   */
  messageDetails: string;
  /**
   * Class name applied to the actual sent message text
   */
  messageText: string;
  /**
   * Class name applied to the root of each individual message
   */
  message: string;
  /**
   * Class name applied to the <ul />
   * that holds the list of messages
   * received in the chat
   */
  messagesList: string;
  /**
   * Class name applied to any rendered <textarea />
   */
  textarea: string;
  /**
   * Class name applied to the <div />
   * that holds a user's avatar chat avatar
   */
  userAvatar: string;
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
   * Called on each <ChatInput /> render to determine the placeholder
   * message to show to a user.
   * If no function is provided, a default message will be displayed instead
   */
  getChatInputPlaceholder?: (main: boolean, message?: ConversationPitMessage) => string;
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
