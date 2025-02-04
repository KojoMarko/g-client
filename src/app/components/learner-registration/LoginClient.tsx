import { Lato, Inter } from 'next/font/google';
import styles from './styles/LoginClient.module.css';
import Image from 'next/image';

const lato = Lato({
    subsets: ['latin'],
    weight: ['700'],
    variable: '--font-lato',
});

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '600'],
    variable: '--font-inter',
});

const LoginClient = ({ onClose }) => {
    return (
        <div className={styles.overlay}>
            <div className={styles.loginContainer}>
                <button className={styles.closeButton} onClick={onClose}>×</button>

                <h2 className={`${styles.title} ${lato.className}`}>Login</h2>

                <button className={`${styles.googleButton} ${inter.className}`}>
                    <Image src="/google-icon.svg" alt="Google Icon" width={20} height={20} className={styles.googleIcon} />
                    Log in using Google
                </button>

                <div className={`${styles.orSeparator} ${inter.className}`}>or</div>

                <div className={styles.inputGroup}>
                    <label className={`${styles.label} ${inter.className}`} htmlFor="email">Email</label>
                    <input className={`${styles.input} ${inter.className}`} type="email" id="email" name="email" />
                </div>

                <div className={styles.inputGroup}>
                    <label className={`${styles.label} ${inter.className}`} htmlFor="password">Password</label>
                    <input className={`${styles.input} ${inter.className}`} type="password" id="password" name="password" />
                </div>

                <a className={`${styles.forgotPassword} ${inter.className}`} href="#">Forgot password?</a>

                <button className={`${styles.loginButton} ${inter.className}`}>Login</button>

                <div className={`${styles.signupPrompt} ${inter.className}`}>
                    Need to create an account? <a href="#">Signup</a>
                </div>
            </div>
        </div>
    );
};

export default LoginClient;
