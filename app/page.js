import Header from "./_components/Header"
import Hero from "./_components/Hero"

import headerLogo from "./_assets/images/airbnb-logo.png"
import heroImage from "./_assets/images/photo-grid.png"

import styles from './_styles/Page.module.css'

const heroHeading = 'Online Experiences'
const heroText = 'Join unique interactive activities led by one-of-a-kind hosts - all without leaving home'

export default function HomePage() {
    return (
        <div className={styles.container}>
            <Header headerLogo={headerLogo} />
            <Hero 
                heroImage={heroImage} 
                heroHeading={heroHeading}
                heroText={heroText}
            />
        </div>
    )
}