import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../../redux/action/productsAction";
import Link from "next/link";

const Hero = () => {
    const { searchValue, productsSearch } = useSelector(state => state.products)
    const [state, setState] = useState("")
    const dispatch = useDispatch()
    console.log(searchValue)
    const onChangeValue = (e) => {
        setState(e.target.value)
    }
    useEffect(() => {
        dispatch(getProducts(false, false, false, state.replace(/ /ig, '+')))
    }, [state])
    const clickSearch = () => {
        console.log(state)
        dispatch(getProducts(false, false, false, state.replace(/ /ig, '+')))
    }
    return (
        <section className={styles.hero}>
            <div className={styles.hero_left}>
                <h1 className={styles.hero_h1}>
                    Мебель <br /> на любой вкус
                </h1>
                <p>
                    C помощью этого онлайн-генератора рыботекста можно
                    <br /> пачками плодить как отдельные предложения и заголовки
                </p>
                <div className={styles.input_wrapper}>
                    <input type='text' className={styles.hero_input} onChange={onChangeValue} />
                    <div className={styles.hero_btn} onClick={clickSearch}>Найти</div>
                    {
                        state ? <div className={styles.modalInput}>
                                {
                                    productsSearch?.results?.length ? productsSearch?.results?.map((item, idx) => {
                                        return <Link href="/[id]" as={`/${item.id}`} key={item.id}>
                                            <a>
                                                <div key={item.id}>
                                                    <h4>{item.name}</h4>
                                                </div>
                                            </a>
                                        </Link>
                                    }) : <div>совподений не найдено</div>
                                }
                            </div>
                            : ""
                    }
                </div>
            </div>

            <div className={styles.hero_right}>
                <Image
                    id='img'
                    src='/hero.png'
                    alt='image'
                    width={700}
                    height={450}
                />
            </div>
        </section>
    );
};

export default Hero;
