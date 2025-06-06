import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import ScrollToTop from "./components/misc/ScrollToTop";
import SkipToContent from "./components/misc/SkipToContent";

export const metadata: Metadata = {
  title: {
    default: "Tomas Vana",
    template: "%s - Tomas Vana",
  },
  description: "My personal website, including things about me and my projects.",
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon/light.ico",
        href: "/favicon/light.ico",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicon/dark.ico",
        href: "/favicon/dark.ico",
      },
    ],
  },
  authors: [
    {
      name: "Tomas Vana",
    },
  ],
  creator: "tomasvana10",
  keywords: [
    "React",
    "Next.js",
    "Tailwind CSS",
    "Daisy UI",
    "UI Framework",
    "Personal Website",
    "Resume",
    "Developer Portfolio",
    "Web Developer",
    "Programmer",
    "Python Developer",
    "Developer Website",
    "Developer",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body>
        <SkipToContent />
        <ScrollToTop />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
