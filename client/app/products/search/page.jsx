"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import ProductCard from "../../components/productCard/productCard.jsx";
import Link from "next/link";
import styles from "./styles.module.css";

const SearchResultPage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  console.log(query);
  const [products, setProducts] = useState([]);
  const productsRef = useRef([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/products?search=${query}`
        );
        const data = await response.json();
        setProducts(data); // setting the fetched data to the state variable

        // Step 3: Store the data in the ref (no re-render triggered)
        productsRef.current = data;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [query]);

  useEffect(() => {
    if (products.length === 0 && productsRef.current > 0) {
      setProducts(productsRef.current);
    }
  }, [products]);

  return (
    <>
      <div className={styles.container}>
        {products.length > 0 ? (
          products.map((product) => (
            <li key={product._id} className={styles.listItems}>
              <Link
                href={`/products/${product._id}`}
                className={styles.productLink}
              >
                <ProductCard key={product._id} product={product} />
              </Link>
            </li>
          ))
        ) : (
          <h1>No products found for {query}</h1>
        )}
      </div>
    </>
  );
};

export default SearchResultPage;
