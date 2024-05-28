import Link from "next/link"
import Image from "next/image"
import logoImage from '@/assets/logo.png'
import styles from './headewr.module.css'
export default function Header() {
  return (
    <header className={styles.header}>
      <Link href='/' className={styles.logo}>
        <Image src={logoImage.src} alt='A Plate with food on it' width={100} height={100} property/>
        Food Lovers
      </Link>
      <nav className={styles.nav}>
        <ul>
          <li><Link href='/meals'>Browse Meals</Link></li>
          <li><Link href='/community'>Foodies Community</Link></li>
        </ul>
      </nav>
    </header>
  )
}
