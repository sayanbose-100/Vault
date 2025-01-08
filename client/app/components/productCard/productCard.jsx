'use client';
import React from "react";
import styles from "./productCard.module.css";
import Image from "next/image";
// import productImage from "../../../public/images/img.jpg"

const ProductCard = ({product}) => {
  const { image, name, price, category:{gender, type} } = product;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.productImageContainer}>
          <Image className={styles.productImage}
            src={image}
            alt="product image"
            width={680}
            height={540}
          />
        </div>
        <div className={styles.productDetails}>
          <p>{name}</p>
          <p>${price}</p>
        </div>
        <div className={styles.productMetaData}>
          <p className={styles.gender}>{gender}</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
