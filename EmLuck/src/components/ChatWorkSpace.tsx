import { WelcomeScreen } from "./WelcomeScreen";
import { ChatMessages } from "./ChatMessages";
import { ChatInput } from "./ChatInput";
import { ThinkingIndicator } from "./ThinkingIndicator";
import { useChat } from "../hooks/useChat";
import "./ChatWorkSpace.css";

export function ChatWorkSpace() {
  const {
    messages,
    isThinking,
    sendMessage,
  } = useChat();

  const hasMessages = messages.length > 0;

  return (
    <section
      className={`chat-workspace ${hasMessages ? "chat-workspace--active" : ""
        }`}
    >
      <div className="chat-workspace__content">
        {hasMessages ? (
          <ChatMessages messages={messages} />
        ) : (
          <WelcomeScreen />
        )}

        {isThinking && <ThinkingIndicator />}

        <ChatInput
          onSend={sendMessage}
          disabled={isThinking}
        />
      </div>
    </section>
  );
}