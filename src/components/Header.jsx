import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'
export default function Header() {
    const [toggleMenu,setToggleMenu] = useState(false);
  return (
    <header className="flex justify-between px-5 py-5 bg-secondary sticky top-0 z-50">
      <a href="/" className="font-bold text-white text-2xl font-heroine-font cursor-pointer">Siva dharshini</a>
      <nav className="hidden md:block">
        <ul className="flex text-white font-semibold">
          <li>
            <a href="/" className=' hover:text-amber-400'>Home</a>
          </li>
          <li>
            <a href="#about" className=' hover:text-amber-400'>About</a>
          </li>
          <li>
            <a href="#project" className='  hover:text-amber-400'>Project</a>
          </li>
          <li>
            <a href="#resume" className='  hover:text-amber-400'>Resume</a>
          </li>
          <li>
            <a href="#contact" className='  hover:text-amber-400'>Contact</a>
          </li>
        
        </ul>
      </nav>
      {toggleMenu && <nav className="block md:hidden">
        <ul onClick={()=> setToggleMenu(!toggleMenu)}  className="flex flex-col text-white mobile-nav ">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#project">Project</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>}
      <button onClick={()=> setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-white h-5'/></button>
    </header>
  );
}
