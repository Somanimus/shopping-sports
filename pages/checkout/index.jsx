import React from 'react';
import Layout from '../../components/Layout/Layout';
import styles from './checkout.module.css'


const index = () => {
    return (
        <Layout title={'оплата'}>
            <div className={styles.container}>
                <div className={styles.order_info}>
                   <p>Name: {'Soman'}</p>
                   <p>Email: {'som@gmail.com'}</p>
                   <p>Phone number: {'88002353535'}</p>
                   <p>Adress: {'Some Street 102/2'}</p> 
                </div>
                <form action="post" className={styles.form}>
                    <input className={`${styles.form_item} ${styles.input}`} type="text" name="" id="" placeholder='credit card number' />
                    <input className={`${styles.form_item} ${styles.input}`} type="text" name="" id="" placeholder='expiration date'/>
                    <input className={`${styles.form_item} ${styles.input}`} type="text" name="" id="" placeholder='CVV/CVS'/>
                    <button type="submit" className={`${styles.submit_btn} ${styles.form_item}`}>submit payment</button>
                </form>
            </div>
        </Layout>
            );
};

export default index;