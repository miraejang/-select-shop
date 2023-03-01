import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductsBox.module.css';

export default function ProductsBox({ products }) {
  return (
    <div className={styles.products}>
      <ul>
        {products &&
          products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </ul>
    </div>
  );
}
