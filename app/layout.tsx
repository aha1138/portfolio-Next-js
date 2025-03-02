import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import FloatingNavBar from '../components/FloatingNavBar';

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Ahad Gujar - Portfolio",
  description: "Professional portfolio showcasing my skills and projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          enableSystem
          defaultTheme="system"
          >
          {children}
          <FloatingNavBar />
        </ThemeProvider>
      </body>
    </html>
  );
}
