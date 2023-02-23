import React from 'react';

import styles from './Button.module.css'

const Button = ({onClick, children, title, disable= false}) => {
    return (
        <button
            className={styles.button}
            onClick={onClick}
            title={title}
            disabled={disable}
        >
            {children}
        </button>
    );
};

export default Button;