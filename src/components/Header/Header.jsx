import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import styles from './Header.module.css';
import { useAuthContext } from '../../context/AuthContext';

export default function Header() {
  const { user, login, logout } = useAuthContext();

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
            <AiOutlineShoppingCart />
          </Link>
        </li>
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
