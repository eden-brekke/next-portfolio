import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Eden&apos;s Portfolio</title>
      </Head>

      <main >
        <Hero />
      </main>
    </div>
  )
}
