const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 5000; // Backend server'ının çalışacağı port

// MySQL bağlantısı
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'find-influencer'
});

app.use(cors());
app.use(express.json()); // JSON veri işleme için middleware

// MySQL bağlantısını başlat
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL connected...');
});


// Giriş yapma API'si
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Kullanıcıyı email ile bul
  const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
  db.query(sql, [email, password], (err, data) => {
    if (err) {
      console.error('Database query error:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    // Kullanıcı bulunamazsa
    if (data.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const user = data[0];

    // Giriş başarılı
    return res.status(200).json({ message: 'Login successful', user });
  });
});

// Kullanıcı ekleme endpoint'i
app.post('/users', (req, res) => {
  const { name, surname , email, password } = req.body;

  const sql = `INSERT INTO users (name, surname, email, password) VALUES (?, ?, ?, ?)`;
  const values = [name, surname, email, password];

  // Veritabanına ekleme işlemi
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Veritabanına ekleme işlemi sırasında bir hata oluştu');
    } else {
      console.log('Kullanıcı başarıyla eklendi');
      res.status(200).json({ id: result.insertId }); // Eklendikten sonra kullanıcı ID'sini geri gönder
    }
  });
});

// Giriş yapma API'si
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Kullanıcıyı email ile bul
  const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
  db.query(sql, [email, password], (err, data) => {
    if (err) {
      console.error('Database query error:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    // Kullanıcı bulunamazsa
    if (data.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const user = data[0];

    // Giriş başarılı
    return res.status(200).json({ message: 'Login successful', user });
  });
});

// Server başlatma
app.listen(port, () => {
  console.log(`Backend server started on http://localhost:${port}`);
});
