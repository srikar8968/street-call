import React from "react";
import styles from "./partials/ProductDisplay.module.css";
import productStyles from "../../../../styles/Product.module.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const productDisplayWrapper = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.5 } },
};
const productCover = {
  hidden: { x: 80, opacity: 0 },
  show: { x: 0, opacity: 1 },
};
const productDetail = {
  hidden: { x: -80, opacity: 0 },
  show: { x: 0, opacity: 1 },
};

const ProductDisplay = () => {
  return (
    <motion.div className="container">
      <motion.div
        variants={productDisplayWrapper}
        initial="hidden"
        animate="show"
        className={styles.wrapper}
      >
        <motion.div variants={productDetail} className={styles.detail}>
          <span className={productStyles.category}>KLATZ + KE</span>
          <h1>Checker Board Scarf Black</h1>
          <Link to="/">[View More]</Link>
        </motion.div>
        <motion.div
          variants={productCover}
          className={styles.cover}
        ></motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProductDisplay;
