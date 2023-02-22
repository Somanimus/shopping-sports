/* eslint-disable react-hooks/rules-of-hooks */
import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./profile.module.css";
import Layout from "../../components/Layout/Layout";
import { API_URL } from "../../https";

const index = () => {
  const router = useRouter();
  const [edit, setEdit] = useState(false);
  const handleEdit = async (e) => {
    e.preventDefault()
    const id = localStorage.getItem("user_id");
    await axios
      .patch(`${API_URL}/user_portfolio/${id}/`, {
        phone_number: data.phone_number,
        last_name: data.last_name,
        first_name: data.first_name,
      }).then(res => window.location.reload() )
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [user, setUser] = useState({});
  useEffect(() => {
    const fetchUser = async () => {
      const token = JSON.parse(localStorage.getItem("token"));
      if (token !== null) {
        const key = token.access;

        await axios
          .get(`${API_URL}/userme/`, {
            headers: {
              Authorization: `Bearer ${key}`,
            },
          })
          .then((res) => setUser(res.data))
          .catch((err) => console.error(err));
      }
    };
    fetchUser();
    if (typeof window !== undefined) {
      localStorage.setItem("user_id", user.id);
    }
  }, [user.id]);
  const [data, setData] = useState({
    first_name: user.first_name,
    last_name: user.last_name,
    phone_number: user.phone_number,
  });

  return (
    <Layout title="register">
      <section className="container">
          {edit ? 
            <form onSubmit={ e => handleEdit(e)} className={styles.profile_box}>
              <h1>Изменение Профиля</h1>
              <input
                type="text"
                value={data.first_name}
                onChange={(e) => handleChange(e)}
                name="first_name"
                placeholder="Имя"
              />
              <input
                type="text"
                value={data.last_name}
                name="last_name"
                onChange={(e) => handleChange(e)}
                placeholder="Фамилия"
              />
              <input
                type="text"
                value={data.phone_number}
                required
                name="phone_number"
                onChange={(e) => handleChange(e)}
                placeholder="Номер телефона"
              />
              <button type="submit">Update</button>
              <button onClick={() => setEdit(false)}>Cancel</button>
            </form>
           : (
            <div className={styles.profile_box}>
              <h1>Профиль</h1>
              <p>
                {" "}
                <b>Имя:</b> {user.first_name}{" "}
              </p>
              <p>
                {" "}
                <b>Фамилия: </b> {user.last_name}
              </p>
              <p>
                {" "}
                <b>Номер телефона:</b> {user.phone_number}{" "}
              </p>

              <button onClick={() => setEdit(true)}>ИЗМЕНИТЬ ПРОФИЛЬ</button>
            </div>
          )}
      </section>
    </Layout>
  );
};

export default index;
