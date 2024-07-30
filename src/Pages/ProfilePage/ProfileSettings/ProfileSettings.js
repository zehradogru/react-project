import React, { useState } from 'react';
import styles from './ProfileSettings.module.css';

const ProfileSettings = () => {
  const [profileData, setProfileData] = useState({
    profilePicture: '',
    username: '',
    firstName: '',
    lastName: '',
    bio: '',
    birthDate: '',
    gender: ''
  });

  const [editedFields, setEditedFields] = useState({
    profilePicture: false,
    username: false,
    firstName: false,
    lastName: false,
    bio: false,
    birthDate: false,
    gender: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setProfileData((prevData) => ({
      ...prevData,
      profilePicture: e.target.files[0]
    }));
    setEditedFields((prev) => ({ ...prev, profilePicture: true }));
  };

  const handleUpdate = (field) => {
    setEditedFields((prev) => ({ ...prev, [field]: true }));
    // Profil verilerini güncelleme işlemini burada gerçekleştirin
    console.log(`${field} updated:`, profileData[field]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Profil verilerini güncelleme işlemini burada gerçekleştirin
    console.log('Profile updated:', profileData);
  };

  return (
    <div className={styles.content}>
      <h2>Profil Ayarları</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Profil Fotoğrafı
          <input
            type="file"
            name="profilePicture"
            onChange={handleFileChange}
          />
          {editedFields.profilePicture && <i className="fas fa-check" />}
          <button type="button" onClick={() => handleUpdate('profilePicture')}>Güncelle</button>
        </label>
        <label>
          Kullanıcı Adı
          <input
            type="text"
            name="username"
            value={profileData.username}
            onChange={handleChange}
          />
          {editedFields.username && <i className="fas fa-check" />}
          <button type="button" onClick={() => handleUpdate('username')}>Güncelle</button>
        </label>
        <label>
          Ad
          <input
            type="text"
            name="firstName"
            value={profileData.firstName}
            onChange={handleChange}
          />
          {editedFields.firstName && <i className="fas fa-check" />}
          <button type="button" onClick={() => handleUpdate('firstName')}>Güncelle</button>
        </label>
        <label>
          Soyad
          <input
            type="text"
            name="lastName"
            value={profileData.lastName}
            onChange={handleChange}
          />
          {editedFields.lastName && <i className="fas fa-check" />}
          <button type="button" onClick={() => handleUpdate('lastName')}>Güncelle</button>
        </label>
        <label>
          Biyografi
          <textarea
            name="bio"
            value={profileData.bio}
            onChange={handleChange}
          />
          {editedFields.bio && <i className="fas fa-check" />}
          <button type="button" onClick={() => handleUpdate('bio')}>Güncelle</button>
        </label>
        <label>
          Doğum Tarihi
          <input
            type="date"
            name="birthDate"
            value={profileData.birthDate}
            onChange={handleChange}
          />
          {editedFields.birthDate && <i className="fas fa-check" />}
          <button type="button" onClick={() => handleUpdate('birthDate')}>Güncelle</button>
        </label>
        <label>
          Cinsiyet
          <select
            name="gender"
            value={profileData.gender}
            onChange={handleChange}
          >
            <option value="">Seçin</option>
            <option value="male">Erkek</option>
            <option value="female">Kadın</option>
            <option value="other">Diğer</option>
          </select>
          {editedFields.gender && <i className="fas fa-check" />}
          <button type="button" onClick={() => handleUpdate('gender')}>Güncelle</button>
        </label>
        <button type="submit">Tümünü Güncelle</button>
      </form>
    </div>
  );
};

export default ProfileSettings;
