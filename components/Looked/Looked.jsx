import React from 'react';
import styles from './Looked.module.css';

import Image from 'next/image';
import LoadMore from '../LoadMore/LoadMore';

const BestCard = (props) => {
    return (
        <div className={styles.best_card}>
            <div className={styles.image_wrapper}>
                <Image
                    src='/kreslo.png'
                    alt='sofa img'
                    width={154}
                    height={156}
                />
            </div>
            <div className={styles.line}></div>
            <div className={styles.best_center}>
                <div className={styles.best_card_name}>Кресло Swoon</div>
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

const Look = () => {
    return (
        <div className='gray_bg'>
            <div className={styles.best_container}>
                <h2>Вы недавно смотрели</h2>
                <div className={styles.best_card_wrapper}>
                    <BestCard />
                    <BestCard />
                    <BestCard />
                    <BestCard />
                </div>
            </div>
            <LoadMore />
        </div>
    );
};

export default Look;
