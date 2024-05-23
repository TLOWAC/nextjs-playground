import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { ClerkProvider } from "@clerk/nextjs";
import { TopNav } from "./_components/topnav";

export const metadata = {
  title: "T3 Playground",
  description: "T3 App Playground",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className={`${GeistSans.variable}  bg-gradient-to-b from-[#2e026d] to-[#15162c]`}
      >
        <body className="flex flex-col gap-4 p-4">
          <TopNav />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
