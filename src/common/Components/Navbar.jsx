import React, { useEffect, useState } from 'react'
import Logo from "../../assets/icons/logo.svg"
import { Link } from 'react-scroll';

const Navbar = () => {
  const [ isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () =>{
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(()=>{
    const handleScroll = () =>{
      if(window.scrollY > 100){
        setIsSticky(true)
      }  
      else{
        setIsSticky(false)
      };
      window.addEventListener('scroll', handleScroll);
      return () =>{
        window.addEventListener('scroll', handleScroll);
        
      }
    }
  
  });

const navItems = [
    {link: "Home", path: "Home"},
    {link: "Service", path: "Service"},
    {link: "About", path: "About"},
    {link: "Procut", path: "Product"},
    {link: "FAQ", path: "FAQ"},

];

  return (
    <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
      <nav>
        <div>
          <a href="" className='text-2xl font-semibold flex items-center space-x-3' > <img src={Logo} alt="Logo" className='w-10 inline-block items-center'/><span className='text-[#263228]'>ElevateWork</span></a>
        
        <ul className=' md:flex space-x-12 hidden'>
          {
          navItems.map(({ link, path }) => (
            <li key={path}>
              <Link to={path} spy={true} smooth={true} offset={-100} className='text-black text-neutralGray900'>
                {link}
              </Link>
            </li>
          ))
          }

        </ul>
        <div className='space-x-12 hidden lg:flex items-center'>
          <a href="/"> </a>
        </div>
        
        </div>
      </nav>
    </header>
  )
}

export default Navbar;
