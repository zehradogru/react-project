import React, { useState, useEffect } from 'react';
import styles from './ProfilePage.module.css';
import ProfileSettings from './ProfileSettings/ProfileSettings';
import AccountSettings from './AccountSettings/AccountSettings';
import NotificationSettings from './NotificationSettings/NotificationSettings';
import axios from 'axios';

const Sidebar = ({ onSelect, showSocialMedia }) => {
  return (
    <div className={styles.sidebar}>
      <button onClick={() => onSelect('profileSettings')}>Profil Ayarları</button>
      {showSocialMedia && <button onClick={() => onSelect('socialMedia')}>Sosyal Medya</button>}
      <button onClick={() => onSelect('accountSettings')}>Hesap Ayarları</button>
      <button onClick={() => onSelect('notificationSettings')}>Bildirim Ayarları</button>
      <button onClick={() => onSelect('updates')}>Güncellemeler</button>
    </div>
  );
};

const Content = ({ selectedSection }) => {
  switch (selectedSection) {
    case 'profileSettings':
      return <ProfileSettings />;
    case 'socialMedia':
      return <div className={styles.content}>Sosyal Medya İçeriği</div>;
    case 'accountSettings':
      return <AccountSettings />;
    case 'notificationSettings':
      return <NotificationSettings />;
    case 'updates':
      return <div className={styles.content}>Güncellemeler İçeriği</div>;
    default:
      return <div className={styles.content}>Lütfen bir seçenek seçin.</div>;
  }
};

const ProfilePage = () => {
  const [selectedSection, setSelectedSection] = useState('profileSettings');
  const [showSocialMedia, setShowSocialMedia] = useState(false);
  const userId = 1; // Kullanıcının ID'si (Örneğin, giriş yapmış kullanıcı ID'si)

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/user/${userId}`);
        setShowSocialMedia(response.data.role === 'influencer');
      } catch (error) {
        console.error('Error fetching user role:', error);
      }
    };

    fetchUserRole();
  }, [userId]);

  return (
    <div className={styles.profilePage}>
      <Sidebar onSelect={setSelectedSection} showSocialMedia={showSocialMedia} />
      <Content selectedSection={selectedSection} />
    </div>
  );
};

export default ProfilePage;
