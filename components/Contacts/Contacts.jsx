import React from "react";
import styles from "./Contacts.module.css";

const Contacts = () => {
    return (
        <section className={"container "}>
            <div className={styles.contacts_left}>
                <h1 className={styles.contacts_h1}>Свяжитесь с нами</h1>
                <p className={styles.contacts_p}>Если у вас есть какие-либо вопросы или проблемы, пожалуйста, позвоните или напишите нам по электронной почте. Мы всегда здесь и рады помочь вам в любое время, 24/7/365. Мы также принимаем письменную корреспонденцию по адресу:
                <br />
                <br />

                 Адрес: Нуркамал Жетикашкаева 29, г. Бишкек. Удовлетворенность наших клиентов - наша</p>
           </div>

            <div className={styles.contacts_right}>
                <h1 className={styles.contacts_h1}>Для связи с нами : </h1>
                <p className={styles.contacts_p}>
                    Тел: +996 774 777333
               </p>
           </div>
            <div className={styles.iframe}>
           </div>
        </section>
    );
};

export default Contacts;
