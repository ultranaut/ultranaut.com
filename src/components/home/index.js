import React from 'react';
import styles from './Home.module.css';

// import background images
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('./backgrounds', false, /\.(png|jpe?g|svg)$/));

// const images =[bee, porchFlowers, starField];
const randomImage = images[Math.floor(Math.random() * images.length)];

const Home = () => {
  return (
    <div
      className="home"
      style={{
        backgroundImage: `url(${randomImage})`
      }}>
      <header className={styles.header}>
        <h1 className={styles.title}>ultranaut</h1>
      </header>
    </div>
  );
};

export default Home;
