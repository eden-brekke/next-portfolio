import Link from 'next/link'

export default function Footer(){
  return(
    <>
      <div className="flex justify-evenly h-1/6">
      <p>Check out my socials: </p>
      <Link href='http://github.com/eden-brekke'><a className='px-2 rounded-md py-1 text-gray-50 underline bg-teal-300 hover:bg-pink-400 hover:text-gray-900'>GitHub</a></Link>
      <Link href='http://linkedin.com/eden-brekke'><a className='px-2 rounded-md py-1 text-gray-50 underline bg-teal-300 hover:bg-pink-400 hover:text-gray-900'>LinkedIn</a></Link>
      <p>&copy; 2022 </p>
      </div>
    </>
  )
}