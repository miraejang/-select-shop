import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import CartItem from '../../components/CartItem/CartItem';
import styles from './Cart.module.css';
import Checkbox from '../../ui/Checkbox/Checkbox';

const SHIPPING = 3000;
const FREE_SHIPPING = 70000;

export default function Cart() {
  const {
    cartQuery: { isLoading: isCartLoading, data: items },
  } = useCart();
  const [totalPrice, setTotalPrice] = useState();
  const [checkedStates, setCheckedStates] = useState();
  const [allSelected, setAllSlected] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const obj = {};
    if (items) {
      Object.values(items).map((item) => (obj[item.id] = false));
    }
    setCheckedStates(obj);
  }, [items]);

  useEffect(() => {
    if (items) {
      const price = Object.values(items).reduce(
        (total, item) => (total += item.price * item.quantity),
        0
      );
      setTotalPrice(price);
    }
  }, [items]);

  useEffect(() => {
    if (checkedStates && totalPrice) {
      setIsLoading(false);
    }
  }, [checkedStates, totalPrice]);

  const handleChecked = (updated) => {
    setCheckedStates((prev) => ({ ...prev, ...updated }));
  };
  const handleSelectedOrder = () => {
    const checked = Object.keys(checkedStates).filter(
      (key) => checkedStates[key] === true
    );
    const list = [];
    checked.map((id) => list.push(items[id]));

    if (list.length > 0) {
      navigate('/order', { state: { list } });
    }
  };
  const handleAllOrder = () => {
    navigate('/order', { state: items });
  };

  if (isCartLoading || isLoading) return <p>Loading...</p>;
  return (
    <>
      <h2 className='pageTitle'>Cart</h2>
      <div className={styles.container}>
        <div className={styles.cart}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>
                  <Checkbox
                    id='all'
                    checked={allSelected}
                    onChange={() => setAllSlected((prev) => !prev)}
                  />
                </th>
                <th>상품정보</th>
                <th>가격</th>
                <th>수량</th>
                <th>상품금액</th>
                <th>삭제</th>
              </tr>
            </thead>
            <tbody>
              {!items && (
                <tr>
                  <td colSpan={4}>아이템이 없습니다.</td>
                </tr>
              )}
              {items &&
                Object.values(items).map((item) => (
                  <CartItem
                    item={item}
                    checkedState={checkedStates[item.id]}
                    onChecked={handleChecked}
                    key={item.id}
                  />
                ))}
            </tbody>
          </table>
        </div>
        <div className={styles.payment}>
          <div className={styles.paymentContainer}>
            <p className={styles.title}>주문 금액</p>
            <div className={styles.priceBox}>
              <p>
                <span className={styles.lightText}>총 상품 금액</span>
                <span>{totalPrice.toLocaleString()} 원</span>
              </p>
              <p>
                <span className={styles.lightText}>배송비</span>
                <span>
                  + {totalPrice < FREE_SHIPPING ? SHIPPING.toLocaleString() : 0}{' '}
                  원
                </span>
              </p>
              <div className={styles.total}>
                <p>
                  <span className={styles.lightText}>총 결제금액</span>
                  <span>{(totalPrice + SHIPPING).toLocaleString()} 원</span>
                </p>
              </div>
            </div>
            <div className={styles.btnBox}>
              <button onClick={handleSelectedOrder}>선택상품 주문하기</button>
              <button onClick={handleAllOrder}>전체 주문하기</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
