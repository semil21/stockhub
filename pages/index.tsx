// powershell -ExecutionPolicy Bypass -Command "npm run dev"

// Set-ExecutionPolicy -Scope Process -ExecutionPolicy RemoteSigned


import Image from 'next/image'
import { Inter } from 'next/font/google'
import Sidebar from "./sidebar";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      {/* <Index/> */}
      <Sidebar / >

        
    </>
  );
}
// powershell -ExecutionPolicy Bypass -Command "lucide-react"