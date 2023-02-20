/* eslint-disable react-hooks/rules-of-hooks */
import Link from "next/link";
import axios from "axios";
import styles from "./register.module.css";
import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { API_URL } from "../../https";
import { useRouter } from "next/router";
import Alert from "../../components/alert/alert";

const index = () => {
  const [alert, setAlert] = useState({
    shown: false,
  });
  const [data, setData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleAlert = (type, message) => {
    setAlert({
      type,
      message,
      shown:true


    })
    console.log(alert)
  }

  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    const passwordRegex = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d).*$/;

    if (
      data.password === data.confirmPassword &&
      passwordRegex.test(data.password) === true
    ) {
      axios
        .post(`${API_URL}/registration/`, {
          email: data.email,
          password: data.password,
        })
        .then((res) => console.log(res))
        .then(router.push("/login"))
        .catch((err) => console.log(err));
    } else if (data.password !== data.confirmPassword) {
      handleAlert('error', 'watch two password fields accordingly')
    } else if (passwordRegex.test(data.password) === false) {
      handleAlert('error', 'passwords must have one Capital letter and one number')
    } else {
      handleAlert('error', 'please fill out all the fields correctly')
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Layout title="register">
      <section className="container full_screen">
        <form
          action="register"
          onSubmit={(e) => handleSubmit(e)}
          className={styles.form}
        >
          <h1>Registration</h1>
          <p>please enter your credentials to register</p>
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
            required
            placeholder="password"
            onChange={(e) => handleChange(e)}
          />
          <input
            className={styles.input}
            value={data.confirmPassword}
            type="password"
            required
            placeholder="confirm password"
            name="confirmPassword"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit" className={styles.button}>
            Submit
          </button>
          <Link href={"/login"}>
            <a className={styles.link}>Войти</a>
          </Link>
        </form>
      </section>
      {alert.shown && <Alert type={alert.type} message={alert.message} close={setAlert} />}
    </Layout>
  );
};

export default index;
