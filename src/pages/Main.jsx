import React from 'react';
import ProductsBox from '../components/ProductsBox/ProductsBox';
import useProducts from '../hooks/useProducts';

export default function Main() {
  const {
    productsQuery: { isLoading, data: products },
  } = useProducts();

  return <>{!isLoading && <ProductsBox products={products} />}</>;
}
