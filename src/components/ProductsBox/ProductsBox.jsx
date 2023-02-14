import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../../api/firebase';
import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductsBox.module.css';

export default function ProductsBox() {
  const { data: products } = useQuery(['products'], () => getProducts());

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
