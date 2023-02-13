/* eslint-disable react-hooks/rules-of-hooks */

import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import styles from './add_balance.module.css'
import { Request } from "request-ip";
import { API_URL } from "../../https";

const index = () => {
    const [user, setUser] = useState({})
    const router = useRouter()
    const [redirect, setRedirect] = useState('')
  const [data, setData] = useState({
    amount: "",
    currency: "rub",
    description: "this is a descr",
    name: "",
    card_number: "",
    card_expire_month: "",
    card_expire_year: "",
    card_cvc: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const balanceSubmit = async (e) => {
    e.preventDefault();
    const key = JSON.parse(localStorage.getItem("token")).access;
    axios
      .post(
        `${API_URL}/paysys_to/`,
        {
          amount: `${data.amount}00`,
          currency: "rub",
          client_ip_addr: '143.42.17.183',
          description: data.description,
          card_holder_name: data.name,
          card_number: data.card_number,
          card_expire: `${data.card_expire_year}${data.card_expire_month}`, 
          card_cvc: data.card_cvc,
        },
        {
          headers: {
            Authorization: `Bearer ${key}`,
          },
        }
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };


 
  return (
    <Layout title="add balance">
      <section className="container">
      <form className={styles.form} onSubmit={balanceSubmit}>
        <input
          type="text"
          placeholder="name surname"
          name="name"
          value={data.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="card number"
          name="card_number"
          value={data.card_number}
          onChange={handleChange}
        />
        <div className={styles.card_info}>
          <div className={styles.card_expire_box}>
            <input
              type="num"
              value={data.card_expire_month}
              name="card_expire_month"
              onChange={handleChange}
              max={12}
              placeholder="MM"
            />
            
            <input
              type="num"
              value={data.card_expire_year}
              name="card_expire_year"
              onChange={handleChange}
              max={99}
              placeholder="YY"
            />
            </div>

          <input
            type="text"
            placeholder="CVV/CVC"
            name="card_cvc"
            value={data.card_cvc}
            onChange={handleChange}
          />
        </div>
        <input
          type="text"
          placeholder="amount"
          name="amount"
          value={data.amount}
          onChange={handleChange}
        />
        <select
          name="currency"
          defaultValue={"rub"}
          className={"currency-select"}
          onChange={handleChange}
          value={data.currency}
        >
          <option value="rub">Russian rubles</option>
          <option value="usd">US Dollars</option>
          <option value="uzs">Uzbek Som</option>
          <option value="eur">Euro</option>
        </select>

        <button type="submit">Submit</button>
      </form>   </section>
    </Layout>
  );
};

export default index;