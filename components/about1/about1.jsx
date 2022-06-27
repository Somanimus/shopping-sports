import React from 'react';
import styles from './about1.module.css';

import Image from 'next/image';

const About = () => {
    return (
        <section className={styles.about}>
            <div className={styles.about__content}>
            <div className={styles.about_left}>
                <h1 className={styles.about_h1}>
                    О компании
                </h1>
                <p className={styles.about_p}>
                    C помощью этого онлайн-генератора рыботекста можно
                    <br /> пачками плодить как отдельные предложения и заголовки
                </p>
            </div>

            <div className={styles.about_right}>
                <Image
                    id='img'
                    src='/hero.png'
                    alt='image'
                    width={600}
                    height={450}
                />
            </div>
            </div>
            <div className={styles.about__content}>
            <div className={styles.about_left}>
            <Image
                    id='img'
                    src='/hero.png'
                    alt='image'
                    width={600}
                    height={450}
                />
            </div>

            <div className={styles.about_right}>
            <h1 className={styles.about_h1}>
                    О компании
                </h1>
                <p className={styles.about_p}>
                    C помощью этого онлайн-генератора рыботекста можно
                    <br /> пачками плодить как отдельные предложения и заголовки
                </p>
            </div>
            </div>
            <div className={styles.about__content}>
            <div className={styles.about_left}>
                <h1 className={styles.about_h1}>
                    О компании
                </h1>
                <p className={styles.about_p}>
                    C помощью этого онлайн-генератора рыботекста можно
                    <br /> пачками плодить как отдельные предложения и заголовки
                </p>
            </div>

            <div className={styles.about_right}>
                <Image
                    id='img'
                    src='/hero.png'
                    alt='image'
                    width={600}
                    height={450}
                />
            </div>
            </div>
            <div className={styles.about__content}>
            <div className={styles.about_left}>
            <Image
                    id='img'
                    src='/hero.png'
                    alt='image'
                    width={600}
                    height={450}
                />
            </div>

            <div className={styles.about_right}>
            <h1 className={styles.about_h1}>
                    О компании
                </h1>
                <p className={styles.about_p}>
                    C помощью этого онлайн-генератора рыботекста можно
                    <br /> пачками плодить как отдельные предложения и заголовки
                </p>
            </div>
            </div>
        </section>
    );
};

export default About;
