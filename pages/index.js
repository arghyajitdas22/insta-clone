import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

import Feed from '@/components/Feed'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TabSideNav from '@/components/TabSideNav'
import BigSideNav from '@/components/BigSideNav'
import { signIn, useSession } from 'next-auth/react'
import Modal from '@/components/Modal'




const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {data: session} = useSession();
  
  
  return (
    <>
      {session ?(
      <>
        <Modal/>
        <Head>
          <title>Instagram Clone</title>
          <Image/>
        </Head>
        <div>
          <Header/>
          <Footer/>
          
          <TabSideNav/>
          
          <BigSideNav/>
          <Feed/>
        </div>
      </>) : (
        <button onClick={signIn}>Sign In</button>
      )
      }
    </>
  )
}
