import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { BestCard } from "../../components/Best/Best";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/action/productsAction";
import { basketAction, getLocalStorage } from "../../redux/action/basketAction";
import styles from "./card.module.css";

const f = {
    "email": "lev201611@gmail.com",
    "addres": "logvinenko 55A",
    "full_name": "lev Boiko",
    "phone": "0559595139",
    "ordered": false,
    "products": [{"prod_id": 1, "amount": 10}, {"prod_id": 2, "amount": 3}]
}

const Card = () => {
    const [amount, setAmount] = useState(1)
    const { products } = useSelector((state) => state.products);
    const { basket } = useSelector((state) => state.basket);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts(false, false, 0));
        dispatch(basketAction());
    }, [dispatch]);

    console.log(basket)

    const formChange = (e) => {
        e.preventDefault()
    } 

    return (
        <Layout title="Корзина">
            <div className={styles.basket + " container"}>
                {basket.length ? (
                    products?.results
                        ?.filter((item, idx) => basket.indexOf(item.id) !== -1)
                        .map((item, idx) => {
                            return (
                                <div key={item.id}>
                                    <BestCard content={item} new_is={false} count={amount} setCount={setAmount} />
                                </div>
                            );
                        })
                ) : (
                    <h2>В корзине нечего нету</h2>
                )}
            </div>
            <br />
            <br />
            <hr />
            <div className={styles.cart + " container"}>
                <form onSubmit={formChange}>
                    <div>
                        <label>
                            <span>Имя *</span>
                            <input type="text" required name="full_name" />
                        </label>
                        <label>
                            <span>Email *</span>
                            <input type="email" required name="email" />
                        </label>
                        <label>
                            <span>Телефон *</span>
                            <input
                                type="text"
                                required
                                placeholder="+996-XXX-XXX-XXX"
                                name="phone"
                            />
                        </label>
                        <label>
                            <span>Адрес *</span>
                            <input type="text" required name="addres" />
                        </label>
                    </div>
                    <button type="submit">заказать</button>
                </form>
            </div>
        </Layout>
    );
};

export default Card;
