import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import Sidebar from "@/components/shared/sidebar/Sidebar";
import Search from "@/components/shared/search/Search";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Find Devs - Discover All Developers From The Programming World",
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
        className={cn(
          "relative h-full font-sans antialiased bg-zinc-100 dark:bg-zinc-900",
          inter.className,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster />
          <main className="relative flex flex-col min-h-scree">
            <div className="w-[20rem] fixed left-0 top-0 my-8 px-8 border-r-2 border-gray-200 h-[90vh] z-20">
              <Sidebar />
            </div>
            <div className="flex-1 flex-grow w-full">{children}</div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
