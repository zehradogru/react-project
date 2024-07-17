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

// Kullanıcı ekleme endpoint'i
app.post('/users', (req, res) => {
  const { username, email, password } = req.body;

  const sql = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;
  const values = [username, email, password];

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

// Server başlatma
app.listen(port, () => {
  console.log(`Backend server started on http://localhost:${port}`);
});
