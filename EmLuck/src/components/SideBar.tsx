import './SideBar.css';

export function SideBar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        EMLUCK
      </div>

      <button className="sidebar__new-chat">
        + New chat
      </button>

      <div className="sidebar__section">
        <p className="sidebar__label">Recent</p>

        <button className="sidebar__chat">
          React questions
        </button>

        <button className="sidebar__chat">
          Portfolio ideas
        </button>

        <button className="sidebar__chat">
          JavaScript help
        </button>
      </div>

      <div className="sidebar__bottom">
        <button>Settings</button>
        <button>Emmanuel</button>
      </div>
    </aside>
  );
}