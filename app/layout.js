import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Subscribe from '@/components/Subscribe';
import { Syne } from 'next/font/google';
import '../styles/globals.css';

const syne = Syne({
   subsets: ['latin'] ,
   weight: ['400','500','600','700','800']

  })

// export const metadata = {
//   title: 'Logistic',
//   description: 'Truck Hiring Services',
// }

export default function RootLayout({ children }) {
  return (
      <html lang="en">
          <body className={syne.className}>
              <Header />
              {children}
              <Subscribe/>
              <Footer />
          </body>
      </html>
  );
}
