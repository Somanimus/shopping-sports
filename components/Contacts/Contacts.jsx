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
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93561.73014091277!2d74.52182137304048!3d42.87697950367454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7dc91b3c881%3A0x492ebaf57cdee27d!2sBishkek!5e0!3m2!1sen!2skg!4v1676977673251!5m2!1sen!2skg" width={"600"} height={"450"}  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
           </div>
        </section>
    );
};

export default Contacts;
