import React from "react";
import { Link } from "react-router-dom";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";
import styles from "./partials/ProductCard.module.css";
import Color from "../ProductVariants/Color";

const productCard = {
  hidden: { y: 30, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

const ProductCard = ({ product, onSelected }) => {
  const { id, name, desc, category, variants, media } = product;

  return (
    <motion.div
      className={styles.wrapper}
      variants={productCard}
      layoutId={`productexpand-${id}`}
    >
      <motion.div
        className={styles.cover}
        layoutId={`productexpand-cover-${id}`}
      >
        <motion.img
          src={`/images/product/${media.cover}`}
          alt={name}
          layoutId={`productexpand-img-${id}`}
        />
        <motion.button className={styles.expand} onClick={onSelected} />
        <motion.button className={styles.colorVariant}>
          <Color colors={variants.color} size="sm" />
        </motion.button>
      </motion.div>
      <motion.div className={styles.meta} layoutId={`productexpand-meta-${id}`}>
        <Link to={`/product/${id}`}>
          <motion.h3
            className={styles.title}
            layoutId={`productexpand-title-${id}`}
          >
            {name}
          </motion.h3>
        </Link>
        <Link to="/">
          <motion.span
            className={styles.category}
            layoutId={`productexpand-category-${id}`}
          >
            {category}
          </motion.span>
        </Link>
        <motion.span
          className={styles.price}
          layoutId={`productexpand-price-${id}`}
        >
          $189.00
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default ProductCard;
