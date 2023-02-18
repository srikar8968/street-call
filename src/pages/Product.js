import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";

import _products from "../_data/_products";

import styles from "../styles/Product.module.css";
import Button from "../components/base/Button";
import Color from "../components/ProductVariants/Color";
import ProductList from "../components/ProductList";

const effects = {
  slides: {
    hidden: { y: -280, opacity: 0.75 },
    show: {
      y: 0,
      opacity: 1,
      transition: { staggerChildren: 0.5, duration: 1 },
    },
  },
  slide: {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  },
};

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [slides, setSlides] = useState([]);
  const [colorVariant, setColorVariant] = useState();

  // const counter = useSelector(state => state.counter)
  // const dispatch = useDispatch();

  useEffect(() => {
    let _productItem = _products.find((product) => product.id === +id) || null;
    setProduct(_productItem);

    let _slides = _productItem
      ? _productItem.media.images.find((slide) => slide.variant === "color")
      : [];
    setSlides(_slides);

    setColorVariant(_productItem.variants.color[0].display);
  }, []);

  const handleVariantChange = (color) => {
    let _slides =
      product.media.images.find((slide) => slide.value === color) || null;
    setColorVariant(color);

    if (_slides) setSlides(_slides);
  };

  return (
    product && (
      <>
        <div className={styles.wrapper}>
          <motion.div
            variants={effects.slides}
            initial="hidden"
            animate="show"
            className={styles.slides}
          >
            {slides.list.length &&
              slides.list?.map((image) => (
                <motion.div
                  variants={effects.slide}
                  initial="hidden"
                  animate="show"
                  key={image}
                  className={styles.slide}
                >
                  <img
                    src={`/images/product-mocks/${image}`}
                    alt={`${product.name} ${image}`}
                  />
                </motion.div>
              ))}
          </motion.div>
          <div className={styles.detail}>
            <div className={styles.detailInner}>
              <Link className={styles.category} to={`/`}>
                {product.category}
              </Link>
              <h1>{product.name}</h1>
              <div className="flex items-center">
                <span className={styles.price}>$299</span>
                <span
                  className={`${styles.inventoryBadge} ${
                    !product.inventory && styles.inventoryEmpty
                  }`}
                >
                  {product.inventory ? "In Stock" : "Out of Stock"}
                </span>
              </div>
              <Color
                colors={product.variants.color}
                active={colorVariant}
                onColorChange={(_color) => handleVariantChange(_color)}
              />
              <div className={styles.actionContainer}>
                <Button theme="primaryOutline">Add to Cart</Button>
                <Button theme="light">Buy Now</Button>
              </div>
              <p>
                <b>DESCRIPTION</b>
                <br />
                Handy and compact this is the Swiss army knife of key pouches.
                It stacks up to 8 keys connected with two screws. Flap closed,
                neatly stacked, extremely compact, and most importantly without
                jiggling.
                <br />
                <br />
                • Measures 10 x 3.5 x 1 cm (4” x 1.4” x 0.4”) • Dimension of
                keys in photo: 5.5 x 2.5 cm (2.1” x 1”) • Fits around 8 keys
                <br />
                <br />
                WHAT SETS IT APART The Utility Key Pouch holds up to 8 keys
                which are held in place by two metal screws that can be
                loosened, depending on the number of keys inside. Made in Italy.
                <br />
                <br />
                VEGAN LEATHER ALTERNATIVE Our unique classic brown Vegan leather
                alternative was developed in the lab, to sit alongside the
                colours in the existing hardgraft collection. Made from
                renewable plant-based biomass, an innovative raw material. It
                bio-degrades over a human lifetime, significantly reducing the
                use of natural resources for future generations. Embossed with
                the famous Italian ‘Saffiano’ cross-hatch that gives the
                material a high-end finish and luxury texture.
              </p>
            </div>
          </div>
        </div>
        <ProductList
          instance="relatedProducts"
          title="Browse Similar"
          products={[..._products]}
        />
      </>
    )
  );
};

export default Product;
