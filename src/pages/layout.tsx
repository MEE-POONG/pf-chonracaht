import { Inter } from 'next/font/google'
import React from "react";
import NavComponent from '../../components/nav';
import Navbar from '../../components/Header';
import Footer from '../../components/footer';
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <Navbar/>
      <main className={inter.className}>{children}
      </main>
    <Footer/>
    </>
  )
}
