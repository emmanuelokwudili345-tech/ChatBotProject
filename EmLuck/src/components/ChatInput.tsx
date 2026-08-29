import { useState } from "react";
import "./ChatInput.css";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export function ChatInput({ onSend }: ChatInputProps) {
  const [value, setValue] = useState("");

  function handleSubmit() {
    const message = value.trim();

    if (!message) {
      return;
    }

    onSend(message);
    setValue("");
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSubmit();
    }
  }

  return (
    <div className="chat-input">
      <textarea
        className="chat-input__field"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Message EMLUCK..."
        rows={1}
      />

      <button
        className="chat-input__send"
        type="button"
        onClick={handleSubmit}
        aria-label="Send message"
        disabled={!value.trim()}
      >
        ↑
      </button>
    </div>
  );
}