import React from 'react';
  
  
  import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';

import '@/styles/globals.css';
import 'aos/dist/aos.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header /> 
     
        
        {/* <FloatingButtons/> */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
