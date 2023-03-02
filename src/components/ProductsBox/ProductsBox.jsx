import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import useProducts from '../../components/hooks/useProducts';
import styles from './ProductsBox.module.css';

export default function ProductsBox({ page = 'home' }) {
  const {
    productQuery: { isLoading, data: products },
  } = useProducts();

  const filteredProducts = !isLoading && getFilteredProducts(page, products);
  const hasProdcuts =
    filteredProducts && filteredProducts.length > 0 ? true : false;
  return (
    <div className={styles.products}>
      {page === 'new' && !isLoading && !hasProdcuts && (
        <p>10일 이내의 새로 등록된 상품이 없습니다.</p>
      )}
      <ul>
      {hasProdcuts &&
          filteredProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </ul>
    </div>
  );
}

function getFilteredProducts(page, products) {
  const now = Date.now();
  const displayTerm = 1000 * 60 * 60 * 24 * 10;

  if (page === 'home') return products;
  if (page === 'new') {
    return products.filter((product) => now - product.createdAt <= displayTerm);
  } else {
    return products.filter((product) => product.category === page);
  }
}
