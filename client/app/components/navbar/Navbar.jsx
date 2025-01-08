"use client";
import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
const Navbar = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(query);
    router.push(`/products/search?query=${query}`);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className="brand">
          <Link className={styles.brandName} href="/">
            VAULT
          </Link>
        </div>
        <div className={styles.filterOptionsContainer}>
          <div className={styles.filterOptions}>
            <Link href="/products/men" className={styles.filterLinks}>
              Men
            </Link>
            <Link href="/products/women" className={styles.filterLinks}>
              Women
            </Link>
            <Link href="/products" className={styles.filterLinks}>
              Show All Products
            </Link>
          </div>
        </div>
        <div className={styles.searchItems}>
          <div className={styles.searchBar}>
            <form>
              <input
                type="search"
                placeholder="product name or category"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSubmit(e);
                  }
                }}
              />
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
