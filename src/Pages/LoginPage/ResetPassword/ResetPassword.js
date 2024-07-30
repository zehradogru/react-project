import React, { useState } from 'react';
import styles from './ResetPassword.module.css';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // E-posta gönderme işlemi burada yapılacak
    try {
      // E-posta adresine şifre sıfırlama bağlantısı gönder
      setEmailSent(true);
    } catch (error) {
      console.error('E-posta gönderilirken hata oluştu:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Reset Password</h2>
      {!emailSent ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Send Reset Link</button>
        </form>
      ) : (
        <p>A password reset link has been sent to your email address.</p>
      )}
    </div>
  );
};

export default ResetPassword;
