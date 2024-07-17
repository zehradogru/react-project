import React, { useState, useEffect, useRef } from 'react';
import styles from './Navbar.module.css';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ isLoggedIn, userInfo, onLogout }) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const navigate = useNavigate();
  const profileMenuRef = useRef(null);

  // drop down menu kapatma
  useEffect(() => {
    function handleClickOutside(event) {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [profileMenuRef]);

  // Profil ismini tıklayarak menüyü açma işlemi
  const handleProfileClick = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  // çıkış
  const handleLogoutClick = () => {
    onLogout();
    setShowProfileMenu(false);
    navigate('/');
  };

  // ilk harf
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">HOME</Link>
      </div>
      <ul className={styles['nav-links']}>
        <li><Link to="/influencers">Influencers</Link></li>
        <li><Link to="/board">Board</Link></li>
      </ul>
      <ul className={styles['auth-links']}>
        {isLoggedIn ? (
          <li className={styles['profile-menu']} ref={profileMenuRef}>
            <span onClick={handleProfileClick}>
              {userInfo ? `${capitalizeFirstLetter(userInfo.name)} ${capitalizeFirstLetter(userInfo.surname)}` : 'Profile'}
            </span>
            {showProfileMenu && (
              <div className={styles['profile-dropdown']} ref={profileMenuRef}>
                <ul>
                  <li><Link to="/profile">View Profile</Link></li>
                  <li><button onClick={handleLogoutClick}>Log out</button></li>
                </ul>
              </div>
            )}
          </li>
        ) : (
          <li><Link to="/login">Log in</Link></li>
        )}
      </ul>
      {showProfileMenu && (
        <div className={styles['profile-overlay']} onClick={() => setShowProfileMenu(false)} />
      )}
    </nav>
  );
};

export default Navbar;
