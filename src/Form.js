import React, { useRef, useState } from 'react';
import { useTodoDispatch } from './TodoProvider';

function Form() {
  const dispatch = useTodoDispatch();
  //   const inputRef = useRef();
  const [name, setName] = useState('');
  function onSubmit(event) {
    event.preventDefault();
    // dispatch({ type: 'ADD', payload: { name: inputRef.current.value } });
    dispatch({ type: 'ADD', payload: { name } });
    // inputRef.current.value = '';
    setName('');
  }
  console.log('Form rendered');
  return (
    <form onSubmit={onSubmit}>
      {/* <input ref={inputRef} /> */}
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

export default React.memo(Form);
