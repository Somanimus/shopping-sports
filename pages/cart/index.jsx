import React, {useEffect, useState} from 'react';
import Layout from '../../components/Layout/Layout';
import { BestCard } from "../../components/Best/Best";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../../redux/action/productsAction";
import {basketAction, getLocalStorage} from "../../redux/action/basketAction";

const index = () => {
    const { products } = useSelector((state) => state.products)
    const { basket } = useSelector((state) => state.basket)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts(false, false, 0))
        dispatch(basketAction())
    }, [])

    return <Layout title='Корзина'>
        <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr"}}>
            {
                basket.length ? products?.results?.filter((item, idx) => basket.indexOf(item.id) !== -1).map((item, idx) => {
                    return (
                        <div key={item.id}>
                            <BestCard content={item} new_is={false} />
                        </div>
                    )
                }) : <h2>В корзине нечего нету</h2>
            }
        </div>
    </Layout>;
};

export default index;
