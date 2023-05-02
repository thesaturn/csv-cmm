import './globals.css'
import { Inter } from 'next/font/google'
import { Roboto } from "next/font/google"
import Sidebar from "./component/Sidebar"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto"

})

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Archivo CMM',
  description: '',
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className='h-screen flex flex-row justify-start'>
        <Sidebar /> 
        <div className='flex-1 p-4 border-dashed'>{children}</div>
      </div>
      </body>
    </html>
  )
}
