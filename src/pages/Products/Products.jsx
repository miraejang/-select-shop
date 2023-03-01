import React from 'react';
import { useLocation } from 'react-router-dom';
import { getProducts } from '../../api/firebase';
import { useQuery } from '@tanstack/react-query';
import ProductsBox from '../../components/ProductsBox/ProductsBox';
import styles from './Products.module.css';

export default function Products() {
  const { pathname } = useLocation();
  const page = pathname.replace(/^\//, '');
  const { data: products } = useQuery(['products'], () => getProducts());

  const filteredProducts = products && getFilteredProducts(page, products);
  const hasProdcuts =
    filteredProducts && filteredProducts.length > 0 ? true : false;
  return (
    <>
      <h2 className='pageTitle'>
        {pathname.replace(/^\//, '').toLocaleUpperCase()}
      </h2>
      <div className={styles.products}>
        {page === 'new' && !hasProdcuts && (
          <p>10일 이내의 새로 등록된 상품이 없습니다.</p>
        )}
        {hasProdcuts && <ProductsBox products={filteredProducts} />}
      </div>
    </>
  );
}

function getFilteredProducts(page, products) {
  const now = Date.now();
  const displayTerm = 1000 * 60 * 60 * 24 * 10;

  if (page === 'new') {
    return products.filter((product) => now - product.createAt <= displayTerm);
  } else {
    return products.filter((product) => product.category === page);
  }
}
