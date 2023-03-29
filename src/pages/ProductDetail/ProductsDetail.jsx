import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import { BsSuitHeartFill, BsSuitHeart } from 'react-icons/bs';
import Button from '../../ui/button/Button';
import styles from './ProductsDetail.module.css';
import useLikeList from '../../hooks/useLikeList';
import ModalMessage from '../../components/ModalMessage/ModalMessage';
import Modal from '../../components/Modal/Modal';

export default function ProductsDetail() {
  const {
    state: {
      product,
      product: { id, image, name, price, desc, options },
    },
  } = useLocation();
  const [selected, setSelected] = useState();
  const {
    cartQuery: { data: cartItems },
    addOrUpdateItem,
  } = useCart();
  const {
    likeItemsQuery: { data: likeItems },
    addLikeItem,
    removeLikeItem,
  } = useLikeList();
  const [like, setLike] = useState();
  const [modelMessage, setModaleMessage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    likeItems && setLike(Object.keys(likeItems).includes(id));
  }, [likeItems, id]);

  const handleBuyNow = () => {
    if (options && !selected) {
      setModaleMessage('옵션을 선택해 주세요.');
    } else {
      const item = { ...product, quantity: 1, option: selected };
      navigate('/order', { state: [item] });
    }
  };
  const handleAddCart = () => {
    if (options && !selected) {
      setModaleMessage('옵션을 선택해 주세요.');
    } else {
      if (!cartItems[id]) {
        addOrUpdateItem.mutate({
          ...product,
          option: selected || null,
          quantity: 1,
        });
      } else {
        setModaleMessage('장바구니에 같은 상품이 있습니다.');
      }
    }
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
        <div className={styles.btnBox}>
          <Button onClick={handleAddCart}>Add to Cart</Button>
          <Button onClick={handleBuyNow}>Buy Now</Button>
          <button onClick={handleLikeList} className={styles.likeBtn}>
            {!like && <BsSuitHeart />}
            {like && <BsSuitHeartFill style={{ color: 'red' }} />}
          </button>
        </div>
      </div>
      {modelMessage && (
        <Modal>
          <ModalMessage
            message={modelMessage}
            onClose={() => {
              setModaleMessage(null);
            }}
          />
        </Modal>
      )}
    </div>
  );
}
