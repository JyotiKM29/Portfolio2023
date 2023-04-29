import React from 'react';
import Link from 'next/link';

const NavItem = ({href,num, text ,active}) => {
  return (
    <Link href={href} 
     className={`nav__link${active ? "active" : " "}
    `}>
     <span>{num}</span> {text}  
    </Link>
  )
}

export default NavItem
