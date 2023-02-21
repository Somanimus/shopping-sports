import React, { useEffect } from "react";
import styles from "./catalog.module.css";

import Image from "next/image";
import Link from "next/link";
import Last from "../Last/Last";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/action/productsAction";

export const BestCardCatalog = ({ content }) => {
    console.log(content)
    return (
        <div className={styles.best_card}>
            <div className={styles.image_wrapper}>
                <Image
                    loader={() => content.image}
                    src={content?.image ? content?.image : "/barbell.jpg"}
                    alt={`${content.name}`}
                    width={154}
                    height={156}
                    objectFit="cover"
                    unoptimized
                />
            </div>
            <div className={styles.line}/>
            <div className={styles.best_center}>
                <div className={styles.best_card_name}>{content.name}</div>
            </div>
            <div className={styles.best_card_btn}>подробнее</div>
        </div>
    );
};

const Catalog = ({ categories }) => {
    
    const { products, productsLastCount } = useSelector((state) => state.products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts(false, false, productsLastCount))
    }, [productsLastCount, dispatch])

    console.log(categories)

    return (
        <div className="gray_bg">
            <div className="container full_screen">
                <h2>Виды спорта</h2>
                <div className={styles.best_card_wrapper}>
                    {
                        categories.length ? categories.map((item, idx) => {
                            return (
                                <Link
                                    key={idx}
                                    href={`catalog/[category]`}
                                    as={`catalog/${item.id}`}
                                >
                                    <a>
                                        <BestCardCatalog content={item} />
                                    </a>
                                </Link>
                            );
                        }) : "На данный момент новых товаров нет"
                    }
                </div>
            </div>
            <Last product={products} />
        </div>
    );
};
// const Divan = () => {
//     return (
//         <div className='gray_bg'>
//             <div className={styles.best_container}>
//                 <h2>Диван</h2>
//                 <div className={styles.best_card_wrapper}>
//                     <Divan/>
//                 </div>
//             </div>
//         </div>
//     );
// };

export default Catalog;

// const Catalog = () => {
//     return (
//         <section className={styles.catalog}>
//             <div className={styles.catalog__container}>
//                 <h1 className={styles.catalog__title}>Вид мебели</h1>

//             </div>
//         </section>
//     );
// };

// export default Catalog;
