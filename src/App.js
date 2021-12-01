import React, { useState } from 'react';
import Test from './Test';
import TodoProviderWithChildren from './TodoProviderWithChildren';

export default function App() {
  const [dark, setDark] = useState(false);
  const themeStyle = {
    color: dark ? '#FFF' : '#000',
    backgroundColor: dark ? '#000' : '#FFF',
  };
  console.log('App rendered');
  return (
    <>
      <TodoProviderWithChildren />
      <button
        style={themeStyle}
        onClick={() => {
          setDark((prev) => !prev);
        }}
      >
        {dark ? '다크모드 off' : '다크모드 on'}
      </button>
      <Test />
    </>
  );
}

// React hook을 연습하며 작성한 코드에서 공부한 것들:

// 키워드: HOC, React.memo, useContext & React.memo, github code search

// 결론:
// 1. 컴포넌트 re-rendering 횟수에 너무 집착하지 말자.
// 2. HOC, useContext 사용 시의 React.memo와 useMemo, useCallback 사용법 등의 원리를 파악했던 시간이었다.
// 3. github의 go to file을 이용해 search를 하면 더욱 수월하게 찾으려는 파일을 검색할 수 있다. (react/facebook에서 reactMemo 찾을 때 수월)

// 1. 배경지식:
// React.memo를 컴포넌트에 두르면 HOC(High Order Component)가 return됩니다.
// 참고로 High Order Component는 컴포넌트를 인자로 받아 반환되는 새로운 컴포넌트를 의미합니다.

// 2. 문제 발생원인:
// App의 <List />는 매 렌더링마다 다릅니다. React.memo(List)는 매번 다른 ReactElement(HOC)를 반환하기 때문이죠.
// 하지만 이 ReactElement(HOC)는 List의 지난 prop을 기억해서 바뀌지 않았다면 기존의 List를 재활용합니다.
// 그래서 App 컴포넌트 입장에서는 List(List라고 쓰고 HOC라고 읽는다)를 매번 새로 만들어내는 것이지만 실제 화면에 렌더링되는 것은 기존 렌더링과 동일한 것이죠(List의 prop이 바뀌지 않는다면)
// 그런데 화면 입장에서는 기존 List가 재활용 된 것이지만 children을 prop으로 받는 TodoProvider 입장에서는 내부의 List로 인해 매번 re-rendering이 됩니다.

// 3. 더 나은 문제 해결방법:
// App에서 useMemo로 List를 감싸서 TodoProvider에게 넘겨줄 것이 아니라(re-rendering은 TodoProvider 컴포넌트인데 useMemo를 쓰는 곳은 App인 점,
// 새로운 로직이 등장할 경우 덕지덕지 코드가 바뀌는 점...) 새로운 Provider를 만들고 거기에 React.memo를 쓰는 것이다.
// 그런데 애초에 rendering 횟수를 고려하는 경우는 화면 상에서 문제가 발견될 때만...
// 그 외에는 너무 신경쓰지 말자(공식문서에서도 이렇게 얘기함), 런핏에서는 학습노트에서 타이핑 치는 곳의 업데이트가 화면 전체가 re-rendering 되버려서 인풋 필드에만 걸어두었음.

// 4. useMemo로 감싼 List가 todos에 따라 바뀌는 이유:
// App에서 useMemo로 List를 감쌌다고 해도 실제 List가 고정되는 것이 아니라
// HOC가 고정되는 것이고 HOC는 List의 React.memo에 의해서 prop의 변화를 감지해서 새로운 List를 rendering하는 것이다.

// 5. 그 외 알게된 점1:
// List나 Form에서 useContext를 호출하기 때문에 prop을 전달받는 것처럼 동작합니다.
// 그래서 useContext로 전달받는 Provider value의 값이 변경되면 React.memo로 감쌌다고해도 re-rendering 됩니다. (useState여도 마찬가지)
// 그런데 Provider의 value에 객체나 배열을 전달한다면 useMemo를 활용해서 전달해야합니다.
// 안그러면 Provider가 re-rendering 될 때마다 매번 새로운 object, array를 생성해서 전달하게 되고 매번 다른 prop을 전달받는 것처럼 평가되기 때문이죠.

// 6. 그 외 알게된 점2:
// React.memo 코드를 React github 코드에서 살펴보라고 조언해주셨다.
// 이런 일이 발생할때 코드 확인하는 습관 기르기.. 필수(go to file에서 파일명 쉽게 검색가능)
