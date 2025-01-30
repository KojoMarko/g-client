// components/WhatNext.js
import { Lato, Inter } from 'next/font/google';
import styles from './styles/WhatNext.module.css';

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

const WhatNext = () => {
    const technologies = [
        "ReactJs", "Handlebars", "NodeJs", "Django", "MongoDB", "VueJs",
        "PowerBI", "Python", "Excel", "Tableau", "AWS", "Azure"
    ];

    const borderColors = [
        '#ffffff', // text/on-action
        '#00A3E0', // border/secondary
        '#00C853', // border/success
        '#9E9E9E', // border/disabled
        '#D32F2F', // border/error
        '#FF9800', // border/warning
        '#ffffff', // border/primary
        '#0D47A1', // surface/action
    ];

    return (
        <section className={styles.whatNext}>
            <div className={styles.container}>
                <div className={styles.textWrapper}>
                    <h2 className={`${styles.title} ${lato.className}`}>What will be next step</h2>
                    <p className={`${styles.description} ${inter.className}`}>
                        Discover our diverse stack of solutions, including software developers, data scientists and cloud experts. Sign up today and explore your talent!
                    </p>
                </div>
                <div className={styles.techStack}>
                    {technologies.map((tech, index) => (
                        <span
                            key={index}
                            className={`${styles.techItem} ${inter.className}`}
                            style={{ borderColor: borderColors[index % borderColors.length] }}
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatNext;