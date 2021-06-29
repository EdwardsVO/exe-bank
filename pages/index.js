import Head from 'next/head'
import Navbar from '../components/navbar'
import Landing from './landing'

export default function Home() {
  return (
    <div>
      <Head>
        <title>EXEBank</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <Landing></Landing>
      
    </div>
  )
}
