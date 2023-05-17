import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbare from '@/components/Navbare'
import Page from './page'
import Footer from '@/components/Footer'



export default function Home() {
  return (
    <>

    <Navbare/>
    <Page/>
    <Footer/>
    </>
  )
}
