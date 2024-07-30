// src/components/InfluencerPage/InfluencerPage.js

import React from 'react';
import styles from './InfluencersPage.module.css';

const influencers = [
  {
    name: 'John Doe',
    platforms: ['Instagram', 'YouTube'],
    categories: ['Fashion', 'Travel'],
    followers: 50000,
  },
  {
    name: 'Jane Smith',
    platforms: ['TikTok'],
    categories: ['Fitness'],
    followers: 100000,
  },
  {
    name: 'Michael Johnson',
    platforms: ['Twitter'],
    categories: ['Tech'],
    followers: 75000,
  },
  {
    name: 'Emily Brown',
    platforms: ['Instagram', 'YouTube'],
    categories: ['Food', 'Travel'],
    followers: 80000,
  },
  {
    name: 'David Lee',
    platforms: ['TikTok'],
    categories: ['Music'],
    followers: 120000,
  },
  {
    name: 'Sophia Wilson',
    platforms: ['Instagram'],
    categories: ['Fashion'],
    followers: 60000,
  }
];

const InfluencerPage = () => {
  return (
    <div className={styles['influencer-list']}>
      <p className={styles['description']}>
        Burada popüler influencer'ların listesini bulabilirsiniz. Her bir influencer'ın platformları, kategorileri ve takipçi sayıları ile ilgili bilgileri inceleyebilirsiniz.
      </p>
      <div className={styles['header-row']}>
        <p className={styles['header-item']}>İsim</p>
        <p className={styles['header-item']}>Platform</p>
        <p className={styles['header-item']}>Kategori</p>
        <p className={styles['header-item']}>Takipçi Sayısı</p>
      </div>
      {influencers.map((influencer, index) => (
        <div key={index} className={styles['influencer-card']}>
          <div className={styles['info-row']}>
            <p className={styles['info-item']}>{influencer.name}</p>
            <div className={styles['info-item']}>
              {influencer.platforms.map((platform, index) => (
                <span key={index} className={styles['platform']}>
                  {platform}
                </span>
              ))}
            </div>
            <div className={styles['info-item']}>
              {influencer.categories.map((category, index) => (
                <span key={index} className={styles['category']}>
                  {category}
                </span>
              ))}
            </div>
            <p className={styles['info-item']}>{influencer.followers}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfluencerPage;
