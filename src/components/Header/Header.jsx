import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useAuthContext } from '../../context/AuthContext';
import useCart from '../../hooks/useCart';
import styles from './Header.module.css';

export default function Header() {
  const { user, login, logout } = useAuthContext();
  const {
    cartQuery: { data: cartItems },
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
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : '')}
              to='new'
            >
              New
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : '')}
              to='women'
            >
              Women
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : '')}
              to='men'
            >
              Men
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : '')}
              to='beauty'
            >
              Beauty
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : '')}
              to='life'
            >
              Life
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : '')}
              to='sale'
            >
              Sale
            </NavLink>
          </li>
        </ul>
      </nav>
      <ul className={styles.userBox}>
        <li className={styles.cart}>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : '')}
            to='cart'
          >
            <div className={styles.cartIcon}>
              {cartItems && (
                <div className={styles.count}>
                  {Object.keys(cartItems).length}
                </div>
              )}
              <AiOutlineShoppingCart />
            </div>
          </NavLink>
        </li>
        {user && (
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : '')}
              to='mypage'
            >
              My
            </NavLink>
          </li>
        )}
        {user && user.isAdmin && (
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : '')}
              to='admin'
            >
              Admin
            </NavLink>
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
