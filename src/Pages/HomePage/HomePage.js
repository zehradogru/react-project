import React, { useState } from 'react';
import styles from './HomePage.module.css'; 
import SearchButton from './components/SearchButton/SearchButton';

const HomePage = () => {
  const [results, setResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (searchFilters) => {
    setHasSearched(true); // Arama yapıldığını belirle
    setResults(searchFilters);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Find Influencers</h1>
      <p className={styles.description}> ---------- </p>
      <SearchButton onSearch={handleSearch} />
      {/* Arama sonuçlarını göster */}
      <div className={styles.resultsContainer}>
        {hasSearched ? (
          results.length > 0 ? (
            results.map((influencer) => (
              <div key={influencer.influencer_id} className={styles.resultItem}>
                <img src={influencer.profile_image} alt={influencer.name} className={styles.profileImage} />
                <h2>{influencer.name} {influencer.surname}</h2>
                <p>{influencer.bio}</p>
                <p>Platforms: {Array.isArray(influencer.platforms) ? influencer.platforms.join(', ') : influencer.platforms}</p>
                <p>Categories: {Array.isArray(influencer.categories) ? influencer.categories.join(', ') : influencer.categories}</p>
                <p>Followers: {influencer.followers}</p>
              </div>
            ))
          ) : (
            <p>No results found</p>
          )
        ) : (
          <p>Search to find influencers</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
