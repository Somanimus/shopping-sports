import React from 'react';
import Layout from '../../components/Layout/Layout';
import styles from './acceptedPayments.module.css'

const index = () => {
    return (
        <Layout>
            <div className={styles.payments_container}>
                <h1 className={styles.headline}>Принимаемые платежы:</h1>
                <div className={styles.payment_wallets}>
                    <div className={styles.wallets}>
                        <img src="https://static.wixstatic.com/media/e13a0d_ec131de30c3943e1849ad0a022281194~mv2.png/v1/fill/w_81,h_81,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/optima%20bank.png" alt="optima_icon" />
                        <span>1. Optima Bank</span>
                    </div>
                    <div className={styles.wallets}>
                        <img src="https://static.wixstatic.com/media/e13a0d_a96b408bc914464bbd0dbf1284f66ccb~mv2.png/v1/fill/w_81,h_81,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/unnamed_webp.png" alt="o_icon" />
                        <span>2. О! Деньги</span>
                    </div>
                    <div className={styles.wallets}>
                        <img src="https://static.wixstatic.com/media/e13a0d_85500d3a18a94b29b10d8c1bd4b3ee61~mv2.png/v1/fill/w_81,h_81,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/elsom_edited.png" alt="elsom_icon" />
                        <span>3. Элсом</span>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default index;