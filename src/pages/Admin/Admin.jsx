import React, { useEffect } from 'react';
import { useNavigate, NavLink, Outlet, useLocation } from 'react-router-dom';
import styles from './Admin.module.css';

export default function Admin() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/admin') {
      navigate('product-management');
    }
  }, [pathname, navigate]);

  return (
    <>
      <div>
        <h2 className='pageTitle'>Admin</h2>
        <ul className={styles.nav}>
          <li>
            <NavLink
              className={({ isActive }) => isActive && styles.active}
              to='product-management'
            >
              상품 관리
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => isActive && styles.active}
              to='add-product'
            >
              상품 등록
            </NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
}
