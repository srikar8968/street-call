import React from 'react'
import _products from '../../_data/_products'
import ProductMini from '../ProductCard/partials/ProductMini'

import styles from './partials/CartPanel.module.css'

const CartPanel = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.cartHeader}>
            <svg aria-hidden="true" focusable="false" role="presentation" viewBox="0 0 64 64"><g fill="none" stroke="#000" strokeWidth="2"><path d="M25 26c0-15.79 3.57-20 8-20s8 4.21 8 20"></path><path d="M14.74 18h36.51l3.59 36.73h-43.7z"></path></g></svg>
            <span>Your Cart</span>
        </div>
        <div>
          { _products.length && _products.map(product => (
            <ProductMini product={product} key={product.id} />
          )) }
        </div>
    </div>
  )
}

export default CartPanel