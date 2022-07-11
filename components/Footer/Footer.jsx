import React, {useEffect} from 'react';
import styles from './Footer.module.css';

import Image from 'next/image';
import {useDispatch, useSelector} from "react-redux";
import {getCotegories} from "../../redux/action/categoriesAction";
import Link from "next/link";

const Footer = () => {
    const { categories } = useSelector(state => state.categories)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCotegories())
    }, [])
    console.log(categories)
    return (
        <footer>
            <div className={"container " + styles.footer}>
                <div>
                    <ul className={styles.footer_ul}>
                        <li>О нас</li>
                        <li>Контакты</li>
                        <Link href={"/goodCreadit"}>
                            <a><li>Товары в кредит</li></a>
                        </Link>
                        <li>Акции</li>
                        <li>Гарантия</li>
                        <li>Политика конфиденциальности</li>
                        <li>Оферта</li>
                        <li>Связаться с нами</li>
                    </ul>
                </div>

                <div>
                    <ul className={styles.footer_ul}>
                        <li>Каталог</li>
                        {
                            categories?.map((item, idx) => (
                                <Link key={item.id} href="/catalog/[id]" as={`/catalog/${item.id}`}>
                                    <a>
                                        <li>{item.name}</li>
                                    </a>
                                </Link>
                            ))
                        }
                    </ul>
                </div>
                <div>
                    <Image src='/map.png' alt='map' width={480} height={282} />
                </div>
            </div>

            <div className={"container " + styles.footer_bottom}>
                <div className={styles.footer_soc}>
                    <Image
                        src='/instagram.svg'
                        alt='instagram logo'
                        width={24}
                        height={24}
                    />
                    <Image
                        src='/whatsapp.svg'
                        alt='whatsapp logo'
                        width={24}
                        height={24}
                    />
                    <Image
                        src='/facebook.svg'
                        alt='facebook logo'
                        width={24}
                        height={24}
                    />
                    <Image
                        src='/telegram.svg'
                        alt='telegram logo'
                        width={24}
                        height={24}
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
