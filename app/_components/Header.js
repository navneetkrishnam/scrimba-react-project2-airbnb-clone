import Image from "next/image";
import styles from "../_styles/Header.module.css";

export default function Header({ headerLogo }) {
    return (
        <section className={styles.headerContainer}>
            <Image id={styles.headerLogo} src={headerLogo} />
        </section>
    );
}
