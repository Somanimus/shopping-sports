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
           </div>
        </section>
    );
};

export default Contacts;
