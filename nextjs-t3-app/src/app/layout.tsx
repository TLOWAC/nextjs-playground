import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

function TopNav() {
  return (
    <nav className="text-bold flex justify-between gap-4  border-b p-4 text-xl font-semibold text-white">
      <div>Gallery</div>
      <div>Sign In</div>
    </nav>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable}  bg-gradient-to-b from-[#2e026d] to-[#15162c]`}
    >
      <body className="flex flex-col gap-4 p-4">
        <TopNav />
        {children}
      </body>
    </html>
  );
}
