import React, {useEffect, useState} from 'react';
import styles from './Best.module.css';
import Image from 'next/image';
import LoadMore from '../LoadMore/LoadMore';
import {addBasket, basketAction} from "../../redux/action/basketAction";
import {useDispatch, useSelector} from "react-redux";
import Link from "next/link";

const New = () => {
    return <div className={styles.best_card_new}>Новый</div>;
};

const Hit = () => {
    return <div className={styles.best_card_hit}>Хит продаж</div>;
};

export const BestCard = ({new_is, content}) => {
    const { basket } = useSelector(state => state.basket)
    const dispatch = useDispatch()

    function onClickButton(e) {
        e.preventDefault()
        addBasket(content.id)
        dispatch(basketAction())
    }

    return (
        <Link href={`/[id]`} as={`/${content.id}`}>
            <a className={styles.card_link}>
                <div className={styles.best_card}>

                    <div className={styles.best_center}>
                        {new_is === true ? <New /> : <Hit />}
                        <div className={styles.image_wrapper}>
                            <Image
                                src={content.image}
                                alt=''
                                width={"100%"}
                                height={260}
                                loader={() => content.image}
                                layout="responsive"
                                objectFit={"cover"}
                                unoptimized
                            />
                        </div>
                        <div className={styles.line}/>

                        <div className={styles.best_card_name}>{content.name}</div>
                        <div className={styles.best_card_descr}>
                            {content.description}
                        </div>

                    </div>
                    <div>
                        <div className={styles.best_card_price}>{content.price.replace(/\..*/, '')} сом</div>
                        <div className={styles.best_card_btn} onClick={onClickButton}>
                            { basket.indexOf(content.id) !== -1 ? "Удалить из корзины" : "В корзину" }
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    );
};

const Best = ({productsHit}) => {
    return (
        <div className='gray_bg'>
            <div className="container">
                <h2>Лучшие товары</h2>
                <div className={styles.best_card_wrapper}>
                    {
                        productsHit?.results?.length ? productsHit?.results.map((item, idx) => {
                            return (
                                <div className={styles.card_link} key={idx}>
                                    <BestCard new_is={item ? item.is_new : false} content={item} />
                                </div>
                            )
                        }) : "покачто нету популярных товаров"
                    }
                </div>
            </div>
            {
                productsHit.count > productsHit.count ? <LoadMore /> : ""
            }
        </div>
    );
};

export default Best;
