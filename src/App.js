import { initial } from 'lodash';
import React, { useState, useRef, useEffect, useReducer } from 'react';
import Item from './Item';

const count = 0;

function reducer(state, action) {
  return action(state);
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, count);

  return (
    <>
      Count: {state}
      <button onClick={() => dispatch((prev) => prev - 1)}>-</button>
      <button onClick={() => dispatch((prev) => prev + 1)}>+</button>
    </>
  );
}
