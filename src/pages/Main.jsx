import React from 'react';
import Loading from '../components/Loading/Loading';
import ProductsBox from '../components/ProductsBox/ProductsBox';
import useProducts from '../hooks/useProducts';

export default function Main() {
  const {
    productsQuery: { isLoading, data: products },
  } = useProducts();

  if (isLoading) return <Loading />;
  return <ProductsBox products={products} />;
}
