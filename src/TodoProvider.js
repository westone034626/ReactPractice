import React, { useContext, createContext, useReducer, useMemo } from 'react';

const TodoContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [...state, newItem(action.payload.name)];
    default:
      return state;
  }
}

function newItem(text) {
  return { id: Date.now(), name: text };
}

export function useTodo() {
  return useContext(TodoContext);
}

function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, [
    { id: 1, name: 'seo' },
    { id: 2, name: 'song' },
  ]);

  console.log('TodoProvider rendered');

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}

export default TodoProvider;
