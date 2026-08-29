import "./WelcomeScreen.css";

export function WelcomeScreen() {
  return (
    <div className="welcome-screen">
      <div className="welcome-screen__content">
        <p className="welcome-screen__eyebrow">EMLUCK</p>

        <h1 className="welcome-screen__title">
          Where your thoughts
          <span> take shape.</span>
        </h1>

        <p className="welcome-screen__description">
          Ask questions, explore ideas, solve problems, and create something
          meaningful.
        </p>
      </div>
    </div>
  );
}