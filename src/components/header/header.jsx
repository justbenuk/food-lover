import Link from "next/link"
import Image from "next/image"
import logoImage from '@/assets/logo.png'
import styles from './headewr.module.css'
import NavLink from "../navlink/navlink"
export default function Header() {
  return (
    <header className={styles.header}>
      <Link href='/' className={styles.logo}>
        <Image src={logoImage.src} alt='A Plate with food on it' width={100} height={100} property/>
        Food Lovers
      </Link>
      <nav className={styles.nav}>
        <ul>
          <li><NavLink href='/meals'>Browse Meals</NavLink></li>
          <li><NavLink href='/community'>Foodies Community</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}
