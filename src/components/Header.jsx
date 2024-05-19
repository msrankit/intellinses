import {brainwave} from '../assets';
import { navigation } from '../constants'
import { useLocation } from 'react-router-dom';
import Button from './Button'
import { HambugerMenu } from './design/Header';
import MenuSvg from '../assets/svg/MenuSvg'
import { useState } from 'react';
import  {disablePageScroll , enablePageScroll} from 'scroll-lock'

const Header = () => {

  const pathname = useLocation();
  const [opennavigation,setNavigation] = useState(false)

  const toggleMenu  =()=>{
    if(opennavigation){
      setNavigation(false)
      enablePageScroll()
    } else{
      disablePageScroll()
      setNavigation(true)
    }
  }

const handleMenu =()=>{
  if(!opennavigation) return

  enablePageScroll()
  setNavigation(false)
}

  return (
    <div className={`fixed w-full top-0 left-0 z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${opennavigation ? 'bg-n-8':"bg-n-8/90 backdrop-blur-sm"}`}>
        <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
           <a className='block w-[12rem] xl:mr-8' href="#hero">
            <img src={brainwave} width={160} height={40} alt="Brain Wave" />
           </a>
   <nav className={`${opennavigation ? 'flex':"hidden"} fixed top-[5rem] right-0 bottom-0 left-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
        <div className='relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row'>
{navigation.map((item)=>(
  <a
   key={item.id}
   href={item.url}
   onClick= {handleMenu}
   className={`block relative font-code text-2xl text-n-1 uppercase transition-colors hover:text-color-1 
   ${item.onlyMobile ? 'lg:hidden' :''}  
   
   px-6 py-6  md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold 
    ${ item.url === pathname.hash ? 'z-2 lg:text-n-1':'lg:text-n-1/50'} 
     lg:leading-5 lg:hover:text-n-1 xl:px-12` } >
    {item.title}
  </a>
))}

        </div>
        <HambugerMenu/>
   </nav>
   <a href='#signin' className='hidden button mr-8 text-n-1/50 transition-colors lg:block hover:text-n-1'>
    New Account
   </a>
   <Button className={'hidden lg:flex '} href={'#login'}>
    Sign in
   </Button>
   
   <Button className={"ml-auto lg:hidden"} onclick={toggleMenu}  px ='px-3'>
    <MenuSvg openNavigation={opennavigation} />
   </Button>
        </div>
    </div>
  )
}

export default Header