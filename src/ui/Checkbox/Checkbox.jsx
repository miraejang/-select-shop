import React from 'react';
import { BsCheckCircleFill, BsCheckCircle } from 'react-icons/bs';
import styles from './Checkbox.module.css';

export default function Checkbox({ id, checked, onChange }) {
  return (
    <div className={styles.designdesignCheckbox}>
      <div className={styles.icon}>
        {checked && <BsCheckCircleFill className={styles.checkedIcon} />}
        {!checked && <BsCheckCircle className={styles.unCheckedIcon} />}
      </div>
      <label htmlFor={id} className={styles.label}>
        <input
          checked={checked || false}
          onChange={onChange}
          type='checkbox'
          name={id}
          id={id}
          className={styles.input}
        />
      </label>
    </div>
  );
}
