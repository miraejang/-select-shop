import React, { useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import useCart from '../../hooks/useCart';
import Checkbox from '../../ui/Checkbox/Checkbox';
import styles from './CartItem.module.css';

export default function CartItem({
  item,
  item: { id, name, image, options, option, price, quantity },
  checkedState,
  onChecked,
}) {
  const { addOrUpdateItem, removeItem } = useCart();
  const [selected, setSelected] = useState();

  const handleOptionChange = (e) => {
    setSelected(e.target.value);
  };
  const handleOption = () => {
    if (!selected) return;
    addOrUpdateItem.mutate({ ...item, option: selected });
    setSelected();
  };
  const handleQuantity = (e) => {
    addOrUpdateItem.mutate({
      ...item,
      quantity: parseInt(e.target.value, 10),
    });
  };
  const handleAdd = () => {
    addOrUpdateItem.mutate({ ...item, quantity: quantity + 1 });
  };
  const handleMinus = () => {
    if (quantity < 2) return;
    addOrUpdateItem.mutate({ ...item, quantity: quantity - 1 });
  };
  const handleDelete = () => {
    removeItem.mutate(id);
  };

  return (
    <tr className={styles.row}>
      <td>
        <Checkbox
          checked={checkedState}
          onChange={(e) => onChecked({ [id]: e.target.checked })}
        />
      </td>
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
                onChange={handleOptionChange}
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
        <button onClick={handleMinus} disabled={quantity < 2 && true}>
          -
        </button>
        <input
          value={quantity}
          onChange={handleQuantity}
          type='number'
          name='quantity'
        />
        <button onClick={handleAdd}>+</button>
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
