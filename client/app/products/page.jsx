"use client";
import ProductCard from "../components/productCard/productCard";
import styles from "./styles.module.css";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);
  const productsRef = useRef([]);

  // getting the products from the backend server (static assets) as a reponse object
  useEffect(() => {
    // Step 2: Fetch data when the component mounts
    const fetchProducts = async () => {
      try {
        console.log("URL: ",process.env.NEXT_PUBLIC_URL);
        const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/products`);
        const data = await response.json();
        setProducts(data); // setting the fetched data to the state variable

        // Step 3: Store the data in the ref (no re-render triggered)
        productsRef.current = data;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (products.length === 0 && productsRef.current > 0) {
      setProducts(productsRef.current);
    }
  }, [products]);

  return (
    <>
      <div className={styles.container}>
        {products.map((product) => (
          <li key={product._id} className={styles.listItems}>
            <Link
              href={`/products/${product._id}`}
              className={styles.productLink}
              style={{ display: 'block' }}
            >
              <ProductCard product={product} />
            </Link>
          </li>
        ))}
      </div>
    </>
  );
}
