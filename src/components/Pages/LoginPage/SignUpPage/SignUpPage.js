import React, { useState } from 'react';
import styles from './SignUpPage.module.css';
import axios from 'axios';

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('employer');
  const [platforms, setPlatforms] = useState([]);
  const [categories, setCategories] = useState([]);
  const [bio, setBio] = useState('');
  const [platformUsernames, setPlatformUsernames] = useState({});

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Kullanıcı bilgilerini hazırla
    const userData = {
      username,
      email,
      password,
      role,
    };

    try {
      // Kullanıcıyı kaydet
      const userResponse = await axios.post('http://localhost:5000/users', userData);
      
      console.log('User registered:', userResponse.data);

      // Eğer influencer olarak kayıt yapıldıysa ek bilgileri de hazırla
      if (role === 'influencer') {
        const influencerData = {
          user_id: userResponse.data.id, // Kaydedilen kullanıcının ID'si
          bio,
          platforms: platforms.map((platformId) => ({
            platform_id: platformId,
            username: platformUsernames[platformId] || '',
          })),
          categories,
        };

        // Influencer bilgilerini kaydet
        const influencerResponse = await axios.post('/api/influencers', influencerData);
        console.log('Influencer registered:', influencerResponse.data);
      }

      // Başarılı kayıt işlemi sonrası yapılacak işlemler burada yapılabilir
    } catch (error) {
      console.error('Registration error:', error);
      // Hata durumu için işlemler burada yapılabilir
    }
  };

  const handlePlatformChange = (platformId, isChecked) => {
    if (isChecked) {
      setPlatforms((prevPlatforms) => [...prevPlatforms, platformId]);
    } else {
      setPlatforms((prevPlatforms) =>
        prevPlatforms.filter((id) => id !== platformId)
      );
      // Eğer platform seçimi kaldırılırsa, ilgili kullanıcı adını da temizle
      setPlatformUsernames((prevUsernames) => {
        const updatedUsernames = { ...prevUsernames };
        delete updatedUsernames[platformId];
        return updatedUsernames;
      });
    }
  };

  const handleCategoryChange = (categoryId, isChecked) => {
    if (isChecked) {
      setCategories((prevCategories) => [...prevCategories, categoryId]);
    } else {
      setCategories((prevCategories) =>
        prevCategories.filter((id) => id !== categoryId)
      );
    }
  };

  return (
    <div className={styles['sign-up-container']}>
      <form className={styles['sign-up-form']} onSubmit={handleSignUp}>
        <h2>Sign Up</h2>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label>Role</label>
        <div>
          <input
            type="radio"
            id="employer"
            name="role"
            value="employer"
            checked={role === 'employer'}
            onChange={(e) => setRole(e.target.value)}
          />
          <label htmlFor="employer">Employer</label>

          <input
            type="radio"
            id="influencer"
            name="role"
            value="influencer"
            checked={role === 'influencer'}
            onChange={(e) => setRole(e.target.value)}
          />
          <label htmlFor="influencer">Influencer</label>
        </div>

        {role === 'influencer' && (
          <>
            <label htmlFor="bio">Bio</label>
            <textarea
              id="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              required
            ></textarea>

            <label>Platforms</label>
            <div>
              <input
                type="checkbox"
                id="instagram"
                value="1"
                onChange={(e) =>
                  handlePlatformChange('1', e.target.checked)
                }
              />
              <label htmlFor="instagram">Instagram</label>

              <input
                type="checkbox"
                id="youtube"
                value="2"
                onChange={(e) =>
                  handlePlatformChange('2', e.target.checked)
                }
              />
              <label htmlFor="youtube">YouTube</label>

              <input
                type="checkbox"
                id="tiktok"
                value="3"
                onChange={(e) =>
                  handlePlatformChange('3', e.target.checked)
                }
              />
              <label htmlFor="tiktok">TikTok</label>

              <input
                type="checkbox"
                id="twitter"
                value="4"
                onChange={(e) =>
                  handlePlatformChange('4', e.target.checked)
                }
              />
              <label htmlFor="twitter">Twitter</label>
            </div>

            {platforms.includes('1') && (
              <div>
                <label htmlFor="instagramUsername">Instagram Username</label>
                <input
                  type="text"
                  id="instagramUsername"
                  value={platformUsernames['1'] || ''}
                  onChange={(e) =>
                    setPlatformUsernames({
                      ...platformUsernames,
                      '1': e.target.value,
                    })
                  }
                />
              </div>
            )}

            {platforms.includes('2') && (
              <div>
                <label htmlFor="youtubeUsername">YouTube Username</label>
                <input
                  type="text"
                  id="youtubeUsername"
                  value={platformUsernames['2'] || ''}
                  onChange={(e) =>
                    setPlatformUsernames({
                      ...platformUsernames,
                      '2': e.target.value,
                    })
                  }
                />
              </div>
            )}

            {platforms.includes('3') && (
              <div>
                <label htmlFor="tiktokUsername">TikTok Username</label>
                <input
                  type="text"
                  id="tiktokUsername"
                  value={platformUsernames['3'] || ''}
                  onChange={(e) =>
                    setPlatformUsernames({
                      ...platformUsernames,
                      '3': e.target.value,
                    })
                  }
                />
              </div>
            )}

            {platforms.includes('4') && (
              <div>
                <label htmlFor="twitterUsername">Twitter Username</label>
                <input
                  type="text"
                  id="twitterUsername"
                  value={platformUsernames['4'] || ''}
                  onChange={(e) =>
                    setPlatformUsernames({
                      ...platformUsernames,
                      '4': e.target.value,
                    })
                  }
                />
              </div>
            )}

            <label>Categories</label>
            <div>
              <input
                type="checkbox"
                id="fashion"
                value="1"
                onChange={(e) => handleCategoryChange('1', e.target.checked)}
              />
              <label htmlFor="fashion">Fashion</label>

              <input
                type="checkbox"
                id="tech"
                value="2"
                onChange={(e) => handleCategoryChange('2', e.target.checked)}
              />
              <label htmlFor="tech">Tech</label>

              <input
                type="checkbox"
                id="food"
                value="3"
                onChange={(e) => handleCategoryChange('3', e.target.checked)}
              />
              <label htmlFor="food">Food</label>

              <input
                type="checkbox"
                id="travel"
                value="4"
                onChange={(e) => handleCategoryChange('4', e.target.checked)}
              />
              <label htmlFor="travel">Travel</label>
            </div>
          </>
        )}

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpPage;
