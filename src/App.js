import React, { useState, useMemo } from 'react';
import Form from './Form';
import List from './List';
import Test from './Test';
import TodoProvider from './TodoProvider';

export default function App() {
  const [dark, setDark] = useState(false);
  const themeStyle = {
    color: dark ? '#FFF' : '#000',
    backgroundColor: dark ? '#000' : '#FFF',
  };
  console.log('App rendered');
  return (
    <>
      <TodoProvider>
        <List />
        <Form />
      </TodoProvider>
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
