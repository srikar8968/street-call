import React, { useState } from "react";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";
import ProductCard from "../ProductCard";
import ProductExpand from "../ProductCard/partials/ProductExpand";
import styles from "./partials/ProductList.module.css";

const productList = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const ProductList = ({ instance, products, title }) => {
  const [selectedProduct, setSelectedProduct] = useState(false);

  const onProductExpand = (product) => setSelectedProduct(product);

  return (
    <div className={styles.wrapper}>
      <LayoutGroup id={instance}>
        <div className="container">
          {title && <h3 className={styles.title}>{title}</h3>}
          <motion.div
            variants={productList}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.5 }}
            className={styles.listWrapper}
          >
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelected={() => onProductExpand(product)}
              />
            ))}
          </motion.div>
        </div>

        <AnimatePresence>
          {selectedProduct !== false && (
            <ProductExpand
              product={selectedProduct}
              onClose={() => setSelectedProduct(false)}
            />
          )}
        </AnimatePresence>
      </LayoutGroup>
    </div>
  );
};

export default ProductList;
