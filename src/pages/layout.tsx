import { Inter } from 'next/font/google'
import React from "react";
import NavComponent from '../../components/nav';
import Footerbar from '../../components/footer';
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
    <Footerbar/>
    </>
  )
}
