import React from 'react'

import styles from './partials/Button.module.css'

const Button = ({ theme= 'default', type = 'button', children }) => {
  return (
    <button 
        className={`${styles.wrapper} ${styles[theme]}`}
        type={type}>
            { children }
    </button>
  )
}

export default Button