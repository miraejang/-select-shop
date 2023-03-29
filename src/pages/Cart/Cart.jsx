import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import CartItem from '../../components/CartItem/CartItem';
import styles from './Cart.module.css';
import Checkbox from '../../ui/Checkbox/Checkbox';
import Loading from '../../components/Loading/Loading';
import PaymentBox from '../../components/PaymentBox/PaymentBox';
import Modal from '../../components/Modal/Modal';
import ModalMessage from '../../components/ModalMessage/ModalMessage';

export default function Cart() {
  const {
    cartQuery: { isLoading: isCartLoading, data: items },
  } = useCart();
  const [checkedStates, setCheckedStates] = useState();
  const [allSelected, setAllSelected] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isPayLoading, setIsPayLoading] = useState(true);
  const [modalMessage, setModalMessage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const obj = {};
    if (items) {
      Object.values(items).map((item) => (obj[item.id] = false));
    }
    setCheckedStates(obj);
  }, [items]);
  useEffect(() => {
    if (checkedStates && isPayLoading) {
      setIsLoading(false);
    }
  }, [checkedStates, isPayLoading]);
  useEffect(() => {
    const values = checkedStates && Object.values(checkedStates);
    if (values && values.length > 0 && !values.includes(false)) {
      setAllSelected(true);
    } else {
      setAllSelected(false);
    }
  }, [checkedStates]);

  const handleChecked = (updated) => {
    setCheckedStates((prev) => ({ ...prev, ...updated }));
  };
  const handleAllchecked = () => {
    setAllSelected((prev) => {
      const obj = { ...checkedStates };
      Object.keys(obj).map((key) => (obj[key] = !prev));
      setCheckedStates(obj);
      return !prev;
    });
  };
  const handleSelectedOrder = () => {
    const checked = Object.keys(checkedStates).filter(
      (key) => checkedStates[key] === true
    );
    const list = [];
    checked.map((id) => list.push(items[id]));

    if (list.length > 0) {
      navigate('/order', { state: list });
    } else {
      setModalMessage('선택한 상품이 없습니다.');
    }
  };
  const handleAllOrder = () => {
    navigate('/order', { state: Object.values(items) });
  };

  if (isCartLoading || isLoading) return <Loading />;
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
                    onChange={handleAllchecked}
                  />
                </th>
                <th>상품정보</th>
                <th>가격</th>
                <th>수량</th>
                <th>상품 금액</th>
                <th>삭제</th>
              </tr>
            </thead>
            <tbody>
              {!items && (
                <tr>
                  <td colSpan={6} className={styles.emptyMessage}>
                    장바구니에 담긴 상품이 없습니다.
                  </td>
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
        <PaymentBox
          list={items && Object.values(items)}
          onSelectedOrder={handleSelectedOrder}
          onAllOrder={handleAllOrder}
          onLoading={(state) => setIsPayLoading(state)}
        />
      </div>
      {modalMessage && (
        <Modal>
          <ModalMessage
            message={modalMessage}
            onClose={() => setModalMessage(null)}
          />
        </Modal>
      )}
    </>
  );
}
