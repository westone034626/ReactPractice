import React, { useState } from 'react';
import styles from './Carousel.module.css';

import firstImage from '../assets/images/firstImage.jpg';
import secondImage from '../assets/images/secondImage.jpg';
import thirdImage from '../assets/images/thirdImage.jpg';

export default function Carousel() {
  const arr = [firstImage, secondImage, thirdImage];
  const [index, setIndex] = useState(0);
  return (
    <>
      {/* 캐러셀의 viewport */}
      <div
        style={{
          width: '100%',
          maxWidth: '1000px',
          // *overflow: hidden을 아래 div에 넣으면 이미지가 1개만 보이게 됨
          overflow: 'hidden',
          margin: 'auto',
          position: 'relative',
        }}
      >
        {/* 캐러셀의 내용물을 전부 포함하고 있는 부분(해당 코드에서는 3개의 이미지를 담고 있음) */}
        <div
          style={{
            width: '100%',
            // 각각의 cardImage에 flexShrink: 0을 설정해놓았음
            display: 'flex',
            // transistion이나 animation과의 조합을 생각했을 때 transform이 나음
            transform: `translate(-${index * 100}%)`,
            transition: 'transform 0.5s',
          }}
        >
          {arr.map((i, index) => (
            // 캐러셀 내에서 표현하려는 최소 단위 내용물(1개 이미지)
            <div
              key={index}
              style={{ backgroundImage: `url(${i})` }}
              className={styles.cardImage}
            ></div>
          ))}
        </div>
        {/* 캐러셀의 viewport 위에 덧씌워진 layer(좌우 화살표 버튼 배치용) */}
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
          {/* 좌 버튼 */}
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
          {/* 우 버튼 */}
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
      {/* 캐러셀을 버튼으로 조작하는 컨트롤러 */}
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
