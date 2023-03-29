import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import Modal from '../../components/Modal/Modal';
import ModalMessage from '../../components/ModalMessage/ModalMessage';
import PaymentBox from '../../components/PaymentBox/PaymentBox';
import styles from './Order.module.css';

export default function Order() {
  const { state: list } = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [isPayLoading, setIsPayLoading] = useState(true);
  const [modalMessage, setModalMessage] = useState(null);
  const [shippingInfo, setShippingInfo] = useState();
  const [completed, setCompleted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(list);
    if (list === null) {
      navigate('/cart');
    } else {
      if (list && isPayLoading) {
        setIsLoading(false);
      }
    }
  }, [list, isPayLoading, navigate]);

  const handlePay = () => {
    if (shippingInfo) {
      const { name, phone1, phone2, phone3, address } = shippingInfo;
      if (name && phone1 && phone2 && phone3 && address) {
        setCompleted(true);
        setModalMessage('결제가 완료되었습니다.');
      } else {
        setModalMessage('배송지 정보 필수 입력란을 채워주세요.');
      }
    } else {
      setModalMessage('배송지 정보 필수 입력란을 채워주세요.');
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prev) => ({ ...prev, [name]: value }));
  };

  if (isLoading) return <Loading />;
  return (
    <>
      <h2 className='pageTitle'>Order</h2>
      <div className={styles.container}>
        <div className={styles.order}>
          <section className={styles.section}>
            <p className={styles.sectionTitle}>배송지 정보</p>
            <table className={styles.table}>
              <tbody>
                <tr className={styles.required}>
                  <th className={styles.th}>받으시는 분</th>
                  <td className={styles.input}>
                    <input
                      onChange={handleChange}
                      type='text'
                      name='name'
                      required
                    />
                  </td>
                </tr>
                <tr className={`${styles.tel} ${styles.required}`}>
                  <th className={styles.th}>휴대폰 번호</th>
                  <td className={styles.input}>
                    <div className={styles.wrap}>
                      <input
                        onChange={handleChange}
                        type='text'
                        name='phone1'
                        required
                      />
                      <input
                        onChange={handleChange}
                        type='text'
                        name='phone2'
                        required
                      />
                      <input
                        onChange={handleChange}
                        type='text'
                        name='phone3'
                        required
                      />
                    </div>
                  </td>
                </tr>
                <tr className={styles.required}>
                  <th className={styles.th}>배송지 주소</th>
                  <td className={styles.input}>
                    <input
                      onChange={handleChange}
                      type='text'
                      name='address'
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <th className={styles.th}>배송 메세지</th>
                  <td className={styles.input}>
                    <input
                      onChange={handleChange}
                      type='text'
                      placeholder='메세지를 입력하세요'
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
          <section className={styles.section}>
            <p className={styles.sectionTitle}>주문 상품</p>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>상품 정보</th>
                  <th>수량</th>
                  <th>가격</th>
                  <th>총 상품 금액</th>
                </tr>
              </thead>
              <tbody>
                {list.map((item) => {
                  const { id, name, image, quantity, price, option } = item;

                  return (
                    <tr key={id}>
                      <td className={styles.product}>
                        <div className={styles.productContainer}>
                          <img src={image} alt={name} className={styles.img} />
                          <div>
                            <p className={styles.name}>{name}</p>
                            <p className={styles.option}>{option}</p>
                          </div>
                        </div>
                      </td>
                      <td className={styles.quantity}>
                        {quantity.toLocaleString()}개
                      </td>
                      <td className={styles.price}>
                        {price.toLocaleString()}원
                      </td>
                      <td className={styles.totalPrice}>
                        {(price * quantity).toLocaleString()}원
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </section>
        </div>
        <PaymentBox
          list={list}
          onPay={handlePay}
          onLoading={(state) => setIsPayLoading(state)}
        />
      </div>
      {modalMessage && (
        <Modal>
          <ModalMessage
            message={modalMessage}
            onClose={() => {
              if (completed) {
                setModalMessage(null);
                navigate('/');
              } else {
                setModalMessage(null);
              }
            }}
          />
        </Modal>
      )}
    </>
  );
}
