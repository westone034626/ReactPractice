import React, { useState } from 'react';
import styles from './Carousel.module.css';

import firstImage from './assets/images/firstImage.jpg';
import secondImage from './assets/images/secondImage.jpg';
import thirdImage from './assets/images/thirdImage.jpg';

export default function Carousel() {
  const arr = [firstImage, secondImage, thirdImage];
  const [index, setIndex] = useState(0);
  return (
    <>
      <div
        style={{
          width: '100%',
          maxWidth: '1000px',
          overflow: 'hidden',
          margin: 'auto',
          position: 'relative',
        }}
      >
        <div
          style={{
            width: '100%',
            display: 'flex',
            transform: `translate(-${index * 100}%)`,
            transition: 'transform 0.5s',
          }}
        >
          {arr.map((i, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${i})` }}
              className={styles.cardImage}
            ></div>
          ))}
        </div>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '20px',
          }}
        >
          <button
            style={{
              width: '10vw',
              height: '10vw',
              maxWidth: '100px',
              maxHeight: '100px',
            }}
            onClick={() => {
              setIndex((prev) => {
                return prev > 0 ? prev - 1 : prev;
              });
            }}
          >
            {'<'}
          </button>
          <button
            style={{
              width: '10vw',
              height: '10vw',
              maxWidth: '100px',
              maxHeight: '100px',
            }}
            onClick={() => {
              setIndex((prev) => {
                return prev < arr.length - 1 ? prev + 1 : prev;
              });
            }}
          >
            {'>'}
          </button>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {arr.map((i, index) => (
          <button
            style={{ width: '100px', height: '100px' }}
            key={index}
            onClick={() => {
              setIndex(index);
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
}
