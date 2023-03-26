import React from 'react';
import { FcShop, FcLike } from 'react-icons/fc';
import styles from './Loading.module.css';

export default function Loading() {
  return (
    <>
      <div className={styles.loading}>
        <p className={styles.text}>Loading ... </p>
        <FcLike className={styles.loadingIcon} />
        <FcShop className={styles.shopIcon} />
      </div>
    </>
  );
}
