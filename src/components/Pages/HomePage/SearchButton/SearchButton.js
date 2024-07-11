import React, { useState } from 'react';
import styles from './SearchButton.module.css';

const SearchButton = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [platform, setPlatform] = useState('');
  const [category, setCategory] = useState('');
  const [city, setCity] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handlePlatformChange = (event) => {
    setPlatform(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleSearch = () => {
    const searchFilters = {
      searchTerm,
      platform,
      category,
      city
    };
    onSearch(searchFilters);
  };

  return (
    <div className={styles['search-container']}>
      <div className={styles['search-input-container']}>
        <input
          type="text"
          className={styles['search-input']}
          placeholder="Influencer ara..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button className={styles['search-button']} onClick={handleSearch}>Ara</button>
      </div>
      
      {/* Filtreleme seçenekleri */}
      <div className={styles['filter-options']}>
        <label>
          Platform:
          <select className={styles['filter-select']} onChange={handlePlatformChange}>
            <option value="">Tümü</option>
            <option value="instagram">Instagram</option>
            <option value="twitter">Twitter</option>
            <option value="tiktok">Tiktok</option>
            <option value="youtube">Youtube</option>
          </select>
        </label>
        <label>
          Kategori:
          <select className={styles['filter-select']} onChange={handleCategoryChange}>
            <option value="">Tümü</option>
            <option value="moda">Moda</option>
            <option value="müzik">Müzik</option>
            <option value="gezi">Gezi</option>
            <option value="fitness">Fitness</option>
          </select>
        </label>
        <label>
          Şehir:
          <select className={styles['filter-select']} onChange={handleCityChange}>
            <option value="">Tümü</option>
            <option value="istanbul">İstanbul</option>
            <option value="ankara">Ankara</option>
            <option value="izmir">İzmir</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default SearchButton;
