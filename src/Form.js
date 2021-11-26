import React, { useState } from 'react';
import { useTodo } from './TodoProvider';

function Form() {
  const { dispatch } = useTodo();
  const [name, setName] = useState('');
  function onSubmit(event) {
    event.preventDefault();
    dispatch({ type: 'ADD', payload: { name } });
    setName('');
  }
  console.log('Form rendered');
  return (
    <form onSubmit={onSubmit}>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button type="submit">등록</button>
    </form>
  );
}

export default Form;
