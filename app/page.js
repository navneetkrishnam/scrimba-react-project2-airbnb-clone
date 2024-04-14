import Header from "./Header"
import Hero from "./Hero"
import Experiences from "./Experiences"

import headerLogo from "../public/airbnb-logo.png"
import heroImage from "../public/photo-grid.png"

import styles from './Page.module.css'

const heroHeading = 'Online Experiences'
const heroText = 'Join unique interactive activities led by one-of-a-kind hosts - all without leaving home'

import { experiencesList } from './data'

export default function HomePage() {
    return (
        <div className={styles.container}>
            <Header headerLogo={headerLogo} />
            <Hero
                heroImage={heroImage}
                heroHeading={heroHeading}
                heroText={heroText}
            />
            <div className={styles.content}>
                {experiencesList.map((experience) => (
                    <Experiences
                        key={experience.experienceId}
                        {...experience}
                    />
                ))}
            </div>
        </div>
    )
}