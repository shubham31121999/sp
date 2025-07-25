import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import FloatingButtons from '@/components/shared/FloatingButtons';
import '@/styles/globals.css';
import 'aos/dist/aos.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header /> {/* ✅ This shows on all pages including Home */}
        {/* <FloatingButtons/> */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
