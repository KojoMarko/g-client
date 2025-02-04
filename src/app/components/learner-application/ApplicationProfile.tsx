import styles from "./styles/ApplicationProfile.module.css";
import Link from "next/link";
import { Lato, Inter } from "next/font/google";

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

const ApplicationProfile = () => {
  return (
    <div className={`${styles.applicationProfile} ${lato.variable}`}>
      <div className={styles.tableTitle}>
        <h2>Application <span>&nbsp; Profile</span></h2>
      </div>

      <div className={`${styles.profileHeader} ${inter.variable}`}>
        <div>
          <p className={styles.label}>Program</p>
          <p>Data Science</p>
        </div>
        <hr className={styles.dividerVert} />
        <div>
          <p className={styles.label}>Date registered</p>
          <p>2024/11/16</p>
        </div>
        <hr className={styles.dividerVert} />
        <div>
          <p className={styles.label}>Status</p>
          <p>Registered</p>
        </div>
        <hr className={styles.dividerVert} />
        <div>
          <p className={styles.label}>Paid</p>
          <p>$150.00</p>
        </div>
      </div>
      
      <hr className={styles.divider} />
      <div className={styles.tools}>
        <button className={`${styles.toolButton} ${styles.powerbi}`}>PowerBI</button>
        <button className={`${styles.toolButton} ${styles.python}`}>Python</button>
        <button className={`${styles.toolButton} ${styles.excel}`}>Excel</button>
        <button className={`${styles.toolButton} ${styles.tableau}`}>Tableau</button>
      </div>
      <div className={styles.actions}>
        <button className={`${styles.actionButton} ${styles.home}`}>Home</button>
        <Link href="/startnewapplication">
          <button className={`${styles.actionButton} ${styles.newApplication}`}>Start new application</button>
        </Link>
      </div>
    </div>
  );
};

export default ApplicationProfile;
