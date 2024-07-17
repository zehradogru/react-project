import React from 'react';
import styles from './HomePage.module.css'; 
import SearchButton from './SearchButton/SearchButton';

const HomePage = () => {
  const handleSearch = (searchTerm) => {


    
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Find Influencers</h1>
      <p className={styles.description}> ---------- </p>
      <SearchButton onSearch={handleSearch} />
      {/* -
      
      */}
    </div>
  );
};

export default HomePage;
