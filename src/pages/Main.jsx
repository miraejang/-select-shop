import React from 'react';
import ProductsBox from '../components/ProductsBox/ProductsBox';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../api/firebase';

export default function Main() {
  const { isLoading, data: products } = useQuery(['products'], () =>
    getProducts()
  );

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {!isLoading && <ProductsBox products={products} />}
    </>
  );
}
