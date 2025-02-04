import styles from "./styles/OopsAP.module.css";
import Link from "next/link";
import Image from "next/image";
import { Lato, Inter } from "next/font/google";
import { ChevronLeft } from 'lucide-react';

const lato = Lato({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-lato",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-inter",
});

const OopsAP = () => {
  return (
    <div className={`${styles.applicationProfile} ${lato.variable}`}>
      <div className={styles.tableTitle}>
        <h2>Application <span>&nbsp; Profile</span></h2>
      </div>

      <div className={`${styles.applicationProfile} ${lato.variable} ${inter.variable}`}> {/* Added inter font */}
      <div className={styles.content}> {/* New container for centering content */}
        <Image 
          src="/oops.svg"// Path to your oops.svg image
          alt="Oops! No Application" 
          width={250} // Adjust width as needed
          height={125} // Adjust height as needed
        />
        <p className={styles.message}>!!! OOPs no application</p> 
        </div>

      <div className={styles.actions}>
      <button className={`${styles.actionButton} ${styles.back}`}><ChevronLeft /> Back</button>
      <Link href="/startnewapplication">
        <button className={`${styles.actionButton} ${styles.newApplication}`}>Start new application</button>
      </Link>
    </div>
  </div>
  </div>
);
};

export default OopsAP;
