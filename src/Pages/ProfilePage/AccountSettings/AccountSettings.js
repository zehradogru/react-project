import React, { useState } from 'react';
import styles from './AccountSettings.module.css';

const AccountSettings = () => {
  const [accountData, setAccountData] = useState({
    email: '',
    password: '',
    twoFactorAuth: false,
    privacy: 'public'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccountData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setAccountData((prevData) => ({
      ...prevData,
      [name]: checked
    }));
  };

  const handleUpdate = (field) => {
    // Hesap ayarlarını güncelleme işlemini burada gerçekleştirin
    console.log(`${field} updated:`, accountData[field]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hesap verilerini güncelleme işlemini burada gerçekleştirin
    console.log('Account settings updated:', accountData);
  };

  return (
    <div className={styles.content}>
      <h2>Hesap Ayarları</h2>
      <form onSubmit={handleSubmit}>
        <label>
          E-posta Adresi
          <input
            type="email"
            name="email"
            value={accountData.email}
            onChange={handleChange}
          />
          <button type="button" onClick={() => handleUpdate('email')}>Güncelle</button>
        </label>
        <label>
          Şifre
          <input
            type="password"
            name="password"
            value={accountData.password}
            onChange={handleChange}
          />
          <button type="button" onClick={() => handleUpdate('password')}>Güncelle</button>
        </label>
        <label>
          İki Faktörlü Kimlik Doğrulama
          <input
            type="checkbox"
            name="twoFactorAuth"
            checked={accountData.twoFactorAuth}
            onChange={handleCheckboxChange}
          />
          <button type="button" onClick={() => handleUpdate('twoFactorAuth')}>Güncelle</button>
        </label>
        <label>
          Gizlilik Ayarları
          <select
            name="privacy"
            value={accountData.privacy}
            onChange={handleChange}
          >
            <option value="public">Kamuya Açık</option>
            <option value="friends">Sadece Arkadaşlar</option>
            <option value="private">Özel</option>
          </select>
          <button type="button" onClick={() => handleUpdate('privacy')}>Güncelle</button>
        </label>
        <button type="submit">Tümünü Güncelle</button>
      </form>
    </div>
  );
};

export default AccountSettings;
