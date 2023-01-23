import React from 'react';
import Layout from '../components/Layout/Layout';
import styles from '../styles/error.module.css'

const error = () => {
    return (
        <Layout title={'errror'}>
            <div className={styles.card}>
                <div className={styles.card_box}>
                    <b className={styles.cross_shape}>X</b>
                <h1 className={styles.headline}>ERROR</h1>

                </div>
                <p> Something went wrong. <br /> Please try again!</p>
            </div>

        </Layout>
   );
};

export default error;