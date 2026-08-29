import "./ChatInput.css";

export function ChatInput() {
  return (
    <div className="chat-input">
      <textarea
        className="chat-input__field"
        placeholder="Message EMLUCK..."
        rows={1}
      />

      <button
        className="chat-input__send"
        type="button"
        aria-label="Send message"
      >
        ↑
      </button>
    </div>
  );
}