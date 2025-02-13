import ContainerBlock from './ContainerBlock';
import Projects from './Projects';
import Experience from './Experience';
import About from './About';

export default function Home(){
  return (
    <ContainerBlock
      title= "Eden Brekke - Developer, Data Alchemist, Problem Solver"
      description="Building a Portfolio"
      >
        <Projects />
        <Experience />
        <About />
      </ContainerBlock>
  );
}