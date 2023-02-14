import React from 'react';
import { useLocation } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import Button from '../../ui/button/Button';
import styles from './ProductsDetail.module.css';

export default function ProductsDetail() {
  const {
    state: {
      product: { id, image, name, price, desc, options },
    },
  } = useLocation();

  return (
    <div className={styles.detail}>
      <img src={image} alt={name} />
      <div className={styles.info}>
        <h2 className={styles.name}>{name}</h2>
        <h3 className={styles.desc}>{desc}</h3>
        <p className={styles.price}>{price.toLocaleString()}</p>
        {options && (
          <div>
            <select className={styles.options} id='options'>
              {options.split(',').map((option) => {
                const optionText = option.trim();
                return <option value={optionText}>{optionText}</option>;
              })}
            </select>
          </div>
        )}
        <Button>Add Cart</Button>
      </div>
    </div>
  );
}
