"use client";

import React from "react";
import { useUser } from "@/context/UserContext";
import styles from "../../styles/List.module.css";
import Image from "next/image";
import { Tooltip } from "@nextui-org/tooltip";

const List = React.forwardRef((props, ref) => {
    const { users } = useUser();
    const { list, imglist } = users[0];

    return (
        <div ref={ref} id="list" className={styles.containerList}>
            <div className={styles.circleBlue}>{""}</div>
            <h2 className={`${styles.title} ${props.isVisible ? styles.fadeIn : ""}`}>INTERESES</h2>
            <ul className={`${styles.list} ${props.isVisible ? styles.fadeIn : ""}`}>
                {list.map((item, index) => (
                    <Tooltip
                        key={index}
                        content={
                            <div className={styles.boxImages}>
                                <Image width={100} height={100} src={imglist[index]} className={styles.images} alt={`Imagen de ${item}`} />
                            </div>
                        }
                        placement="bottom"
                    >
                        <li className={styles.interest}>{item}</li>
                    </Tooltip>
                ))}
            </ul>
        </div>
    );
});

export default List;
