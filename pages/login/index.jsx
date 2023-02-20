/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import styles from "./login.module.css";
import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { useRouter } from "next/router";
import Link from "next/link";
import { API_URL } from "../../https";

const index = () => {
  const router = useRouter();
  const [data, setData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API_URL}/login/`, {
        email: data.email,
        password: data.password,
      })
      .then((res) => localStorage.setItem("token", JSON.stringify(res.data)))
      .then(router.push("/"))
      .then(()=> {
        window.location.reload()
      })
      .catch((err) => console.log(err));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Layout title="login">
      <section className="container full_screen">
        <form
          action="register"
          onSubmit={(e) => handleSubmit(e)}
          className={styles.form}
        >
          <h1>Log in</h1>
          <p>please enter your credentials to log in</p>
          <input
            className={styles.input}
            value={data.email}
            type="email"
            name="email"
            placeholder="email"
            required
            onChange={(e) => handleChange(e)}
          />
          <input
            className={styles.input}
            value={data.password}
            type="password"
            name="password"
            placeholder="password"
            required
            onChange={(e) => handleChange(e)}
          />
          <button type="submit" className={styles.button}>
            Submit
          </button>
        <Link  href={'/register'}> 
        <a className={styles.link}> Зарегистрироваться</a>
        </Link>
        </form>
      </section>
    </Layout>
  );
};

export default index;
