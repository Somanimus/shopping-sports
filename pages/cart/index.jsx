import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { BestCard } from "../../components/Best/Best";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/action/productsAction";
import { basketAction, getLocalStorage } from "../../redux/action/basketAction";
import styles from "./card.module.css";
import Router from "next/router";
import { API_URL } from "../../https";
import axios from "axios";

const Card = () => {
  const { products } = useSelector((state) => state.products);
  const { basket } = useSelector((state) => state.basket);
  const [data, setData] = useState({
    email: "",
    addres: "",
    full_name: "",
    phone: "",
  });
          const handleChange = e => {
            const { name, value } = e.target;
            setData(prevState => ({
                ...prevState,
                [name]: value
            }));
        };
 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts(false, false, 0));
    dispatch(basketAction());
  }, [dispatch]);

  const formChange = async (e) => {
    e.preventDefault();
    const prodArray = [];
    for (let i = 0; i < basket.length; i++) {
      prodArray.push({
        prod_id: basket[i],
        amount: 1,
      });
    }
    console.log(prodArray);
    await axios
      .post(`${API_URL}/order/`, {
        email: data.email,
        addres: data.addres,
        full_name: data.full_name,
        phone: data.phone,
        ordered: true,
        products: prodArray,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <Layout title="Корзина">
      <div className={styles.basket + " container"}>
        {basket.length ? (
          products?.results
            ?.filter((item, idx) => basket.indexOf(item.id) !== -1)
            .map((item, idx) => {
              return (
                <div key={item.id}>
                  <BestCard content={item} new_is={false} />
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
              <input
                type="text"
                value={data.full_name}
                onChange={(e) => handleChange(e)}
                required
                maxLength={20}
                name="full_name"
              />
            </label>
            <label>
              <span>Email *</span>
              <input type="email" required name="email"
              value={data.email}
              onChange={e=>handleChange(e)} />
            </label>
            <label>
              <span>Телефон *</span>
              <input
                type="text"
                required
                placeholder="+996-XXX-XXX-XXX"
                name="phone"
                value={data.phone}
                onChange={e=>handleChange(e)}
              />
            </label>
            <label>
              <span>Адрес *</span>
              <input type="text" required name="addres"
              value={data.addres}
              onChange={e=> handleChange(e)} />
            </label>
          </div>
          <button type="submit">заказать</button>
        </form>
      </div>
    </Layout>
  );
};

export default Card;
