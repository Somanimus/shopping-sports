import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from "../../components/Layout/Layout";
import { getGoodCredit } from '../../redux/action/goodCreaditAction';
import { BestCard } from '../../components/Best/Best';
import * as styles from "./goodCredit.module.css"

const GoodCredit = () => {
    const {goodCredit} = useSelector(state => state.goodCredit)
    const dispatch = useDispatch()
    console.log(goodCredit)
    useEffect(() => {
        dispatch(getGoodCredit())
    }, [dispatch])
    return (
        <Layout>
            <div className='container'>
                <h2>Товары в кредит</h2>
                <div className={styles.best_card_wrapper}>
                    {
                        goodCredit?.results ? goodCredit?.results?.map((item, idx) => {
                            return (
                                <div className={styles.card_link} key={idx}>
                                    <BestCard new_is={item ? item.is_new : false} content={item} />
                                </div>
                            )
                        }) : "покачто нету товаров в кредит"
                    }
                </div>
            </div>
        </Layout>
    );
};

export default GoodCredit;