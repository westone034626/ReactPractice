import './App.css';
import styles from './App.module.css';
import { useRef, useEffect, useState } from 'react';
import _ from 'lodash';

function App() {
  const [focusIndex, setFocusIndex] = useState(0);
  const focusIoIndex = useRef(0);
  const stepItemListRef = useRef(null);
  const graphicItems = [
    { imageFileName: '00.png' },
    { imageFileName: '01.png' },
    { imageFileName: '02.png' },
    { imageFileName: 'bird.gif' },
    { imageFileName: '03.png' },
    { imageFileName: '04.png' },
    { imageFileName: '05.png' },
    { imageFileName: '06.png' },
    { imageFileName: '07.png' },
    { imageFileName: '08.png' },
  ];
  const stepItems = [
    {
      content: `일분이를 소개한다.

    1분코딩 의 마스코트이며 제주 바닷가에 사는 개발자인 일분이는
    코로나19 이전부터 재택근무를 해왔지만, 코로나19는 일분이의
    생활에도 변화를 주었다.
    `,
    },
    { content: `아침에 일어나면, 커피를 내리며 정신을 차린다.` },
    {
      content: `사회적 거리두기를 위해 한적한 바닷길쪽으로 러닝을 한다.
    가끔 만나는 바닷새와 눈인사를 나눈다.`,
    },
    { content: `맞다, 트위터의 걔.` },
    { content: `운동을 마치고 집에 돌아와 작업을 시작한다.` },
    {
      content: `밥은 집에서 먹거나, 테이크아웃이 가능한 메뉴를 골라 탁 트인
              야외에서 먹는다. 물론 사회적 거리두기를 하기 위함이다.`,
    },
    {
      content: `보통 오후 작업은 집 근처의 일하기 좋은 카페에서 해왔지만, 코로나19
    이후에는 집에서 하는 날이 많아졌다.
    `,
    },
    {
      content: `라면 매니아 답게 유튜브로

    라면소녀

  채널을 보며 간식으로 라면을 먹는다.
  `,
    },
    {
      content: `자기 전, 가끔

    요가소년

  채널을 보며 요가를 한다.
  `,
    },
    {
      content: `일과를 마치고
    폰질을 한다 잠자리에
    든다.
    `,
    },
  ];

  useEffect(() => {
    const io = new IntersectionObserver((entries, observer) => {
      focusIoIndex.current = _.chain(stepItemListRef.current.children)
        .map((stepItem) => stepItem)
        .value()
        .indexOf(entries[0].target);
      console.log('focusIoIndex: ', focusIoIndex);
    });
    _.chain(stepItemListRef.current.children)
      .map((stepItem) => stepItem)
      .forEach((stepItem) => {
        io.observe(stepItem);
      })
      .value();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      console.log(
        focusIoIndex.current ? focusIoIndex.current - 1 : 0,
        focusIoIndex.current + 2
      );
      _.chain(stepItemListRef.current.children)
        .map((stepItem) => stepItem)
        .slice(
          focusIoIndex.current ? focusIoIndex.current - 1 : 0,
          focusIoIndex.current + 2
        )
        .forEach((stepItem, idx) => {
          if (
            stepItem.getBoundingClientRect().top > window.innerHeight * 0.1 &&
            stepItem.getBoundingClientRect().top < window.innerHeight * 0.8
          ) {
            setFocusIndex(idx);
          }
        })
        .value();
    });
  }, []);
  return (
    <div className={styles.body}>
      <div className={styles.header}>
        <div className={styles.globalWidth}>
          <h1 className={styles.pageTitle}>
            코로나19 시대, 제주 사는 개발자의 하루
          </h1>
          <p>
            이 페이지는 BBC 비주얼저널리즘 팀에서 제작한
            <a
              href="https://www.bbc.com/korean/resources/idt-48d3c9a7-4063-4289-9726-611b5ea9d7b5"
              target="_blank"
            >
              '재택근무의 일상화'... 코로나19가 바꿀 사무실의 미래
            </a>
            페이지를 비슷하게 구현해 본 개발 예제입니다. 시각적 기능만 비슷하게
            만들어 본 것이므로, 개발 방식은 전혀 다를 수도 있습니다.
            <br />
            아래의 내용은 제주 바닷가에 사는 개발자인 저의 실제 일상이기도
            하지만, 강의영상 예제로 만든 페이지이므로 내용에 큰 의미를 두고 보실
            필요는 없습니다 ㅎㅎ
            <br />
            밑으로 스크롤 해봅시다.
          </p>
        </div>
      </div>
      <div className={styles.scrollContent}>
        <div className={styles.scrollGraphic}>
          {graphicItems.map((graphicItem, idx) => (
            <div
              key={idx}
              className={
                focusIndex === idx
                  ? `${styles.graphicItem} ${styles.visible}`
                  : styles.graphicItem
              }
            >
              <img
                className={styles.sceneImg}
                src={`img/${graphicItem.imageFileName}`}
                alt=""
              />
            </div>
          ))}
        </div>
        <div
          ref={stepItemListRef}
          className={`${styles.scrollText} ${styles.globalWidth}`}
        >
          {stepItems.map((stepItem, idx) => (
            <div key={idx} className={styles.step}>
              <p style={{ whiteSpace: 'pre-line' }}>{stepItem.content}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={`${styles.normalContent} ${styles.globalWidth}`}>
        <h2>도시를 떠나는 사람들</h2>
        <p style={{ whiteSpace: 'pre-line' }}>
          {`원격근무 하시는 개발자 디자이너분들, 제주로 오세요. 진짜 좋아요. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ullam
          culpa ab, laborum repellat ut quae deleniti nostrum sapiente illum!
          `}
        </p>
        <h2>언택트 시대가 온다</h2>
        <p style={{ whiteSpace: 'pre-line' }}>
          {`언택트(Untact)'란 '콘택트(contact: 접촉하다)'에서 부정의 의미인
          '언(un-)을 합성한 말로, 기술의 발전을 통해 비대면으로 이루어지는 활동
          경향을 의미한다. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Nam provident voluptatum numquam dolorum, quod odio.
          `}
        </p>
        <h2>내일은 어떤 모습일까</h2>
        <p style={{ whiteSpace: 'pre-line' }}>
          {`똑같겠지 다를게 있나 Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Qui impedit numquam atque quidem quos facere
          obcaecati deleniti labore culpa esse nostrum dicta earum rem ducimus,
          voluptates eligendi voluptate exercitationem dolorem!
          `}
        </p>
      </div>
      <footer className={styles.globalFooter}>
        <a
          href="https://www.youtube.com/channel/UC_s1FC7s5YVwDImzv-WG93Q"
          target="blank"
        >
          1분코딩
        </a>
      </footer>
    </div>
  );
}

export default App;
