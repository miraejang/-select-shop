import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import useProducts from '../../hooks/useProducts';
import styles from './ProductsManagement.module.css';

export default function ProductsManagement() {
  const {
    productsQuery: { isLoading, data: products },
    deleteProduct,
  } = useProducts();

  const handleDelete = (id) => {
    deleteProduct.mutate(id);
  };

  return (
    <>
      <h3 className={styles.title}>상품 관리</h3>
      {!isLoading && (
        <div>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>이미지</th>
                <th>등록일</th>
                <th>이름</th>
                <th>가격</th>
                <th>설명</th>
                <th>삭제</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => {
                const { id, image, createdAt, name, price, desc } = product;
                const createdDate = new Date(createdAt).toLocaleString('ko-KR');

                return (
                  <tr key={id}>
                    <td>
                      <img src={image} alt={name} className={styles.image} />
                    </td>
                    <td>{createdDate}</td>
                    <td>{name}</td>
                    <td>{price.toLocaleString()}</td>
                    <td>{desc}</td>
                    <td>
                      <button onClick={() => handleDelete(id)}>
                        <AiOutlineDelete />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
