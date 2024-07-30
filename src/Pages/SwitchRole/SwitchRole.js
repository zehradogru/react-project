import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SwitchRole.module.css';

const socialMediaPlatforms = [
  'Instagram', 'YouTube', 'TikTok', 'Twitch', 'Kick', 'Facebook', 'Twitter', 'LinkedIn'
];

const countries = [
  'United States', 'Canada', 'United Kingdom', 'Germany', 'France', 'Italy', 'Spain', 'Australia', 'Turkey', 'Japan'
];

const cities = {
  'United States': ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'],
  'Canada': ['Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Edmonton'],
  // Diğer ülkeler için şehirleri buraya ekleyin
};

const industries = [
  'Beauty', 'Fashion', 'Consumer Goods', 'Auto', 'Health & Wellness', 'Food & Beverages', 'Fitness & Gym'
];

const brandTypes = [
  'Brand', 'Agency', 'E-Commerce', 'Other'
];

const SwitchRole = () => {
  const [selectedRole, setSelectedRole] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    socialMediaPlatforms: {},
    email: '',
    country: '',
    city: '',
    phone: ''
  });
  const [brandData, setBrandData] = useState({
    companyName: '',
    industry: '',
    brandType: '',
    website: '',
    contactEmail: '',
    country: '',
    city: '',
    phone: '',
    contactName: '',
    contactSurname: ''
  });
  const [availableCities, setAvailableCities] = useState([]);
  const [userRole, setUserRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const response = await fetch('/api/user-role');
        const data = await response.json();
        setUserRole(data.role);
        setSelectedRole(data.role);
      } catch (error) {
        console.error('Error fetching user role:', error);
      }
    };

    fetchUserRole();
  }, []);

  const handleRoleChange = (role) => {
    setSelectedRole(role);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBrandFormChange = (e) => {
    const { name, value } = e.target;
    setBrandData({ ...brandData, [name]: value });
  };

  const handleCountryChange = (e) => {
    const country = e.target.value;
    setFormData({ ...formData, country, city: '' });
    setAvailableCities(cities[country] || []);
  };

  const handleBrandCountryChange = (e) => {
    const country = e.target.value;
    setBrandData({ ...brandData, country, city: '' });
    setAvailableCities(cities[country] || []);
  };

  const handlePlatformChange = (e) => {
    const platform = e.target.name;
    const isChecked = e.target.checked;

    setFormData(prevFormData => {
      const updatedPlatforms = { ...prevFormData.socialMediaPlatforms };
      if (isChecked) {
        updatedPlatforms[platform] = '';
      } else {
        delete updatedPlatforms[platform];
      }
      return { ...prevFormData, socialMediaPlatforms: updatedPlatforms };
    });
  };

  const handleUsernameChange = (platform, e) => {
    const username = e.target.value;
    setFormData(prevFormData => ({
      ...prevFormData,
      socialMediaPlatforms: {
        ...prevFormData.socialMediaPlatforms,
        [platform]: username
      }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (selectedRole === 'influencer') {
        console.log('Influencer data:', formData);
        // API çağrısı burada yapılabilir
      } else if (selectedRole === 'brand') {
        console.log('Brand data:', brandData);
        // API çağrısı burada yapılabilir
      }
      navigate('/profile');
    } catch (error) {
      console.error('Error switching role:', error);
      alert('Failed to switch account type. Please try again.');
    }
  };

  return (
    <div className={styles.container}>
      <h2>Switch Account Type</h2>
      <div className={styles.roleOptions}>
        {userRole !== 'influencer' && (
          <button
            className={selectedRole === 'influencer' ? styles.active : ''}
            onClick={() => handleRoleChange('influencer')}
          >
            Influencer Account
          </button>
        )}
        <button
          className={selectedRole === 'brand' ? styles.active : ''}
          onClick={() => handleRoleChange('brand')}
        >
          Brand Account
        </button>
      </div>
      {selectedRole && (
        <form onSubmit={handleSubmit} className={styles.form}>
          {selectedRole === 'influencer' && (
            <>
              <input
                type="text"
                name="name"
                placeholder="First Name"
                value={formData.name}
                onChange={handleFormChange}
                required
              />
              <input
                type="text"
                name="surname"
                placeholder="Last Name"
                value={formData.surname}
                onChange={handleFormChange}
                required
              />
              <div className={styles.platformsContainer}>
                {socialMediaPlatforms.map(platform => (
                  <div key={platform} className={styles.platformOption}>
                    <label>
                      <input
                        type="checkbox"
                        name={platform}
                        checked={platform in formData.socialMediaPlatforms}
                        onChange={handlePlatformChange}
                      />
                      {platform}
                    </label>
                    {platform in formData.socialMediaPlatforms && (
                      <input
                        type="text"
                        placeholder={`Username for ${platform}`}
                        value={formData.socialMediaPlatforms[platform]}
                        onChange={(e) => handleUsernameChange(platform, e)}
                        required
                      />
                    )}
                  </div>
                ))}
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleFormChange}
                required
              />
              <select
                name="country"
                value={formData.country}
                onChange={handleCountryChange}
                required
              >
                <option value="">Select Country</option>
                {countries.map(country => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
              <select
                name="city"
                value={formData.city}
                onChange={handleFormChange}
                required
              >
                <option value="">Select City</option>
                {availableCities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleFormChange}
                required
              />
            </>
          )}
          {selectedRole === 'brand' && (
            <>
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                value={brandData.companyName}
                onChange={handleBrandFormChange}
                required
              />
              <input
                type="text"
                name="contactName"
                placeholder="Contact First Name"
                value={brandData.contactName}
                onChange={handleBrandFormChange}
                required
              />
              <input
                type="text"
                name="contactSurname"
                placeholder="Contact Last Name"
                value={brandData.contactSurname}
                onChange={handleBrandFormChange}
                required
              />
              <select
                name="industry"
                value={brandData.industry}
                onChange={handleBrandFormChange}
                required
              >
                <option value="">Select Industry</option>
                {industries.map(industry => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
              <select
                name="brandType"
                value={brandData.brandType}
                onChange={handleBrandFormChange}
                required
              >
                <option value="">Select Brand Type</option>
                {brandTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              <input
                type="text"
                name="website"
                placeholder="Website (Optional)"
                value={brandData.website}
                onChange={handleBrandFormChange}
              />
              <input
                type="email"
                name="contactEmail"
                placeholder="Contact Email"
                value={brandData.contactEmail}
                onChange={handleBrandFormChange}
                required
              />
              <select
                name="country"
                value={brandData.country}
                onChange={handleBrandCountryChange}
                required
              >
                <option value="">Select Country</option>
                {countries.map(country => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
              <select
                name="city"
                value={brandData.city}
                onChange={handleBrandFormChange}
                required
              >
                <option value="">Select City</option>
                {availableCities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
              <input
                type="text"
                name="phone"
                placeholder="Phone (Optional)"
                value={brandData.phone}
                onChange={handleBrandFormChange}
              />
            </>
          )}
          <button type="submit" className={styles.submitButton}>
            Confirm
          </button>
        </form>
      )}
    </div>
  );
};

export default SwitchRole;
