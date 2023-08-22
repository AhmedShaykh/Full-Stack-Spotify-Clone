import Sidebar from "@/Components/Sidebar";
import Player from "@/Components/Player";
import SupabaseProvider from "@/Providers/SupabaseProvider";
import UserProvider from "@/Providers/UserProvider";
import ModalProvider from "@/Providers/ModalProvider";
import ToasterProvider from "@/Providers/ToasterProvider";
import getSongsByUserId from "@/actions/getSongsByUserId";
import { Figtree } from "next/font/google";
import "./globals.css";

const font = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "Full Stack Spotify Clone",
  description: "Listen To Music!"
};

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const userSongs = await getSongsByUserId();

  return (
    <html lang="en">
      <body
        className={font.className}
      >
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
            <Sidebar songs={userSongs}>
              {children}
            </Sidebar>
            <Player />
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
};