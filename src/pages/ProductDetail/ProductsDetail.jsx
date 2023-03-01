import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useCart from '../../components/hooks/useCart';
import { BsSuitHeartFill, BsSuitHeart } from 'react-icons/bs';
import Button from '../../ui/button/Button';
import styles from './ProductsDetail.module.css';
import useLikeList from '../../components/hooks/useLikeList';

export default function ProductsDetail() {
  const {
    state: {
      product,
      product: { id, image, name, price, desc, options },
    },
  } = useLocation();
  const [selected, setSelected] = useState();
  const { addOrUpdateItem } = useCart();
  const {
    likeItemsQuery: { data: likeItems },
    addLikeItem,
    removeLikeItem,
  } = useLikeList();
  const [like, setLike] = useState();

  useEffect(() => {
    likeItems && setLike(Object.keys(likeItems).includes(id));
  }, [likeItems]);

  const handleAddCart = () => {
    if (selected === null) return;
    addOrUpdateItem.mutate({
      ...product,
      option: selected || null,
      quantity: 1,
    });
  };
  const handleChange = (e) => {
    setSelected(e.target.value);
  };
  const handleLikeList = () => {
    if (like) {
      removeLikeItem.mutate(id);
    } else {
      addLikeItem.mutate({ ...product });
    }
  };

  return (
    <div className={styles.detail}>
      <img src={image} alt={name} />
      <div className={styles.info}>
        <h2 className={styles.name}>{name}</h2>
        <h3 className={styles.desc}>{desc}</h3>
        <p className={styles.price}>{price.toLocaleString()}</p>
        {options && (
          <div>
            <select
              value={selected || options['null']}
              onChange={handleChange}
              className={styles.options}
              id='options'
            >
              <option value='null' disabled={selected && true}>
                선택해 주세요.
              </option>
              {options.split(',').map((option) => {
                const optionText = option.trim();
                return (
                  <option value={optionText} key={optionText}>
                    {optionText}
                  </option>
                );
              })}
            </select>
          </div>
        )}
        <Button onClick={handleAddCart}>Add Cart</Button>
        <button onClick={handleLikeList} className={styles.likeBtn}>
          {!like && <BsSuitHeart />}
          {like && <BsSuitHeartFill style={{ color: 'red' }} />}
        </button>
      </div>
    </div>
  );
}
