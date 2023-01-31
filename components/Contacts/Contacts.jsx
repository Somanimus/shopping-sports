import React from "react";
import styles from "./Contacts.module.css";

const Contacts = () => {
    return (
        <section className={"container "}>
            <div className={styles.contacts_left}>
                <h1 className={styles.contacts_h1}></h1>
                <p className={styles.contacts_p}></p>
                <p className={styles.contacts_p}></p>
            </div>

            <div className={styles.contacts_right}>
                <h1 className={styles.contacts_h1}>Для связи с нами : </h1>
                <p className={styles.contacts_p}>
                    Тел: +996 774 777333
               </p>
               <p className={styles.contacts_p}> 
                    Адрес: Нуркамал Жетикашкаева 29, г. Бишкек
               </p>
            </div>
            <div className={styles.iframe}>
           </div>
        </section>
    );
};

export default Contacts;
