// Login page has its own standalone layout — no sidebar/topbar
export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
