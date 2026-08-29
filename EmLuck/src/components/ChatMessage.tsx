import type { ChatMessage as ChatMessageType } from "../types/chat";
import "./ChatMessage.css";

interface ChatMessageProps {
  message: ChatMessageType;
}

export function ChatMessage({ message }: ChatMessageProps) {
  return (
    <article className={`chat-message chat-message--${message.role}`}>
      <div className="chat-message__content">
        {message.content}
      </div>
    </article>
  );
}