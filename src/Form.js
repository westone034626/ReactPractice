import React, { useRef } from 'react';
import { useTodoDispatch } from './TodoProvider';

function Form() {
  const dispatch = useTodoDispatch();
  const inputRef = useRef();
  function onSubmit(event) {
    event.preventDefault();
    dispatch({ type: 'ADD', payload: { name: inputRef.current.value } });
    inputRef.current.value = '';
  }
  console.log('Form rendered');
  return (
    <form onSubmit={onSubmit}>
      <input ref={inputRef} />
      <button type="submit">등록</button>
    </form>
  );
}

export default React.memo(Form);
