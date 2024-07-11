// Navbar.js

import React from 'react';
import styles from './Navbar.module.css'; // Navbar için CSS dosyasını import edin (ister modül CSS olarak, ister global CSS olarak)

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        {/* Logo veya site adı */}
        <span>My App</span>
      </div>
      <ul className={styles['nav-links']}>
        <li><a href="/">Home Page</a></li>
        <li><a href="/influencers">Influencers</a></li>
        <li><a href="/board">Board</a></li>
      </ul>
      <ul className={styles['auth-links']}>
        <li><a href="/login">Log in</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
