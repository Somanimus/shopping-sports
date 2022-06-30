import React from 'react';
import styles from './Navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import {useSelector} from "react-redux";

const Navbar = () => {
    const { basket } = useSelector(state => state.basket)
    return (
        <header>
            <nav className={`container ${styles.nav}`}>
                <Link href='/'>
                    <a>
                        <div className={styles.nav_logo}>
                            <Image
                                src='/logo.svg'
                                alt='Logo'
                                width={24}
                                height={24}

                            />
                            <span>Corpus.kg</span>
                        </div>
                    </a>
                </Link>

                <ul className={styles.nav_list}>
                    <li>
                        <Link href='/'>
                            <a>Главная</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/about'>
                            <a>О нас</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/catalog'>
                            <a>Каталог</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/contacts'>
                            <a>Контакты</a>
                        </Link>
                    </li>
                </ul>

                <div className={styles.basket_icon}>
                    <Link href='/cart'>
                        <a>
                            <Image
                                src='/shopping-bag.svg'
                                alt='Logo'
                                width={24}
                                height={24}

                            />
                            {
                                basket.length ? <div className={styles.basket_length}>{basket.length}</div> : ""
                            }
                        </a>
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
