import { Figtree } from "next/font/google";
import Sidebar from "@/Components/Sidebar";
import SupabaseProvider from "@/Providers/SupabaseProvider";
import "./globals.css";

const font = Figtree({ subsets: ["latin"] });

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
        <SupabaseProvider>
          <Sidebar>
            {children}
          </Sidebar>
        </SupabaseProvider>
      </body>
    </html>
  )
};