import React from "react";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";
import styles from "./partials/ProductExpand.module.css";
import productStyles from "../../../../styles/Product.module.css";
import Button from "../../../base/Button";
import Color from "../../../ProductVariants/Color";

const ProductExpand = ({ product, onClose }) => {
  const { id, name, desc, category, variants, media } = product;

  return (
    <>
      <motion.div className={styles.modal}>
        <motion.div
          className={styles.modalContainer}
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
          </motion.div>

          <motion.div
            className={styles.detail}
            layoutId={`productexpand-meta-${id}`}
          >
            <motion.h3
              className={styles.title}
              layoutId={`productexpand-title-${id}`}
            >
              {name}
            </motion.h3>
            <motion.span
              className={styles.category}
              layoutId={`productexpand-category-${id}`}
            >
              {category}
            </motion.span>
            <Color size="sm" colors={product.variants.color} />
            <motion.span
              className={styles.price}
              layoutId={`productexpand-price-${id}`}
            >
              $189.00
            </motion.span>

            <div className={styles.desc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              lobortis mi id quam gravida, sed commodo tortor rutrum. Integer
              non nisl ut arcu lobortis maximus sit amet non purus. Maecenas
              laoreet imperdiet consequat. Ut eget feugiat lacus, at convallis
              nulla. Quisque auctor varius tellus a maximus. Morbi luctus lectus
              id efficitur sollicitudin. Aenean tempor venenatis sagittis...
            </div>
            <div className={styles.desc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              lobortis mi id quam gravida, sed commodo tortor rutrum. Integer
              non nisl ut arcu lobortis maximus sit amet non purus. Maecenas
              laoreet imperdiet consequat. Ut eget feugiat lacus, at convallis
              nulla. Quisque auctor varius tellus a maximus. Morbi luctus lectus
              id efficitur sollicitudin. Aenean tempor venenatis sagittis...
            </div>
            <motion.div className={productStyles.actionContainer}>
              <Button theme="primaryOutline">Add to Cart</Button>
              <Button theme="primary">Buy Now</Button>
            </motion.div>
            <motion.button onClick={onClose} className={styles.close} />
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.button
        variants={{
          hidden: {
            opacity: 0,
            transition: {
              duration: 0.16,
            },
          },
          visible: {
            opacity: 1,
            transition: {
              delay: 0.04,
              duration: 0.2,
            },
          },
        }}
        initial="hidden"
        exit="hidden"
        animate="visible"
        onClick={onClose}
        className={styles.backdrop}
      />
    </>
  );
};

export default ProductExpand;
