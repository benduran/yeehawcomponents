import { Nullish } from '../../types';

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
   * The date the message was created on your server
   */
  createDate: Date;

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

  /**
   * If a user edits this message, this is the date the update
   * occurred.
   */
  updatedDate?: Date;
}

export interface MessagesListProps extends Pick<MessageProps, 'depth'> {
  /**
   * CSS override classname
   */
  className?: string;

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
  depth: number;
  message: ConversationPitMessage;
}

export interface UserAvatarProps {
  className?: string;
  displayIndent: boolean;
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
   * Class name applied to the nested reply text box
   */
  replyChatInput: string;
  /**
   * Class name applied to the main chat box that is persistent and always visible
   */
  mainChatInput: string;
  /**
   * Class name applied to the <div /> that wraps around the message reply, edit and deletion action buttons
   */
  messageActions: string;

  /**
   * Class name applied to the <div /> that contains all
   * message contents, excluding the <UserAvatar />
   */
  messageContents: string;

  /**
   * Class name applied to the relative datetime stamp
   * for when a message was posted
   */
  messageDate: string;
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

export interface ConversationPitContextSelfProps {
  /**
   * Closes any opened chat replies
   */
  handleCloseReply: () => void;

  /**
   * Opens the text reply box for a given message
   */
  handleOpenReply: (parentMessage: ConversationPitMessage) => void;

  /**
   * The ID of the message that currently has its reply controls opened
   */
  openedReplyMessageId: string;

  /**
   * Lookup for messages to determine how to render themselves,
   * based on who the parent is
   */
  parentIdsToChildMessages: Map<string, ConversationPitMessage[]>;
}

export interface ConversationPitProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  /**
   * Whether or not a user should be able to delete messages
   * they've posted
   *
   * @default false
   */
  allowDeletion?: boolean;

  /**
   * Whether or not a user should be able to edit messages
   * they've posted
   *
   * @default false
   */
  allowEdit?: boolean;

  /**
   * CSS classes to provide to style Conversation Pit
   */
  classes?: Partial<ConversationPitClasses>;
  /**
   * The current user persona that is chatting with folks
   */
  currentUser: ConversationPitUser;

  /**
   * Called on each <ChatInput /> render to determine the placeholder
   * message to show to a user.
   * If no function is provided, a default message will be displayed instead
   */
  getChatInputPlaceholder?: (main: boolean, message?: ConversationPitMessage) => string;

  /**
   * zero-indexed number, this determines the maximum depth of replies allowed.
   *
   * @default 1
   */
  maxThreadDepth?: number;

  /**
   * Array of messages to display in the component
   */
  messages: ConversationPitMessage[];

  /**
   * callback fired when a user presses enter or the send button,
   * after they've typed a message
   */
  onSend: (
    sendingUser: ConversationPitUser,
    message: string,
    mentions: string[],
    parentMessage: Nullish<ConversationPitMessage>,
  ) => void;
}

export type ConversationPitContextProps = ConversationPitContextSelfProps & ConversationPitProps;

export interface ChatInputProps {
  /**
   * CSS class name override
   */
  className?: string;
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

  /**
   * If set, this means this message
   * belongs to a thread
   */
  parentMessage: Nullish<ConversationPitMessage>;
}

export interface ChatInputButtonsProps extends Pick<ChatInputProps, 'main'> {
  onSend: () => void;
}
