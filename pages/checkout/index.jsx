/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { API_URL } from "../../https";
import styles from "./checkout.module.css";

const index = () => {
    const router = useRouter()
  const [order, setOrder] = useState({});
  const [method, setMethod] = useState("cash");
  useEffect(() => {
    if (typeof window !== "undefined") {
      const order = JSON.parse(localStorage.getItem("order"));
      setOrder(order);
    }
  }, []);
  const handleCashOrder = async () => {
    await axios
      .post(`${API_URL}/order/`, order)
      .then((res) => console.log(res))
      .then(() => localStorage.removeItem("order"))
      .then(router.push('/'))
      .catch((err) => console.error(err));
  };

  return (
    <Layout title={"оплата"}>
      <div className="full_screen">
        <div className={`${styles.container}`}>
          <div className={styles.order_info}>
            <p>Имя: {order? order.full_name : ''}</p>
            <p>Электронная почта: {order?order.email: ''}</p>
            <p>Номер телефона: {order? order.phone : ''}</p>
            <p>Адрес: {order ? order.addres: ''}</p>
            <select
              onChange={(e) => setMethod(e.target.value)}
              defaultValue={"cash"}
              name="method"
              id="method"
              className={styles.select}
            >
              <option value="cash">Наличные</option>
              <option value="card">Карта</option>
            </select>
          </div>

          {method === "cash" ? (
            <div className={styles.cash_order_box}>
              <p className={styles.order_text}>
                Оплата заказа произойдет после доставки, наличными
              </p>
              <button className={styles.order_button} onClick={handleCashOrder}>
                Заказать
              </button>
            </div>
          ) : (
            <form action="post" className={styles.form}>
              <input
                className={`${styles.form_item} ${styles.input}`}
                type="text"
                name=""
                id=""
                placeholder="Номер кредитной карты"
              />
              <input
                className={`${styles.form_item} ${styles.input}`}
                type="text"
                name=""
                id=""
                placeholder="ММ/ГГ"
              />
              <input
                className={`${styles.form_item} ${styles.input}`}
                type="text"
                name=""
                id=""
                placeholder="CVV/CVS"
              />
              <button
                type="submit"
                className={`${styles.submit_btn} ${styles.form_item}`}
              >
                Заказать
              </button>
            </form>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default index;
