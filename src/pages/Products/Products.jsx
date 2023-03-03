import React from 'react';
import { useLocation } from 'react-router-dom';
import ProductsBox from '../../components/ProductsBox/ProductsBox';
import useProducts from '../../hooks/useProducts';
import styles from './Products.module.css';

export default function Products() {
  const { pathname } = useLocation();
  const page = pathname.replace(/^\//, '');
  const {
    productsQuery: { isLoading, data: products },
  } = useProducts();

  const filteredProducts = !isLoading && getFilteredProducts(page, products);
  const hasProdcuts =
    filteredProducts && filteredProducts.length > 0 ? true : false;
  return (
    <>
      <h2 className='pageTitle'>
        {pathname.replace(/^\//, '').toLocaleUpperCase()}
      </h2>
      <div className={styles.products}>
        {page === 'new' && !isLoading && !hasProdcuts && (
          <p>10일 이내의 새로 등록된 상품이 없습니다.</p>
        )}
        {!isLoading && hasProdcuts && (
          <ProductsBox products={filteredProducts} />
        )}
      </div>
    </>
  );
}

function getFilteredProducts(page, products) {
  const now = Date.now();
  const displayTerm = 1000 * 60 * 60 * 24 * 10;

  if (page === 'new') {
    return products.filter((product) => now - product.createdAt <= displayTerm);
  } else {
    return products.filter((product) => product.category === page);
  }
}
