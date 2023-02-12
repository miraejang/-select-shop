import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>Select Shop</h1>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink to='new'>New</NavLink>
          </li>
          <li>
            <NavLink to='women'>Women</NavLink>
          </li>
          <li>
            <NavLink to='men'>Men</NavLink>
          </li>
          <li>
            <NavLink to='beauty'>Beauty</NavLink>
          </li>
          <li>
            <NavLink to='life'>Life</NavLink>
          </li>
          <li>
            <NavLink to='sale'>Sale</NavLink>
          </li>
          <li>
            <NavLink to='new'>New</NavLink>
          </li>
        </ul>
      </nav>
      <ul className={styles.userBox}>
        <li>
          <Link to='cart'>Cart</Link>
        </li>
        <li>
          <Link to='login'>Login</Link>
        </li>
      </ul>
    </header>
  );
}
