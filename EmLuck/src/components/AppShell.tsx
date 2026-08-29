interface AppShellProps {
  children: React.ReactNode;
}

function AppShell({ children }: AppShellProps) {
  return <div className="app-shell">{children}</div>;
}

export default AppShell;