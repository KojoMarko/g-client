// components/ResetPassword.jsx
import { Lato, Inter } from 'next/font/google';
import styles from './styles/ResetPassword.module.css';
import { Lock, Eye } from 'lucide-react'; // Import Lock and Eye icons

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

const ResetPassword = () => {
    return (
        <div className={styles.resetPasswordContainer}>
            <div className={styles.card}>
                <h2 className={`${styles.title} ${lato.className}`}>Reset password</h2>
                <p className={`${styles.instruction} ${inter.className}`}>
                    Create a new password and get started
                </p>
                <div className={styles.inputGroup}>
                    <Lock className={styles.inputIcon} />
                    <input
                        className={`${styles.input} ${inter.className}`} // Correct usage
                        type="password"
                        id="newPassword"
                        name="newPassword"
                        placeholder="New password"
                    />
                </div>
                <div className={styles.inputGroup}>
                    <Lock className={styles.inputIcon} />
                    <input
                        className={`${styles.input} ${inter.className}`} // Correct usage
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                    />
                    <Eye className={styles.passwordToggle} />
                </div>
                <button className={`${styles.resetButton} ${inter.className}`}>
                    Reset password &gt;
                </button>
                <div className={`${styles.signupPrompt} ${inter.className}`}>
                <a href="#">Need to create an account? Signup</a>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;