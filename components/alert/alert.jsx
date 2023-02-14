import React from 'react';
import styles from './alert.module.css'

const Alert = (props) => {
    const handleToggle = () => {
        props.close({
            shown: false
        })
    }
    return (
        <div className={`${styles.container} ${props.type}`} role='alert'>
            <button className={styles.closeButton} onClick={handleToggle}><span aria-hidden>&times;</span></button>
            <p>
                {props.message}
            </p>


        </div>
    );
};

export default Alert;