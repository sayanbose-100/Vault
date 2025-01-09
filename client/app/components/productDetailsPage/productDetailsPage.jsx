"use client";
import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import BuyNowButton from "../buttons/buy";
import AddToCartButton from "../buttons/addCart";
import { useState, useRef, useEffect } from "react";

const ProductDetailsPage = ({ productid }) => {

  // Fetch product details using the id
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const productRef = useRef({});

  useEffect(() => {
    setLoading(true);
    (async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/products/${productid}`
      );
      console.log(response);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        const data = await response.json();
        setProduct(data);
        productRef.current = data;
      }
      setLoading(false);
    })();
  }, [productid]);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.productImageContainer}>
          {product.image && (
            <Image
              className={styles.productImage}
              src={product.image}
              alt="Product Image"
              width={680}
              height={540}
              priority
              quality={100}
            />
          )}
        </div>
        <div className={styles.productDetails}>
          <div className={styles.productTitle}>
            <p>{product.name}</p>
            <p>Marks and Spencer</p>
          </div>
          <div className={styles.productMeta}>
            <p>${product.price}</p>
            <p>Available</p>
          </div>
          <div className={styles.purchaseButtons}>
            <BuyNowButton />
            <AddToCartButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsPage;
