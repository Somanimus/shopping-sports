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
                     Sport Support — это доступ в мир спорта с рекордным ассортиментом! Это настоящий бренд-эксперт в спорте и активном отдыхе, который вдохновляет своих покупателей, мотивирует их и помогает регулярно заниматься спортом, чтобы радоваться жизни и менять себя к лучшему день за днем! 
                   </p>
                   
                </div>

                <div className={styles.about_right}>
                    <p></p>
               </div>
            </div>
            <div className={styles.dop_info}>
                <p>
               </p>
            </div>
        </section>
    );
};

export default About;
