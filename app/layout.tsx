import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Get Interval',
    description: 'Unite Your Free Time: Find Common Slots Together!',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="icon"
                    href="https://img.icons8.com/ios-filled/100/48D399/session-timeout.png"
                    sizes="any"
                />
            </head>
            <body className={inter.className}>{children}</body>
        </html>
    )
}
