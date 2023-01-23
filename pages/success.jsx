import React from 'react';
import Layout from '../components/Layout/Layout';
import styles from '../styles/success.module.css'

const success = () => {
    return (
        <Layout title={'success'}>
            <div className={styles.card}>
                <div className={styles.card_box}>
                    <i className={styles.checkmark}>✓</i>
                    <h1 className={styles.headline}>success</h1>

                </div>
                <p>We received your purchase request; <br /> we will be in touch shortly! </p>
            </div>

        </Layout>

    );
};

export default success;