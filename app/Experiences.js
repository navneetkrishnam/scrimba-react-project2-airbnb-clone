import Image from "next/image"
import { poppins } from "./fonts";

import styles from './Experiences.module.css'

import experienceStar from '../public/star.png'

export default function Experiences({ experienceImage, experienceSpots, experienceLocation, experienceStats, experienceTitle, experienceCurrency, experiencePrice, experienceUnit }) {
    let badgeText = (experienceSpots > 0) ? ((experienceLocation === 'ONLINE') ? 'ONLINE' : experienceLocation) : 'SOLD OUT';
    return (
        <div className={`${styles.experienceContainer} ${poppins.className}`}>
            <section id={styles.experienceImageSection}>
                <Image id={styles.experienceImage} src={experienceImage} />
                <p id={styles.experienceStatus}>{`${badgeText}`}</p>
            </section>
            <section id={styles.experienceRatingSection}>
                <Image id={styles.experienceStarImage} src={experienceStar} />
                <p id={styles.experienceRating}>{experienceStats.experienceRating}</p>
                <p className={styles.gray} id={styles.experienceCount}>({experienceStats.experienceReviewCount})</p>
                <p className={styles.gray} id={styles.experienceDot}>⋅</p>
                <p className={styles.gray} id={styles.experienceLocation}>{experienceLocation}</p>
            </section>
            <section id={styles.experienceTitleSection}>
                <p id={styles.experienceTitle}>{experienceTitle}</p>
            </section>
            <section id={styles.experiencePriceSection}>
                <p className={styles.bold} id={styles.experiencePrice}>From {experienceCurrency}{experiencePrice}</p>
                <p id={styles.experiencePriceSeparator}>/</p>
                <p id={styles.experienceUnit}>{experienceUnit}</p>
            </section>
        </div>
    )
}