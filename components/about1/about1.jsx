import React from "react";
import styles from "./about1.module.css";

import Image from "next/image";

const About = () => {
    return (
        <section className="container">
            <div className={styles.about__content}>
                <div className={styles.about_left}>
                    <h1 className={styles.about_h1}>О компании</h1>
                    <p className={styles.about_p}>SportSupport - это онлайн магазин для спорт товаров различного калибра</p>
                    <p className={styles.about_p}>
                   Удобство, доступность и качество лежат в основе каждого продукта, который мы продаем, и мы стремимся к тому, чтобы каждый предлагаемый нами ассортимент отражал эти ценности. Наша цель сосредоточена на трех факторах: наше влияние, наши продукты и наши люди.
                   </p>
                   <br />
                   <h2 className={styles.about_h2}>Наше влияние</h2>
                   <p>В sportsupport.store мы понимаем, что спорт и физкультура - важная часть повседневной жизни, и стремимся сделать спорт доступным для каждого. Наш сайт — это место, где вы можете найти любой товар, который удволетворит потребности каждого пользователя: от любителя, до профессионала</p>
                   <br />
                   <h2 className={styles.about_h2}>Наши продукты</h2>
                   <p>На sportsupport.store есть спортивный инвентарь для самых разных сфер деятельности. От резиновых петель и скакалок для легкого поддержания тонуса, до штанг и турников для усиленной тренировки мышц </p>
                   <br />
                   <h2 className={styles.about_h2}>Наши люди</h2>
                   <p>В sportsupport.store мы считаем, что несем ответственность за обеспечение наилучшего опыта во всех аспектах. Мы делаем все возможное, чтобы сделать ваши покупки максимально удобными и удобными. С этой целью у нас есть профессиональная команда поддержки клиентов, которая поможет и направит вас в вашем путешествии по магазинам на sportsupport.store</p>

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
