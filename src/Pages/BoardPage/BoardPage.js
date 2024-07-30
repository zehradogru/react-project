import React, { useState } from 'react';
import styles from './BoardPage.module.css';

const initialAds = [
  {
    id: 1,
    title: 'Instagram da yeni açtigim bebek giyim magazami hareketlendirmek istiyorum',
    description: 'Bebek giyim magazimin Instagram taninmasi ve alisveris yapilabilen bir sayfa haline gelmesini istiyorum',
    platforms: ['Instagram'],
    applicationLink: '#'
  },
  {
    id: 2,
    title: 'Yayincilar Araniyor',
    description: 'Sosyal medya Platformlarinda yayincilik yapicak kadin yüzler arainiyor.',
    platforms: ['Instagram', 'TikTok'],
    applicationLink: '#'
  },
  {
    id: 3,
    title: 'Kaliteli el omuz sirt kadin çantalari içerik influencer tarafindan olusturulacak',
    description: 'Yaza özel yüzden 15 e varan indirimler , kadin omuz el kol ve sirt çantalari , cüzdan , kartlik , sadece en yeni en trend modelleri , içerik influencer tarafindan olusturulacaktir',
    platforms: ['Instagram'],
    applicationLink: '#'
  },
  {
    id: 4,
    title: 'Yayincilik',
    description: 'Yayincilik Yapabilcek kadin influencerlar ariyoruz',
    platforms: ['TikTok'],
    applicationLink: '#'
  },
  {
    id: 5,
    title: 'Yapay Zeka Uygulamasi Komisyonlu Satis',
    description: 'https://bilgechatbot.com/ Web sitemizde aktif olan yapay zekamizin pazarlanmasi konusunda komisyonlu Satis veriyoruz, her Satis için 1.000 TL dir komisyon tutarimiz',
    platforms: ['Website'],
    applicationLink: '#'
  }
];

const BoardPage = () => {
  const [ads, setAds] = useState(initialAds);

  return (
    <div className={styles.container}>
      <h1>INFLUENCER İLAN PANOSU</h1>
      <h2>MARKALAR İLAN VERİYOR - INFLUENCERLAR BAŞVURUYOR!</h2>
      <p>İlan vermek markalar için tamamen ücretsizdir. Ücret ödemesi/Ürün hediyesi, anlaşılan içerik üreticisine doğrudan marka tarafından yapılır. Bu platform üzerinde yapılabilecek pek çok işlem ücretsizdir. İş birliği üzerinden komisyon alınmamaktadır!</p>
      <h3>ÜCRETSİZ İLAN VER</h3>
      <form className={styles.form}>
        {/* İlan verme formu buraya eklenebilir */}
      </form>
      <h3>İLANLAR</h3>
      <div className={styles.adsContainer}>
        {ads.map(ad => (
          <div key={ad.id} className={styles.adCard}>
            <h4>{ad.title}</h4>
            <p>{ad.description}</p>
            <p><strong>Platformlar:</strong> {ad.platforms.join(', ')}</p>
            <a href={ad.applicationLink} className={styles.applyLink}>Başvur</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardPage;
