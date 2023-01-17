import React from "react";
import styles from "./Contacts.module.css";

const Contacts = () => {
    return (
        <section className={"container "}>
            <div className={styles.contacts_left}>
                <h1 className={styles.contacts_h1}>Контакты</h1>
                <p className={styles.contacts_p}>
                    Номер телефона: +(996)777 001713
                </p>
                <p className={styles.contacts_p}>
                    Адрес компании: Кыргызская Республика г. Бишкек, ул.
                    Токтоналиева 111
                </p>
            </div>

            <div className={styles.contacts_right}>
                <h1 className={styles.contacts_h1}>Также связаться можно:</h1>
                <p className={styles.contacts_p}>
                    Почта:{" "}
                    <a href="mailto:corpusmebelkg@gmail.com">
                        corpusmebelkg@gmail.com
                    </a>
                </p>
            </div>
            <div className={styles.iframe}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2925.440955353838!2d74.58947041485017!3d42.842421512496145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec9df0d6badaf%3A0x72a9be480e8b58ea!2zMTExINGD0LvQuNGG0LAg0KLQvtC60YLQvtC90LDQu9C40LXQstCwLCDQkdC40YjQutC10Lo!5e0!3m2!1sru!2skg!4v1657962820933!5m2!1sru!2skg"
                    width="100%"
                    height="300"
                    style={{border: 0}}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
    );
};

export default Contacts;
