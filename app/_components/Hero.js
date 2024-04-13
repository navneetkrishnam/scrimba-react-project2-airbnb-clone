import Image from "next/image";

import { poppins } from "../_assets/fonts/fonts";

import styles from '../_styles/Hero.module.css';

export default function Hero({ heroImage, heroHeading, heroText }) {
    return (
        <div className={`${styles.heroContainer} ${poppins.className}`}>
            <section id={styles.heroImage}>
                <Image id={styles.heroImage} src={heroImage} />
            </section>
            <section id={styles.heroContent}>
                <h2 id={styles.heroHeading}>{heroHeading}</h2>
                <p id={styles.heroText}>{heroText}</p>
            </section>
        </div>
    )
}