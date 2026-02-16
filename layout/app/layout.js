// app/layout.js
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>Navbar</header>

        <main>{children}</main>

        <footer>Footer</footer>
      </body>
    </html>
  );
}
