import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import ProductsBox from '../../components/ProductsBox/ProductsBox';
import styles from './Products.module.css';

export default function Products() {
  const { pathname } = useLocation();

  return (
    <section className={styles.products}>
      <div className={styles.title}>
        <h2>{pathname.replace(/^\//, '').toLocaleUpperCase()}</h2>
      </div>
      <div className={styles.productsBox}>
        <ProductsBox />
      </div>
    </section>
  );
}
