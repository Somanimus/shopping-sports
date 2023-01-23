import React from 'react';
import Image from 'next/image';
import styles from './Withus.module.css';

const Card = () => {
    return (
        <div className={styles.card}>
            <div className={styles.card_flex}>
                <h3>Выгодно</h3>
            </div>
            <p>Комплекты и отдельные товары по скидкам</p>
        </div>
    );
};

const Card2 = () => {
    return (
        <div className={styles.card}>
            <div className={styles.card_flex}>
                <h3>Удобно</h3>
            </div>
            <p>Выбирайте и заказывайте товары со своего дома</p>
        </div>
    );
};

const Card3 = () => {
    return (
        <div className={styles.card}>
            <div className={styles.card_flex}>
                <h3>Качественно</h3>
            </div>
            <p>Только надежные и качественные товары!</p>
        </div>
    );
};

const Card4 = () => {
    return (
        <div className={styles.card}>
            <div className={styles.card_flex}>
                <h3>Эффективно</h3>
            </div>
            <p>Качество и низкая цена!</p>
        </div>
    );
};

export default function WithUs() {
    return (
        <div className='gray_bg'>
            <div className="container">
                <h2>С Нами</h2>
                <div className={styles.card_wrapper}>
                    <Card />
                    <Card2 />
                    <Card3 />
                    <Card4 />
                </div>
            </div>
        </div>
    );
}
