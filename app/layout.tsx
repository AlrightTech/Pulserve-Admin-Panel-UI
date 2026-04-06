import type { Metadata } from "next";
import { DM_Sans } from "next/font/google"; // Geist ki jagah DM_Sans use kiya hai
import "./globals.css";

// DM Sans configuration
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Normal, Medium aur Bold weights
});

export const metadata: Metadata = {
  title: "Pulserv Admin", // Project name ke mutabiq update kiya
  description: "Pulserv Admin Panel Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} h-full antialiased`} // Font variable yahan add kiya
    >
      <body 
        className={`${dmSans.className} min-h-full flex flex-col`} // DM Sans class apply ki
        suppressHydrationWarning // Browser extensions ke hydration errors fix karne ke liye
      >
        {children}
      </body>
    </html>
  );
}