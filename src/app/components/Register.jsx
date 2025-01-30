// components/Register.js
import { Lato, Inter } from 'next/font/google';
import styles from './styles/Register.module.css';

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

const Register = () => {
    return (
        <section className={styles.registerSection}>
            <div className={styles.container}>
                <h2 className={`${styles.title} ${lato.className}`}>Register</h2>

                <div className={styles.highlightContainer}> {/* Highlights above the form */}
                    <div className={styles.featureHighlights}>
                        <div className={styles.featureItem}>
                            <h3 className={`${styles.featureTitle} ${lato.className}`}>Sign Up and Choose Your Course</h3>
                            <p className={inter.className}>Create your account quickly with just your email or social media login, then explore a wide range</p>
                        </div>
                        <div className={styles.featureItem}>
                            <h3 className={`${styles.featureTitle} ${lato.className}`}>Onboarding</h3>
                            <p className={inter.className}>Get a guided onboarding experience to set up your learning preferences.</p>
                        </div>
                        <div className={styles.featureItem}>
                            <h3 className={`${styles.featureTitle} ${lato.className}`}>Start Learning</h3>
                            <p className={inter.className}>Access courses, complete lessons, and track your progress effortlessly.</p>
                        </div>
                    </div>
                </div>



                <div className={styles.formContainer}>
                    <div className={styles.formColumn}>
                        <div className={styles.inputGroup}>
                            <label className={`${styles.label} ${inter.className}`} htmlFor="firstName">First Name</label>
                            <input className={`${styles.input} ${inter.className}`} type="text" id="firstName" name="firstName" />
                        </div>
                        <div className={styles.inputGroup}>
                            <label className={`${styles.label} ${inter.className}`} htmlFor="email">Email</label>
                            <input className={`${styles.input} ${inter.className}`} type="email" id="email" name="email" />
                        </div>
                        <div className={styles.inputGroup}>
                            <label className={`${styles.label} ${inter.className}`} htmlFor="lastName">Last Name</label>
                            <input className={`${styles.input} ${inter.className}`} type="text" id="lastName" name="lastName" />
                        </div>
                        <div className={styles.inputGroup}>
                            <label className={`${styles.label} ${inter.className}`} htmlFor="location">Location</label>
                            <select className={`${styles.select} ${inter.className}`} id="location" name="location">
                                <option value="">Select location</option>
                                <option value="ghana">Ghana</option>
                                <option value="nigeria">Nigeria</option>
                            </select>
                        </div>
                    </div>

                    <div className={styles.formColumn}>
                        <div className={styles.inputGroup}>
                            <label className={`${styles.label} ${inter.className}`} htmlFor="module">Choose Module</label>
                            <select className={`${styles.select} ${inter.className}`} id="module" name="module">
                                <option value="">Select module</option>
                                <option value="software">Software Development</option>
                                <option value="data">Data Science</option>
                            </select>
                        </div>
                        <div className={styles.inputGroup}>
                            <label className={`${styles.label} ${inter.className}`} htmlFor="gender">Gender</label>
                            <select className={`${styles.select} ${inter.className}`} id="gender" name="gender">
                                <option value="">Select gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <div className={styles.inputGroup}>
                            <label className={`${styles.label} ${inter.className}`} htmlFor="amount">Amount</label>
                            <input className={`${styles.input} ${inter.className}`} type="number" id="amount" name="amount" />
                        </div>
                        <div className={styles.inputGroup}>
                            <label className={`${styles.label} ${inter.className}`} htmlFor="phone">Phone</label>
                            <input className={`${styles.input} ${inter.className}`} type="tel" id="phone" name="phone" />
                        </div>
                    </div>
                </div>

                <div className={styles.additionalFields}> {/* Wrap additional fields */}
                    <div className={styles.inputGroup}>
                        <label className={`${styles.label} ${inter.className}`} htmlFor="image">Updated Image</label>
                        <input className={`${styles.input} ${inter.className}`} type="file" id="image" name="image" />
                    </div>
                    <div className={styles.inputGroup}>
                        <label className={`${styles.label} ${inter.className} ${styles.checkboxLabel}`} htmlFor="disabled">
                            <input type="checkbox" id="disabled" name="disabled" />
                            Disabled
                        </label>
                    </div>
                </div>

                <button className={`${styles.registerButton} ${inter.className}`}>Register</button>
            </div>
        </section>
    );
};

export default Register;