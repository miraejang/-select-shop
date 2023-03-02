import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useAuthContext } from '../../context/AuthContext';
import useCart from '../../hooks/useCart';
import styles from './Header.module.css';

export default function Header() {
  const { user, login, logout } = useAuthContext();
  const {
    cartQuery: { data: cartProducts },
  } = useCart();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to='/'>
          <h1>Select Shop</h1>
        </Link>
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
        </ul>
      </nav>
      <ul className={styles.userBox}>
        <li className={styles.cart}>
          <Link to='cart'>
            <div className={styles.cartIcon}>
              {cartProducts && (
                <div className={styles.count}>{cartProducts.length}</div>
              )}
              <AiOutlineShoppingCart />
            </div>
          </Link>
        </li>
        {user && (
          <li>
            <Link to='mypage'>My</Link>
          </li>
        )}
        {user && (
          <li>
            <Link to='admin'>Admin</Link>
          </li>
        )}
        {user && <li>{user.displayName}님</li>}
        <li>
          {!user && <button onClick={login}>login</button>}
          {user && <button onClick={logout}>logout</button>}
        </li>
      </ul>
    </header>
  );
}
