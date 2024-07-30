const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 5000;

// MySQL bağlantısı
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'deneme2'
});

app.use(cors());
app.use(express.json()); 

// MySQL bağlantısını başlat
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL connected...');
});


app.post('/api/search', (req, res) => {
  const { searchTerm, platform, category, city } = req.body;
  
  let query = `
    SELECT i.influencer_id, i.name, i.surname, i.profile_image, i.bio, i.followers, 
           GROUP_CONCAT(DISTINCT p.platform_name) AS platforms, 
           GROUP_CONCAT(DISTINCT c.category_name) AS categories
    FROM Influencers i
    LEFT JOIN Influencer_Platforms ip ON i.influencer_id = ip.influencer_id
    LEFT JOIN Platforms p ON ip.platform_id = p.platform_id
    LEFT JOIN Influencer_Categories ic ON i.influencer_id = ic.influencer_id
    LEFT JOIN Categories c ON ic.category_id = c.category_id
    WHERE i.name LIKE ? OR i.bio LIKE ?
    ${platform ? 'AND FIND_IN_SET(?, GROUP_CONCAT(DISTINCT p.platform_name))' : ''}
    ${category ? 'AND FIND_IN_SET(?, GROUP_CONCAT(DISTINCT c.category_name))' : ''}
    ${city ? 'AND i.city = ?' : ''}
    GROUP BY i.influencer_id
  `;
  
  let values = [`%${searchTerm}%`, `%${searchTerm}%`];
  
  if (platform) values.push(platform);
  if (category) values.push(category);
  if (city) values.push(city);
  
  db.query(query, values, (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    res.status(200).json(results);
  });
});

// Giriş yapma API'si
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
  db.query(sql, [email, password], (err, data) => {
    if (err) {
      console.error('Database query error:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    if (data.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    const user = data[0];
    return res.status(200).json({ message: 'Login successful', user });
  });
});

// Kullanıcı ekleme endpoint'i
app.post('/users', (req, res) => {
  const { name, surname , email, password } = req.body;
  const sql = `INSERT INTO users (name, surname, email, password) VALUES (?, ?, ?, ?)`;
  const values = [name, surname, email, password];
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Veritabanına ekleme işlemi sırasında bir hata oluştu');
    } else {
      console.log('Kullanıcı başarıyla eklendi');
      res.status(200).json({ id: result.insertId });
    }
  });
});

// Twitter verilerini çekme endpoint'i
app.get('/api/twitter/:username', async (req, res) => {
  const { username } = req.params;
  try {
    const userDataResponse = await twitterClient.get('users/show', { screen_name: username });
    res.json(userDataResponse);
  } catch (error) {
    console.error('Error fetching Twitter data:', error);
    res.status(500).json({ error: 'Error fetching Twitter data' });
  }
});

// Instagram verilerini çekme endpoint'i
app.get('/api/instagram/:username', async (req, res) => {
  const { username } = req.params;
  const INSTAGRAM_ACCESS_TOKEN = 'IGQWRPNzFxb2NuLUtHMk9VemFzWDVhUWl3dk5rdDBzZAXBmMFJ1QzJfczgtUHhGUWQ2UWhkd1ZAhY0lHZA0c4ZAjc0aEJJd0RsQ0RLQnZAaOUJnVmN5SDBQc0xUc3lUQUNOMjk3LWF2UF9aMl8xRlZAJdFR0RGJuZAi0tTmMZD';
  try {
    const userDataResponse = await axios.get(`https://graph.instagram.com/${username}?fields=id,username,media_count,followers_count,follows_count&access_token=${INSTAGRAM_ACCESS_TOKEN}`);
    res.json(userDataResponse.data);
  } catch (error) {
    console.error('Error fetching Instagram data:', error);
    res.status(500).json({ error: 'Error fetching Instagram data' });
  }
});

// Server başlatma
app.listen(port, () => {
  console.log(`Backend server started on http://localhost:${port}`);
});
