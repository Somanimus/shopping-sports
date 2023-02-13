/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import styles from './register.module.css'
import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { API_URL } from "../../https";
import { useRouter } from "next/router";

const index = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

    const router = useRouter()
  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.password === data.confirmPassword) {
        axios.post(`${API_URL}/registration/`, {
            email: data.email,
            password: data.password
        }).then(res => console.log(res)).then(router.push('/login')).catch(err => console.log(err))}
        else{
            alert('please fill all the fields correctly')
        }

  };
  const handleRedirect = (url) => {
    router.push(url)
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Layout title="register">
      <section className="container">
        <form action="register" onSubmit={(e) => handleSubmit(e)} className={styles.form}>
            <h1>Registration</h1>
            <p>please enter your credentials to register</p>
          <input
          className={styles.input}
            value={data.email}
            type="email"
            name="email"
            placeholder="email"
            onChange={(e) =>handleChange(e)}
          />
          <input
          className={styles.input}
            value={data.password}
            type="password"
            name="password"
            placeholder="password"
            onChange={e =>handleChange(e)}
          />
          <input
          className={styles.input}
            value={data.confirmPassword}
            type="password"
            placeholder="confirm password"
            name="confirmPassword"
            onChange={e =>handleChange(e)}
          />
          <button type="submit" className={styles.button}>Submit</button>
        </form>
      </section>
    </Layout>
  );
};

export default index;
