/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { API_URL } from "../../https";

const index = () => {
    const [user, setUser] = useState({})
    useEffect(() => {
     const fetchUser =async () => {
        const token = JSON.parse(localStorage.getItem("token"))
        console.log(token.access)
        if (token !== null) {
            const key = token.access;

        await axios.get(`${API_URL}/userme/`, {
            headers: {
                Authorization: `Bearer ${key}`
            },
        }).then(res => setUser(res.data) ).catch(err => console.log(err))
        }
     }
     fetchUser()
   }, [])
   console.log(user) 
  return (
    <Layout title="register">
      <section className="container">
        <h1>Profile</h1>
        <p> <b>name</b>: {user.first_name} </p>
        <p> <b>last name: {user.last_name}</b></p>
        <p> <b>balance</b>: {user.balance}</p>
     </section>
    </Layout>
  );
};

export default index;