import React from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

export default function Modal({ children }) {
  return (
    <>
      {createPortal(
        <div className={styles.modal}>{children}</div>,
        document.body
      )}
    </>
  );
}
