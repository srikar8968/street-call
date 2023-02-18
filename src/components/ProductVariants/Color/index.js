import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import styles from "./partials/Color.module.css";

const Color = ({ colors, active, size, onColorChange = () => null }) => {
  return (
    <div className={styles.wrapper}>
      {colors.length &&
        colors.map((color, index) => (
          <button
            style={{ backgroundColor: color.value }}
            className={styles.colorItem}
            data-size={size || "md"}
            onClick={() => onColorChange(color.display)}
            key={index}
          >
            {color.display === active ? (
              <motion.div
                dataVariant={color.display}
                layoutId="colorSelected"
                className={styles.colorSelected}
              ></motion.div>
            ) : null}
          </button>
        ))}
    </div>
  );
};

export default Color;
