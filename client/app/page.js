import styles from "./page.module.css";
import Link from "next/link";
import Products from "./products/page";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Products />
      </div>
    </>
  );
}
