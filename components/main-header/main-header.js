
import Link from 'next/link'
import React from 'react'
import logoImg from "@/assets/logo.png"
import classes from "./main-header.module.css"
import { usePathname } from 'next/navigation'
import NavLink from './nav-link'

const MainHeader = () => {
  return (
  <header className={classes.header}>
    <Link className={classes.logo} href="/">
     <img src={logoImg.src} alt='A plate with food'/>
     Next Level Food
    </Link>

    <nav className={classes.nav}>
        <ul>
            <li>
                <NavLink href={"/meals"} >Browse meals</NavLink>
            </li>
               <li>
                   <NavLink href={"/community"} >Foodies Community</NavLink>
            </li>
        </ul>
    </nav>
  </header>
  )
}

export default MainHeader
