import React, { useState } from "react";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "../styles/Home.module.css";
import ProductList from "../components/ProductList";

import _products from "../_data/_products";
import ProductDisplay from "../components/ProductCard/partials/ProductDisplay";

const Home = () => {
  return (
    <>
      <ProductDisplay />

      <ProductList instance="home" products={[..._products]} />
    </>
  );
};

export default Home;
