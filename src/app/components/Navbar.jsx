import Link from "next/link";
import Image from "next/image";
import styles from "./styles/Navbar.module.css"; // Ensure the correct relative path
import { LogIn } from 'lucide-react';
// Use the image directly from the public folder
const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <Link href="/client" className={styles.link}>
          {/* Reference the image directly with the path */}
          <Image src="/Azubi-Logo.svg" alt="logo" width={100} height={100} />
        </Link>
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/courses" className={styles.link}>
          Courses
        </Link>
      </div>
      <div className={styles.right}>
        <Link href="/login" className={styles.link}>
          Login
          <LogIn />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
