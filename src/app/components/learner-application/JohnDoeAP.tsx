import styles from "./styles/JohnDoeAP.module.css";
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

const JohnDoeAP = () => {
    return (
      <div className={styles.rectangle}>
        <h3 className={styles.heading}>
        <span className={styles.applicationLabel}>  Application</span> <span className={styles.profileLabel}>Profile</span>
        </h3>

        <div className={`${styles.profileHeader} ${inter.variable}`}>
        <div className={styles.profileSection}>
          <div className={styles.avatar}>JD</div>
          <div className={styles.profileInfo}>
            <p><strong>John Doe</strong></p>
            <p>johndoe@gmail.com</p>
          </div>
        </div>
        <hr className={styles.dividerVert} />
        <div>
          <p className={styles.label}>Location</p>
          <p>Kumasi</p>
        </div>
        <hr className={styles.dividerVert} />
        <div>
          <p className={styles.label}>Gender</p>
          <p>Male</p>
        </div>
        <hr className={styles.dividerVert} />
        <div>
          <p className={styles.label}>Phone</p>
          <p>+2331002402</p>
        </div>
      </div>
  
  
        {/* Password Update */}
        <div className={styles.passwordUpdate}>
          <input type="password" placeholder="Old Password" />
          <input type="password" placeholder="New Password" />
          <button className={styles.updateBtn}>Update</button>
        </div>
  
        {/* Action Buttons */}
        <div className={styles.actions}>
          <button className={`${styles.actionButton} ${styles.back}`}>Back</button>
          <button className={`${styles.actionButton} ${styles.edit}`}>Edit</button>
        </div>
      </div>
    );
  };
  
  export default JohnDoeAP;
