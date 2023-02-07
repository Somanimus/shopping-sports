import React from "react";
import styles from "./about1.module.css";

import Image from "next/image";

const About = () => {
    return (
        <section className="container">
            <div className={styles.about__content}>
                <div className={styles.about_left}>
                    <h1 className={styles.about_h1}>О компании</h1>
                    <p className={styles.about_p}>
                        эта страница на данный момент пуста
                   </p>
                </div>

                <div className={styles.about_right}>
               </div>
            </div>
            <div className={styles.dop_info}>
                <p>
               </p>
            </div>
               <hr />
        </section>
    );
};

export default About;
