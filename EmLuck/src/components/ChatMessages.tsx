import type { ChatMessage as ChatMessageType } from "../types/chat";
import { ChatMessage } from "./ChatMessage";
import "./ChatMessages.css";

interface ChatMessagesProps {
  messages: ChatMessageType[];
}

export function ChatMessages({ messages }: ChatMessagesProps) {
  return (
    <div className="chat-messages">
      {messages.map((message) => (
        <ChatMessage key={message.id} message={message} />
      ))}
    </div>
  );
}