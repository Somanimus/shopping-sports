import React from 'react';
import Layout from '../../components/Layout/Layout';
import styles from './delivery.module.css'

const Index = () => {
    return (
        <>
            <Layout title={'Доставка'}>
                <div className={styles.delivery_container}>
                    <h1 className={styles.headline}>Процесс Доставки</h1>
                    <div className={styles.info_box}>
                        <div className={styles.info_left}>
                            <h2 className={styles.headline_second}>Доставка товара</h2>
                            <hr />
                            <p>Избавьте себя от забот при перевозке товара — мы быстро и бережно доставим Вашу покупку в квартиру или офис. </p>
                            <br />
                            <ul className={styles.list}><p>преимущества доставки:</p>
                                <li>Обязательный звонок курьера за час до доставки товара;</li>
                                <br />
                                <li>Бережная транспортировка товара на специально оборудованных автомобилях;</li>
                                <br />
                                <li>Доставка товара до указанного Вами места в квартире или офисе независимо от этажа (даже, если в доме нет лифта).</li>
                            </ul>

                        </div>
                        <div className={styles.info_right}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93561.73014091277!2d74.52182137304054!3d42.87697950367454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7dc91b3c881%3A0x492ebaf57cdee27d!2sBishkek!5e0!3m2!1sen!2skg!4v1675145532620!5m2!1sen!2skg" width="600" height="450" className={styles.map} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>


                </div>
            </Layout>
        </>
    );
};

export default Index;