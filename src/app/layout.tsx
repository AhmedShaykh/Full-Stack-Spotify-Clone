import { Figtree } from 'next/font/google';
import './globals.css';
import Sidebar from '@/Components/Sidebar';

const font = Figtree({ subsets: ['latin'] });

export const metadata = {
  title: "Full Stack Spotify Clone",
  description: "Listen To Music!"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={font.className}
      >
        <Sidebar>
          {children}
        </Sidebar>
      </body>
    </html>
  )
};