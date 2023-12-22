import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Evently",
  description: "Evently is a plateform for event manager",
  icons: {
    icon: "/assets/images/logo.svg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang='en'>
        <body className={poppins.className}>{children}</body>
      </html>
  )
}
