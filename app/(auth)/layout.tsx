import { ClerkProvider } from '@clerk/nextjs';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import "../globals.css"


const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
    title: "Thread",
    description: "This is thread app"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider>
            <html lang='en'>
                <body className={`${inter.className} bg-dark-1`}>
                    <div className='min-w-full min-h-screen flex justify-center items-center'>
                        {children}
                    </div>
                </body>
            </html>
        </ClerkProvider>
    )
}