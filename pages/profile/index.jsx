/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from './profile.module.css'
import Layout from "../../components/Layout/Layout";
import { API_URL } from "../../https";

const index = () => {
    const router = useRouter()
    const handleClick =  () => {
        router.push('/add_balance')
    }
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
     if( typeof window !== undefined) {
      localStorage.setItem("user_id" , user.id)
     }
   }, [user.id])
   console.log(user) 
  return (
    <Layout title="register">
      <section className="container">
        <div className={styles.profile_box}>
        <h1>Profile</h1>
        <p> <b>first name</b>: {user.first_name} </p>
        <p> <b>phone number</b>: {user.phone_number} </p>
        <p> <b>last name: {user.last_name}</b></p>
        <p> <b>balance</b>: {user.balance}</p>
        <button onClick={handleClick}>
           UPDATE BALANCE 
        </button>

        </div>
           </section>
    </Layout>
  );
};

export default index;