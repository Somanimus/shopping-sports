import React from "react";
import styles from "./catalog.module.css";

import Image from "next/image";
import Link from "next/link";

const BestCard = ({ content }) => {
    return (
        <div className={styles.best_card}>
            <div className={styles.image_wrapper}>
                <Image
                    loader={() => content.image}
                    src={content.image}
                    alt=""
                    width={154}
                    height={156}
                    objectFit="cover"
                    unoptimized
                />
            </div>
            <div className={styles.line}/>
            <div className={styles.best_center}>
                <div className={styles.best_card_name}>{content.name}</div>
                {/* <div className={styles.best_card_descr}>
                    Рыбатекст используется дизайнерами, проектировщиками и
                    фронтендерами, когда нужно быстро заполнить макеты...
                </div> */}
                {/* <div className={styles.best_card_price}>15 040 сом</div> */}
            </div>
            <div className={styles.best_card_btn}>В корзину</div>
        </div>
    );
};
const Divan = (props) => {
    return (
        <div className={styles.best_card}>
            <div className={styles.image_wrapper}>
                <Image
                    src="/kreslo.png"
                    alt="sofa img"
                    width={154}
                    height={156}
                />
            </div>
            <div className={styles.line}/>
            <div className={styles.best_center}>
                <div className={styles.best_card_name}>Диван</div>
                <div className={styles.best_card_descr}>
                    Рыбатекст используется дизайнерами, проектировщиками и
                    фронтендерами, когда нужно быстро заполнить макеты...
                </div>
                <div className={styles.best_card_price}>15 040 сом</div>
            </div>
            <div className={styles.best_card_btn}>В корзину</div>
        </div>
    );
};

const Catalog = ({ categories }) => {
    console.log(categories)
    return (
        <div className="gray_bg">
            <div className={styles.best_container}>
                <h2>Вид мебели</h2>
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
                                        <BestCard content={item} />
                                    </a>
                                </Link>
                            );
                        }) : "Пока что нуту видов мебели"
                    }
                </div>
            </div>
            <div className={styles.best_container}>
                <h2>Диван</h2>
                <div className={styles.best_card_wrapper}>
                    <Divan />
                    <Divan />
                    <Divan />
                    <Divan />
                    <Divan />
                    <Divan />
                    <Divan />
                    <Divan />
                </div>
            </div>
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
