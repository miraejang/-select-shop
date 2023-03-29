import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './PaymentBox.module.css';

const SHIPPING = 3000;
const FREE_SHIPPING = 70000;

export default function PaymentBox({
  list,
  onSelectedOrder,
  onAllOrder,
  onPay,
  onLoading,
}) {
  const [totalPrice, setTotalPrice] = useState();
  const { pathname: page } = useLocation();

  useEffect(() => {
    if (list === null) {
      setTotalPrice(0);
      onLoading(false);
    }
    if (list) {
      const price = list.reduce(
        (total, item) => (total += item.price * item.quantity),
        0
      );
      setTotalPrice(price);
      onLoading(false);
    }
  }, [list, onLoading]);

  if (!page || isNaN(totalPrice)) return;
  return (
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
              + {totalPrice < FREE_SHIPPING ? SHIPPING.toLocaleString() : 0} 원
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
          {page === '/cart' && (
            <>
              <button onClick={onSelectedOrder}>선택상품 주문하기</button>
              <button onClick={onAllOrder}>전체 주문하기</button>
            </>
          )}
          {page === '/order' && <button onClick={onPay}>결제하기</button>}
        </div>
      </div>
    </div>
  );
}
