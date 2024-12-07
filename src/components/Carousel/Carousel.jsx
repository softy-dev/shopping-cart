import styles from './Carousel.module.css';
import picture from '../../assets/picture.jpg';
import picture2 from '../../assets/picture2.jpg';
import picture3 from '../../assets/picture3.jpg';
import { useState, useEffect } from 'react';

export default function Carousel() {
  const [count, setCount] = useState(0);
  const contents = [
    {
      src: picture,
      heading: 'BE A CHERRY ON PIE IN ANY SITUATION',
      text: 'Experiment, mix and showcase colors, textures and styles. Be yourself. Leave your impression.',
    },
    {
      src: picture2,
      heading: 'ADD SOME CHIC TO YOUR LOOK',
      text: 'Allow yourself to express your uniqueness with bold combinations.',
    },
    {
      src: picture3,
      heading: 'EMBRACE YOUR STYLE',
      text: 'Capture the essence of your personality through the right wardrobe choices.',
    },
  ];

  const theme = styles[`theme${count}`];
  const divider = `${styles.divider} ${theme}`;
  const button = `${styles.button} ${theme}`;

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % contents.length);
    }, 9000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <article className={styles.carousel}>
      {contents.map((item, index) => (
        <div
          className={count === index ? styles['visible-text'] : styles['invisible-text']}
          key={index}
        >
          <h2 className={`${styles.headline}`}>{item.heading}</h2>
          <div
            className={divider}
          ></div>
          <p className={styles.text}>{item.text}</p>
          <button
            type="button"
            name="carousel-btn"
            className={button}
          >
            FIND OUT MORE
          </button>
        </div>
      ))}
      <div className={styles['img-container']}>
        {contents.map((item, index) => (
          <img
            key={index}
            className={
              count === index ? styles['visible-img'] : styles['invisible-img']
            }
            src={item.src}
            alt=""
          />
        ))}
      </div>
    </article>
  );
}
