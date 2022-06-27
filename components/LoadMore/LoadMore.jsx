import React from 'react';
import styles from './LoadMore.module.css';

const LoadMore = ({ click = () => {} }) => {
    return (
        <div className={styles.more_wrapper}>
            <div className={styles.more} onClick={click}>Смотреть еще</div>
        </div>
    );
};

export default LoadMore;
