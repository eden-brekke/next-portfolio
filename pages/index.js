import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero';
import ContainerBlock from '../components/ContainerBlock';

export default function Home() {
  return (
    <ContainerBlock
      title="Eden Brekke - Developer, Scientist, DataFiend"
      description="Portfolio For Eden"
    >
        <Hero />
    </ContainerBlock>
 
  )
}
