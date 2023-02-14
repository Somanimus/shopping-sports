import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const Navbar = () => {
    const router = useRouter()
    const { basket } = useSelector((state) => state.basket);
    const [modal, setModal] = useState(false);
    let token = ''
    if (typeof window !== 'undefined'){

     token = JSON.parse(localStorage.getItem("token"))
    }
    const handleLogout = () => {
        localStorage.removeItem("token")
        router.push('/').then(() => window.location.reload())
    }

    return (
        <header className={` ${styles.header}`}>
            <nav className={`container ${styles.nav}`}>
                <Link href="/">
                    <a>
                        <div className={styles.nav_logo}>

                            <span>Sport Support</span>
                        </div>
                    </a>
                </Link>

                <ul className={styles.nav_list}>

                    <li>
                        <Link href="/about">
                            <a>О нас</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/catalog">
                            <a>Каталог</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact_us">
                            <a>Контакты</a>
                        </Link>
                    </li>
                    {token ?
                        <>
                        <li>
                            <Link href="/profile">
                                <a >профиль</a>
                            </Link>
                        </li>
                        <li>
                            <button className={styles.logout_btn} onClick={handleLogout} href="/profile">
                                <a >выйти</a>
                            </button>
                        </li>


                        </> 
  :                      <li>
                            <Link href="/login">
                                <a >войти</a>
                            </Link>
                        </li>  


                        }

               </ul>

                <div className={styles.basket_icon}>
                    <Link href="/cart">
                        <a>
                            <Image className={styles.basket_svg}
                                src="/shopping-bag.svg"
                                alt="Logo"
                                width={24}
                                height={24}
                            />
                            {basket.length ? (
                                <div className={styles.basket_length}>
                                    {basket.length}
                                </div>
                            ) : (
                                ""
                            )}
                        </a>
                    </Link>
                </div>

                <div className={styles.burger} onClick={() => setModal(!modal)}>
                    <div className={styles.burger_content} />
                </div>

                <div
                    className={styles.modal}
                    style={!modal ? { display: "none" } : {}}
                >
                    <ul className={styles.list_mobile}>

                        <li>
                            <Link href="/about">
                                <a>О нас</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/catalog">
                                <a>Каталог</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contacts">
                                <a>Контакты</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/cart">
                                <a>магазин</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/register">
                                <a >регистрация</a>
                            </Link>
                        </li>
                    </ul>
                    <div
                        className={styles.modal_close_position}
                        onClick={() => setModal(!modal)}
                    >
                        <div className={styles.modal_close}></div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
