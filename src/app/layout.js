import Header from '@/components/shared/Header';
import '@/styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header /> {/* ✅ This shows on all pages including Home */}
        <main>{children}</main>
      </body>
    </html>
  );
}
