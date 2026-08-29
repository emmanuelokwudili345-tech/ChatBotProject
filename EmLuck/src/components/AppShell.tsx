import { Sidebar } from "./SideBar";

interface AppShellProps {
  children: React.ReactNode;
}

function AppShell({ children }: AppShellProps) {
  return (
    <div className="app-shell">
      <Sidebar />

      <main className="app-shell__main">
        {children}
      </main>
    </div>
  );
}

export default AppShell;