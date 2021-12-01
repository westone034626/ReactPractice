import React from 'react';
import Form from './Form';
import List from './List';
import TodoProvider from './TodoProvider';

const TodoProviderWithChildren = () => {
  console.log('TodoProviderWithChildren rendered');
  return (
    <TodoProvider>
      <List />
      <Form />
    </TodoProvider>
  );
};

export default React.memo(TodoProviderWithChildren);
