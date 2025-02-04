import styles from './styles/Footer.module.css';
import Link from "next/link";
import { ArrowUp } from 'lucide-react';
import { Copyright } from 'lucide-react';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.topSection}> {/* Combined top section */}
                    <img src="/footer-azubi-logo.svg" alt="Client Logo" className={styles.logo} />
                    <div className={styles.columnsContainer}>
                        <div className={styles.footerColumn}>
                            <p className={styles.columnTitle}>Menu</p>
                            <a href="#" className={styles.footerLink}>Home</a>
                            <a href="#" className={styles.footerLink}>Courses</a>
                        </div>
                        <div className={styles.footerColumn}>
                            <p className={styles.columnTitle}>Contact</p>
                            <p className={styles.contactInfo}>+23341002000</p>
                            <p className={styles.contactInfo}>New Reiss, Ghana, Accra</p>
                        </div>
                        <div className={styles.footerColumn}>
                            <p className={styles.columnTitle}>Social</p>
                            <a href="#" className={styles.footerLink}>Facebook</a>
                            <a href="#" className={styles.footerLink}>LinkedIn</a>
                        </div>
                    </div>
                </div>
                <hr className={styles.footerDivider} />
                <div className={styles.bottomSection}> {/* Combined bottom section */}
                    <div className={styles.copyright}>
                    <Copyright />
                    <p className={styles.copyright}>copyright 2025 - G-client, All rights reserved</p>
                    </div>

                    <Link href="/login" className={styles.backToTop}>
                    Back to top
                    <ArrowUp />
                     </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;