// components/OTPVerification.jsx
import { Lato, Inter } from 'next/font/google';
import styles from './styles/OTPVerification.module.css';

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

const OTPVerification = () => {
    return (
        <div className={styles.otpContainer}>
            <div className={styles.card}>
                <h2 className={`${styles.title} ${lato.className}`}>OTP Verification</h2>
                <p className={`${styles.instruction} ${inter.className}`}>
                    Verify your account using the six digit sent to <strong>test@gmail.com</strong> {/* Bold email */}
                </p>
                <div className={styles.otpInputs}>
                    {Array.from({ length: 6 }).map((_, index) => (
                        <input
                            key={index}
                            className={`${styles.otpInput} ${inter.className}`}
                            type="text"
                            maxLength="1"
                            inputMode="numeric" // For mobile keyboards
                            pattern="[0-9]" // For accessibility
                        />
                    ))}
                </div>
                <p className={`${styles.resend} ${inter.className}`}>
                    Didn't get a code? <a href="#">Click to resend</a>
                </p>
                <button className={`${styles.verifyButton} ${inter.className}`}>
                    Verify account &gt;
                </button>
            </div>
        </div>
    );
};

export default OTPVerification;
