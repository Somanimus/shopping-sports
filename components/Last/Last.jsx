import React, {useEffect} from 'react';
import styles from './Last.module.css';

import Image from 'next/image';
import LoadMore from '../LoadMore/LoadMore';
import {useDispatch, useSelector} from "react-redux";
import {productsLastCountSuccess, productsNewCount} from "../../redux/action/productsAction";
import {addBasket, basketAction} from "../../redux/action/basketAction";
import {BestCard} from "../Best/Best";

const New = () => {
    return <div className={styles.best_card_new}>Новый</div>;
};

const Hit = () => {
    return <div className={styles.best_card_hit}>Хит продаж</div>;
};

// const BestCard = ({new_is, content}) => {
//     const { basket } = useSelector(state => state.basket)
//     const dispatch = useDispatch()
//     useEffect(() => {
//         dispatch(basketAction())
//     }, [basket])
//     return (
//         <div className={styles.best_card}>
//             {new_is === true ? <New /> : <Hit />}
//             <div className={styles.image_wrapper}>
//                 <Image
//                     src={content.image}
//                     alt='sofa img'
//                     loader={() => content.image}
//                     width={208}
//                     height={260}
//                     objectFit={"cover"}
//                     unoptimized
//                 />
//             </div>
//             <div className={styles.line}/>
//             <div className={styles.best_center}>
//                 <div className={styles.best_card_name}>{content.name}</div>
//                 <div className={styles.best_card_descr}>
//                     {content.description}
//                 </div>
//                 <div className={styles.best_card_price}>{content.price.replace(/\..*/, '')} сом</div>
//             </div>
//             <div className={styles.best_card_btn} onClick={() => addBasket(content.id)}>
//                 { basket.indexOf(content.id) !== -1 ? "Удалить из корзины" : "В корзину" }
//             </div>
//         </div>
//     );
// };

const Last = ({product}) => {
    const { productsLastCount } = useSelector((state) => state.products)
    const dispatch = useDispatch()

    const limitIncrement = () => {
        dispatch(productsLastCountSuccess(6))
    }

    return (
        <div className='gray_bg'>
            <div className="container">
                <h2 className='text-center'>Последние поступления</h2>
                <div className={styles.best_card_wrapper}>
                    {
                        product.results ? product.results.map((item, idx) => {
                            return (
                                <div key={idx}>
                                    <BestCard new_is={item.is_new} content={item} />
                                </div>
                            )
                        }) : "Сейчас товаров под данной категорией нет"
                    }

                </div>
            </div>
            {product.count > productsLastCount ? <LoadMore click={() => limitIncrement()} /> : ""}
        </div>
    );
};

export default Last;
