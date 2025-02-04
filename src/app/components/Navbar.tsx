"use client"; // Add this line at the top of the file

import { useState, useRef } from "react";
import LoginClient from "./learner-registration/LoginClient";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles/Navbar.module.css";
import { LogIn } from "lucide-react";

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const loginButtonRef = useRef(null);

  const handleCloseLogin = () => {
    setShowLogin(false);  // Close the login popup
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <Link href="/client" className={styles.link}>
          <Image src="/Azubi-Logo.svg" alt="logo" width={100} height={100} />
        </Link>
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/courses" className={styles.link}>Courses</Link>
      </div>
      
      <div className={styles.right}>
        {/* LOGIN BUTTON */}
        <div className={styles.loginContainer} ref={loginButtonRef}>
          <button className={styles.link} onClick={() => setShowLogin(!showLogin)}>
            <span>Login</span>
            <LogIn />
          </button>

          {/* LOGIN POPUP APPEARS BELOW BUTTON */}
          {showLogin && (
            <div className={styles.popup}>
              <LoginClient onClose={handleCloseLogin} />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
