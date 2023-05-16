import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Next.JS Full Stack TODO App',
  description: 'Next.JS Full Stack TODO App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-black text-white`}
      >
        {children}
      </body>
    </html>
  )
};