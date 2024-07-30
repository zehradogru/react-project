import React, { useState } from 'react';
import styles from './NotificationSettings.module.css';

const NotificationSettings = () => {
  const [notifications, setNotifications] = useState({
    email: false,
    mobile: false,
    push: false,
  });

  const handleToggle = (type) => {
    setNotifications((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  return (
    <div className={styles.content}>
      <h2>Bildirim Ayarları</h2>
      <div className={styles.setting}>
        <span>E-posta Bildirimleri</span>
        <button
          className={notifications.email ? styles.active : styles.inactive}
          onClick={() => handleToggle('email')}
        >
          {notifications.email ? 'Açık' : 'Kapalı'}
        </button>
      </div>
      <div className={styles.setting}>
        <span>Mobil Bildirimler</span>
        <button
          className={notifications.mobile ? styles.active : styles.inactive}
          onClick={() => handleToggle('mobile')}
        >
          {notifications.mobile ? 'Açık' : 'Kapalı'}
        </button>
      </div>
      <div className={styles.setting}>
        <span>Push Bildirimler</span>
        <button
          className={notifications.push ? styles.active : styles.inactive}
          onClick={() => handleToggle('push')}
        >
          {notifications.push ? 'Açık' : 'Kapalı'}
        </button>
      </div>
      <div className={styles.setting}>
        <span>Bildirim Tercihleri</span>
        <div className={styles.preferences}>
          <div>Yeni Mesajlar: {notifications.email ? 'Açık' : 'Kapalı'}</div>
          <div>Takipçi İstekleri: {notifications.push ? 'Açık' : 'Kapalı'}</div>
        </div>
      </div>
    </div>
  );
};

export default NotificationSettings;
