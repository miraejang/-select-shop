import React from 'react';
import styles from './ModalMessage.module.css';

export default function ModalMessage({
  message,
  onClose,
  buttonText = '확인',
}) {
  return (
    <div className={styles.container}>
      <p className={styles.message}>{message}</p>
      <button className={styles.btn} onClick={onClose}>
        {buttonText}
      </button>
    </div>
  );
}
