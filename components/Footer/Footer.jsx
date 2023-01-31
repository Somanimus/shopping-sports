import React, { useEffect } from 'react';
import styles from './Footer.module.css';

import Image from 'next/image';
import { useDispatch, useSelector } from "react-redux";
import { getCotegories } from "../../redux/action/categoriesAction";
import Link from "next/link";

const Footer = () => {
    const { categories } = useSelector(state => state.categories)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCotegories())
    }, [dispatch])
    return (
        <footer>
            <div className={"container " + styles.footer}>
                <div>
                    <ul className={styles.footer_ul}>
                        <li><Link href={'/about_us/'}>О нас</Link></li>
                        <Link href={"/goodCreadit"}>
                            <a><li>Товары в кредит</li></a>
                        </Link>
                        <Link href={"/shares"}>
                            <a><li>Акции</li></a>
                        </Link>
                        <li><Link href={'/delivery_policy'}>Доставка</Link></li>
                        <li><Link href={'/terms_of_use'}>Политика и Условия</Link></li>
                        <li><Link href={'/accepted_payments'}>Платежы</Link></li>
                    </ul>
                </div>

                <div>
                    <ul className={styles.footer_ul}>
                        <li><Link href={'/catalog/'}>Каталог</Link></li>
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
                    <Image src='/map.ng' alt='map' width={480} height={282} />
                </div>
            </div>

            <div className={"container " + styles.footer_bottom}>
                <div className={styles.footer_soc}>
                    <p> ОсОО &quot;Спорт Суппорт&quot;
                        Нуркамал  Жетикашкаева 29, г. Бишкек, Чуйская область,  Кыргызстан. 720028
                        ИНН  02909202210082
                        ОКПО 31572782</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
