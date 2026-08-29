import {Header} from "./Header";
import { SideBar } from "./SideBar";
import "./AppShell.css";

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="app-shell">
      <SideBar />

      <main className="app-shell__main">
        <Header />
        {children}
      </main>
    </div>
  );
}