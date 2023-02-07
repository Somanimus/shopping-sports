import React, { useEffect, useState } from "react";
import styles from "./Best.module.css";
import Image from "next/image";
import LoadMore from "../LoadMore/LoadMore";
import { addBasket, basketAction } from "../../redux/action/basketAction";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Router, { useRouter } from "next/router";

const New = () => {
    return <div className={styles.best_card_new}>Новый</div>;
};

const Hit = () => {
    return <div className={styles.best_card_hit}>Хит продаж</div>;
};

export const BestCard = ({
    new_is,
    content,
    count = 1,
    setCount = () => {},
}) => {
    const [amount, setAmount] = useState(content.price.replace(/\..*/, ""));
    const { basket } = useSelector((state) => state.basket);
    const dispatch = useDispatch();
    const router = useRouter()

    function onClickButton(e) {
        e.preventDefault();
        addBasket(content.id);
        dispatch(basketAction());
    }

    const increment = (e) => {
        e.preventDefault()
        setAmount(+amount + Number(content.price.replace(/\..*/, "")))
        setCount(count+1)
    }

    const decrement = (e) => {
        e.preventDefault()
        if(count > 1){
            setAmount(+amount - content.price.replace(/\..*/, ""))
            setCount(count-1)
        }
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
                                alt=""
                                width={208}
                                height={260}
                                loader={() => content.image}
                                // layout="fill"
                                objectFit={"contain"}
                                unoptimized
                            />
                        </div>
                        <div className={styles.line} />

                        <div className={styles.best_card_name}>
                            {content.name}
                        </div>
                        <div className={styles.best_card_descr}>
                            {content.description}
                        </div>
                    </div>
                    <div>
                        <div className={styles.count_price} onClick={e => e.stopPropagation()}>
                            <div className={styles.best_card_price}>
                                {amount} сом
                            </div>
                            {router.asPath === "/cart" ? (
                                <div className={styles.count}>
                                    <div>
                                        <div className={styles.increment} onClick={increment}>+</div>
                                        <div className={styles.decrement} onClick={decrement}>-</div>
                                    </div>
                                    <div className={styles.value}>{count}</div>
                                </div>
                            ) : (
                                ""
                            )}
                        </div>

                        <div
                            className={styles.best_card_btn}
                            onClick={onClickButton}
                        >
                            {basket.indexOf(content.id) !== -1
                                ? "Удалить из корзины"
                                : "В корзину"}
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    );
};

const Best = ({ productsHit }) => {
    return (
        <div className="gray_bg">
            <div className="container">
                <h2 className="text-center">Лучшие товары</h2>
                <div className={styles.best_card_wrapper}>
                    {productsHit?.results?.length
                        ? productsHit?.results.map((item, idx) => {
                              return (
                                  <div className={styles.card_link} key={idx}>
                                      <BestCard
                                          new_is={item ? item.is_new : false}
                                          content={item}
                                      />
                                  </div>
                              );
                          })
                        : "Сейчас товаров под данной категорией нет"}
                </div>
            </div>
            {productsHit.count > productsHit.count ? <LoadMore /> : ""}
        </div>
    );
};

export default Best;
