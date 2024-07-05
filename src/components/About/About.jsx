"use client";

import React from "react";
import { useUser } from "@/context/UserContext";
import styles from "../../styles/About.module.css";

const About = React.forwardRef((props, ref) => {
    const { users } = useUser();
    const { about } = users[0];

    return (
        <section ref={ref} id="about" className={styles.containerAbout}>
            <div className={styles.circleBlue}>{""}</div>
            <h1 className={`${styles.info} ${props.isVisible ? styles.fadeIn : ""}`}>{about}</h1>
        </section>
    );
});

export default About;
