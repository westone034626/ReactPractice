import './App.css';
import styles from './App.module.css';
import { useRef, useEffect, useState } from 'react';
import useLocalStorage from './useLocalStorage';
import _ from 'lodash';
import useUpdateLogger from './useUpdateLogger';

function App() {
  const [value, setValue] = useLocalStorage('name', '');
  const handleInput = (event) => {
    setValue(event.target.value);
  };
  useUpdateLogger(value);
  return (
    <div>
      <div>data: {value}</div>
      <input value={value} onChange={handleInput} />
    </div>
  );
}

export default App;
