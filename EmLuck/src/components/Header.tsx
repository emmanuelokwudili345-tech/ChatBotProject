import { Menu, Moon } from "lucide-react";
import "./Header.css";

export function Header() {
  return (
    <header className="header">
      <button
        className="header__menu-button"
        type="button"
        aria-label="Open navigation"
      >
        <Menu size={20} />
      </button>

      <span className="header__title">Chat</span>

      <button
        className="header__theme-button"
        type="button"
        aria-label="Toggle theme"
      >
        <Moon size={19} />
      </button>
    </header>
  );
}