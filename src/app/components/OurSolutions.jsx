// components/OurSolutions.js
import Image from 'next/image';
import { Lato, Inter } from 'next/font/google';
import styles from './styles/OurSolutions.module.css';

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

const OurSolutions = () => {
    return (
        <section className={styles.ourSolutions}>
            <div className={styles.container}>
                <h2 className={`${styles.title} ${lato.className}`}>Our solutions</h2>
                <p className={`${styles.description} ${inter.className}`}>
                    Create your account quickly with just your social media logins, then explore a wide range
                </p>
                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <div className={styles.icon}>
                            <Image src="/software-dev-icon.svg" alt="Software Development Icon" width={50} height={50} />
                        </div>
                        <h3 className={`${styles.cardTitle} ${inter.className}`}>Software Development</h3>
                        <p className={`${styles.cardDescription} ${inter.className}`}>
                            Unlock your potential with modern software development, from coding fundamentals to building complex applications
                        </p>
                        <p className={`${styles.price} ${inter.className}`}>Price: $350</p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.icon}>
                            <Image src="/data-science-icon.svg" alt="Data Science Icon" width={50} height={50} />
                        </div>
                        <h3 className={`${styles.cardTitle} ${inter.className}`}>Data Science Mastery</h3>
                        <p className={`${styles.cardDescription} ${inter.className}`}>
                            Equip yourself with the skills to analyze and leverage data, becoming an expert in machine learning, AI, and data-driven decision-making
                        </p>
                        <p className={`${styles.price} ${inter.className}`}>Price: $300</p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.icon}>
                            <Image src="/cloud-computing-icon.svg" alt="Cloud Computing Icon" width={50} height={50} />
                        </div>
                        <h3 className={`${styles.cardTitle} ${inter.className}`}>Cloud Computing Expertise</h3>
                        <p className={`${styles.cardDescription} ${inter.className}`}>
                            Build a solid foundation in cloud architecture and deployment, preparing you to design, implement, and manage scalable cloud solutions
                        </p>
                        <p className={`${styles.price} ${inter.className}`}>Price: $300</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurSolutions;