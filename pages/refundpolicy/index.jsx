import React from 'react';
import styles from './refundPolicy.module.css'
import Layout from '../../components/Layout/Layout';

const index = () => {
    return (
        <Layout>
            <div className={styles.policy_container}>
            <h1 className={styles.headline}>Условия возврата</h1>
            </div>
        </Layout>
    );
};

export default index;