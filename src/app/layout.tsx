import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Find Dev - Open source",

  description:
    "Find Dev is kind of Developers Fair. An open source platform to find all the developers in the world.",
  creator: "Sabbir Hossain Shuvo",
  publisher: "Sabbir Hossain Shuvo",
  icons: "/favicon/favicon.ico",
  authors: {
    name: "Sabbir Hossain Shuvo",
    url: "https://github.com/devlopersabbir",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        suppressHydrationWarning={true}
        className={cn("relative h-full font-sans antialiased", inter.className)}
      >
        <main className="relative flex flex-col min-h-screen">
          <div className="flex-1 flex-grow">{children}</div>
        </main>
      </body>
    </html>
  );
}
