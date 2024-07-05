"use client";

import { useUser } from "@/context/UserContext";
import Image from "next/image";
import styles from "../../styles/Header.module.css";

export default function Header({ aboutRef, listRef, contactRef }) {
    const { users } = useUser();
    const { profileImage, name, instagram } = users[0];

    const scrollToSection = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <header className={styles.containerHeader}>
                <Image src={profileImage} alt="Profile" width={300} height={350} className={styles.profileImage} priority></Image>
                <div className={styles.boxPerfil}>
                    <h1 className={styles.title}>{name}</h1>
                    <p className={styles.ig}>{instagram}</p>
                    <ul className={styles.buttons}>
                        <li className={styles.buttonAbout} onClick={() => scrollToSection(aboutRef)}>
                            Sobre mí
                        </li>
                        <li className={styles.buttonList} onClick={() => scrollToSection(listRef)}>
                            Intereses
                        </li>
                        <li className={styles.buttonContact} onClick={() => scrollToSection(contactRef)}>
                            Contacto
                        </li>
                    </ul>
                </div>
            </header>
        </>
    );
}
