import './globals.css'
import { Inter, Roboto_Mono } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
})

export const metadata = {
  title: 'Dhruv Chavda | Portfolio',
  description: 'Personal portfolio website for Dhruv Chavda, a Software Developer based in Toronto, Canada',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth dark">
      <body className={`${inter.variable} ${roboto_mono.variable} font-sans bg-dark text-light`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
} 