import React from 'react';
import useCart from '../../components/hooks/useCart';
import CartItem from '../../components/CartItem/CartItem';
import styles from './Cart.module.css';

const SHIPPING = 3000;
const FREE_SHIPPING = 70000;

export default function Cart() {
  const {
    cartQuery: { isLoading, data: items },
  } = useCart();
  const totalPrice =
    items &&
    items.reduce((total, item) => (total += item.price * item.quantity), 0);
    
  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <h2 className='pageTitle'>Cart</h2>
      <div className={styles.container}>
        <div className={styles.cart}>
          {!items && <p>아이템이 없습니다.</p>}
          {items && (
            <table className={styles.table}>
              <thead>
                <tr>
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
                  items.map((item) => (
                    <CartItem product={item} key={item.id} />
                  ))}
              </tbody>
            </table>
          )}
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
            <button>주문하기</button>
          </div>
        </div>
      </div>
    </>
  );
}
