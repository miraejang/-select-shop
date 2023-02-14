import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
  const { id, image, name, price, desc } = product;

  return (
    <li>
      <Link to={`/products/${id}`} state={{ product }}>
        <img className={styles.image} src={image} alt='' />
        <div className={styles.info}>
          <p className={styles.name}>{name}</p>
          <p className={styles.desc}>{desc}</p>
          <p className={styles.price}>{price.toLocaleString()}</p>
        </div>
      </Link>
    </li>
  );
}
