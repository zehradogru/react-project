import React from 'react';
import styles from './HomePage.module.css'; // Modül CSS dosyanızı import edin
import SearchButton from './SearchButton/SearchButton'; // SearchButton component'ını import edin

const HomePage = () => {
  const handleSearch = (searchTerm) => {
    console.log('Arama terimi:', searchTerm);
    // Burada arama terimine göre filtreleme yapılacak
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Find Influencers</h1>
      <p className={styles.description}> ---------- </p>
      <SearchButton onSearch={handleSearch} />
      {/* Filtreleme seçenekleri ve diğer içerikler */}
    </div>
  );
};

export default HomePage;
