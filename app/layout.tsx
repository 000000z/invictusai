import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { CountdownProvider } from "@/contexts/countdown-context"

export const metadata = {
  title: "Invictus AI - Merging AI & Crypto",
  description:
    "The revolutionary platform that combines the power of artificial intelligence with blockchain technology to create unprecedented value.",
  icons: {
    icon: [
      { url: "/logo.webp", type: "image/webp" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: { url: "/logo.webp", type: "image/webp" },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.webp" type="image/webp" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.webp" />
      </head>
      <body className="min-h-screen bg-black font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <CountdownProvider>{children}</CountdownProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
