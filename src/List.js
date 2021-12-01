import React from 'react';
import { useTodo } from './TodoProvider';

const List = () => {
  const { state } = useTodo();
  console.log('List rendered');
  return (
    <ul>
      {state.map((i) => (
        <Item key={i.id} name={i.name} />
      ))}
    </ul>
  );
};

export default List;

const Item = React.memo(({ name }) => {
  console.log('Item rendered');
  return <li>{name}</li>;
});
