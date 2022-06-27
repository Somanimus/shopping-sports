import React from 'react';
import styles from './Footer.module.css';

import Image from 'next/image';

const Footer = () => {
    return (
        <footer>
            <div className={styles.footer_container}>
                <div>
                    <ul className={styles.footer_ul}>
                        <li>Информация</li>
                        <li>О магазине</li>
                        <li>Контакты</li>
                        <li>Товары в кредит</li>
                        <li>Акции</li>
                        <li>Гарантия</li>
                        <li>Политика конфиденциальности</li>
                        <li>Оферта</li>
                        <li>Связаться с нами</li>
                    </ul>
                </div>

                <div>
                    <ul className={styles.footer_ul}>
                        <li>Каталог</li>
                        <li>Диваны</li>
                        <li>Кровати</li>
                        <li>Кресла</li>
                        <li>Стулья</li>
                        <li>Пуфы</li>
                        <li>Декор</li>
                    </ul>
                </div>
                <div>
                    <Image src='/map.png' alt='map' width={480} height={282} />
                </div>
            </div>

            <div className={styles.footer_container}>
                <div className={styles.footer_soc}>
                    <Image
                        src='/instagram.svg'
                        alt='instagram logo'
                        width={24}
                        height={24}
                    />
                    <Image
                        src='/whatsapp.svg'
                        alt='whatsapp logo'
                        width={24}
                        height={24}
                    />
                    <Image
                        src='/facebook.svg'
                        alt='facebook logo'
                        width={24}
                        height={24}
                    />
                    <Image
                        src='/telegram.svg'
                        alt='telegram logo'
                        width={24}
                        height={24}
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
