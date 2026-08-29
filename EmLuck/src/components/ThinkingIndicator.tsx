import "./ThinkingIndicator.css";

export function ThinkingIndicator() {
  return (
    <div className="thinking-indicator" aria-label="EMLUCK is thinking">
      <span className="thinking-indicator__dot"></span>
      <span className="thinking-indicator__dot"></span>
      <span className="thinking-indicator__dot"></span>
    </div>
  );
}