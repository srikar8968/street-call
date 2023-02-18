import React from 'react'
import { motion } from 'framer-motion'

import styles from './partials/ProductMini.module.css'

const ProductMini = ({ product }) => {
  const { id, name, desc, category, variants, media } = product;

  return (
    <div className={styles.wrapper}>
        <div className={styles.productThumb}>
            <img 
                src={`/images/product/${media.cover}`} 
                alt={name} 
                layoutId={`productexpand-img-${id}`} />
        </div>
        <div className={styles.productContent}>
            <h5>{ name }</h5>
        </div>
    </div>
  )
}

export default ProductMini