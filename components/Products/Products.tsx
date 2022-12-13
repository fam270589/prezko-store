import React from 'react';
import styles from "./Products.module.css";
import ProductCard from './ProductCard';
import { products } from "../../public/assets/products";

type Props = {
  children?: React.ReactNode;
  // props....
};

//todo:-----Products component-----://
const Products = (props: Props) => {
  return (
    <div className={styles.container}>
      {products.map((product) => (
        <ProductCard
          key={product.name}
          image={product.image}
          type={product.type}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
}

export default Products;
