import { Inter } from 'next/font/google'
import React from "react";
import NavComponent from '../../components/nav';
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <NavComponent/>
      <main className={inter.className}>{children}
      </main>
    
    </>
  )
}
