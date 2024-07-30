import React, { useState } from 'react';
import styles from './SearchButton.module.css';
import axios from 'axios';

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

  const handleSearch = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/search', {
        searchTerm,
        platform,
        category,
        city
      });
      onSearch(response.data);  // Sonuçları üst bileşene ilet
    } catch (error) {
      console.error('Error performing search:', error);
    }
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
            <option value="Instagram">Instagram</option>
            <option value="Twitter">Twitter</option>
            <option value="TikTok">TikTok</option>
            <option value="YouTube">YouTube</option>
          </select>
        </label>
        <label>
          Kategori:
          <select className={styles['filter-select']} onChange={handleCategoryChange}>
            <option value="">Tümü</option>
            <option value="Moda">Moda</option>
            <option value="Müzik">Müzik</option>
            <option value="Gezi">Gezi</option>
            <option value="Fitness">Fitness</option>
          </select>
        </label>
        <label>
          Şehir:
          <select className={styles['filter-select']} onChange={handleCityChange}>
            <option value="">Tümü</option>
            <option value="İstanbul">İstanbul</option>
            <option value="Ankara">Ankara</option>
            <option value="İzmir">İzmir</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default SearchButton;
