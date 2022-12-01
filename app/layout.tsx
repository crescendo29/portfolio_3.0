
import '../styles/globals.css'
import Navbar from './components/Navbar'
import { Source_Sans_Pro } from '@next/font/google';

const source = Source_Sans_Pro({
  variable: '--font-source',
  weight: ['200', '300', '400','600', '700', '900'],
  subsets: ['latin']
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={source.variable}>
      <head />
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
