import React from 'react';
import styles from './Home.module.css';
import bee from '../bee.jpg';
import porchFlowers from '../porch-flowers.jpg';
import starField from '../Star-field-hubble-deep.jpg';


const images =[bee, porchFlowers, starField];
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
