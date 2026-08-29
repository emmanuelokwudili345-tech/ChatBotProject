import { WelcomeScreen } from './WelcomeScreen'
import { ChatInput } from './ChatInput';
import "./ChatWorkspace.css";

export function ChatWorkSpace() {
  return (
    <section className="chat-workspace">
      <WelcomeScreen />
      <ChatInput />
    </section>
  );
}