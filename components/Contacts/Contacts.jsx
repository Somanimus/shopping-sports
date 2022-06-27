import React from 'react';
import styles from './Contacts.module.css';
import Image from 'next/image';

const Contacts = () => {
    return (
        <section className={styles.contacts_container}>
            <div className={styles.contacts_left}>
              <h1 className={styles.contacts_h1}>Контакты</h1>
              <p className={styles.contacts_p}>Номер телефона: 1234567</p>
              <p className={styles.contacts_p}>Адрес компании: </p>
              <p className={styles.contacts_p}>Номер телефона: 1234567</p>
              <p className={styles.contacts_p}>Адрес компании: </p>
            </div>

            <div className={styles.contacts_right}>
            <h1 className={styles.contacts_h1}>Также связаться можно:</h1>
              <p className={styles.contacts_p}>Почта:</p>
              <p className={styles.contacts_p}>Twitter </p>
              <p className={styles.contacts_p}>Telegram</p>
              <p className={styles.contacts_p}>Whatsapp </p>
            </div>
            <div className={styles.contacts_img}>
                <Image
                    id='img'
                    src='/hero.png'
                    alt='image'
                    width={500}
                    height={450}
                />
            </div>
        </section>
    );
};

export default Contacts;