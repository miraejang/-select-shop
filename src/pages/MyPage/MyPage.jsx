import React from 'react';
import { getLikeList } from '../../api/firebase';
import { useAuthContext } from '../../context/AuthContext';
import { useQuery } from '@tanstack/react-query';
import ProductsBox from '../../components/ProductsBox/ProductsBox';
import styles from './MyPage.module.css';

export default function MyPage() {
  const { user, uid } = useAuthContext();
  const { data: likeItems } = useQuery(['listList'], () => getLikeList(uid));
  const products = likeItems && Object.values(likeItems);

  return (
    <>
      <h2 className='pageTitle'>My Page</h2>
      <section className={`${styles.section} ${styles.info}`}>
        <div></div>
        <p>
          <span className={styles.name}>{user.displayName}</span>님 안녕하세요.
        </p>
      </section>
      <section className={styles.section}>
        <h3 className={styles.title}>My ❤ Items</h3>
        <ProductsBox products={products} />
      </section>
    </>
  );
}
