import Head from 'next/head';
import styles from '../styles/Home.module.css';
import ContainerBlock from './ContainerBlock';
import Projects from './Projects';
import Experience from './Experience';
import About from './About';

export default function Home(){
  return (
    <ContainerBlock
      title= "Eden Brekke - Developer, Scientist, Data Fiend"
      description="Building a Portfolio"
      >
        <Projects />
        <Experience />
        <About />
      </ContainerBlock>
  );
}