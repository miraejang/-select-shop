import React, { useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import useCart from '../hooks/useCart';
import styles from './CartItem.module.css';

export default function CartItem({
  product,
  product: { id, name, image, options, option, price, quantity },
}) {
  const { addOrUpdateItem, removeItem } = useCart();
  const [selected, setSelected] = useState();

  const handleChange = (e) => {
    setSelected(e.target.value);
  };
  const handleOption = () => {
    if (!selected) return;
    addOrUpdateItem.mutate({ ...product, option: selected });
    setSelected();
  };
  const handleQuantity = (e) => {
    addOrUpdateItem.mutate({
      ...product,
      quantity: parseInt(e.target.value, 10),
    });
  };
  const handleAdd = () => {
    addOrUpdateItem.mutate({ ...product, quantity: quantity + 1 });
  };
  const handleMinus = () => {
    if (quantity < 2) return;
    addOrUpdateItem.mutate({ ...product, quantity: quantity - 1 });
  };
  const handleDelete = () => {
    removeItem.mutate(id);
  };

  return (
    <tr className={styles.row}>
      <td className={styles.product}>
        <div className={styles.image}>
          <img src={image} alt={name} />
        </div>
        <div className={styles.details}>
          <p className={styles.name}>{name}</p>
          {option && (
            <>
              <p className={styles.option}>옵션 : {option}</p>
              <select
                value={selected || 'null'}
                onChange={handleChange}
                name='options'
              >
                <option value='null'>옵션변경</option>
                {options.split(',').map((option) => {
                  const optionText = option.trim();
                  return (
                    <option value={optionText} key={optionText}>
                      {optionText}
                    </option>
                  );
                })}
              </select>
              <button onClick={handleOption}>변경</button>
            </>
          )}
        </div>
      </td>
      <td className={styles.price}>{price.toLocaleString()}</td>
      <td className={styles.quantity}>
        <input
          value={quantity}
          onChange={handleQuantity}
          type='number'
          name='quantity'
        />
        <button onClick={handleAdd}>+</button>
        <button onClick={handleMinus} disabled={quantity < 2 && true}>
          -
        </button>
      </td>
      <td className={styles.totalPrice}>
        {(price * quantity).toLocaleString()}
      </td>
      <td className={styles.delete}>
        <button onClick={handleDelete}>
          <AiOutlineDelete />
        </button>
      </td>
    </tr>
  );
}
