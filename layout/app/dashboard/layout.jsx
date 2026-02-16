// app/dashboard/layout.js
export default function DashboardLayout({ children }) {
  return (
    <section>
      <aside>Sidebar</aside>
      <div>{children}</div>
    </section>
  );
}
