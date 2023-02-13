import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { login, logout, onUserSateChanged } from '../../api/firebase';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import styles from './Header.module.css';

export default function Header() {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserSateChanged(setUser);
  }, []);

  const handleLogin = () => {
    login().then(setUser);
  };
  const handleLogout = () => {
    logout(() => setUser(null));
  };

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
          {!user && <button onClick={handleLogin}>login</button>}
          {user && <button onClick={handleLogout}>logout</button>}
        </li>
      </ul>
    </header>
  );
}
