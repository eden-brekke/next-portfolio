import Image from 'next/image'
import punk from '../assets/pumpkinbanner.png'
import eden from '../assets/itsme.png'
import mikeynme from '../assets/mikeynme.jpg'
import punkers from '../assets/punkers.jpg'
import jackingtons from '../assets/jackingtons.jpg'

export default function About(){
  return(
    <>
    <div className="pt-2" style={{ position: 'relative', width: '100vw', height: '20vw' }}>
    <h1 className="text-7xl z-10 " style={{ position: 'absolute',left:'20%', opacity: '1'}}>About Eden </h1> 
    <Image
    src={punk}
    layout="fill"
    objectFit="cover"
    alt="Pumpkin Banner"
    style={{opacity:'1', zIndex:'-1'}}
    priority
  />
  </div>
  <div>
    <p>Some cool Text about Eden</p>
    <Image 
    src={eden}
    width={300} 
    height={300}
    alt="eden headshot"
    />
  </div>
  <div>
    <p> the Most important beings in my life</p>
    <Image 
    src={mikeynme}
    width={300} 
    height={300}
    alt="eden headshot"
    />
    <Image 
    src={jackingtons}
    width={300} 
    height={300}
    alt="eden headshot"
    />
    <Image 
    src={punkers}
    width={300} 
    height={300}
    alt="eden headshot"
    />
  </div>
  </>
  )
}