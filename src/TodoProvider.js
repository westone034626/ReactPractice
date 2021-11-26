import React, { useContext, createContext, useReducer } from 'react';

const TodoContext = createContext();
const TodoDispatchContext = createContext();

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

export function useTodoDispatch() {
  return useContext(TodoDispatchContext);
}

function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, [
    { id: 1, name: 'seo' },
    { id: 2, name: 'song' },
  ]);

  console.log('TodoProvider rendered');

  return (
    <TodoContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
}

export default React.memo(TodoProvider);
