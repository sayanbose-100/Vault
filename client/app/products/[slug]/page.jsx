import ProductDetailsPage from "@/app/components/productDetailsPage/productDetailsPage";
import React from "react";

const ProductsPage = async ({ params }) => {
  const { slug } = await params;

  return (
    <>
      <ProductDetailsPage productid={slug} />
    </>
  );
};

export default ProductsPage;
