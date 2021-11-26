import React from 'react';
const Item = ({ controller }) => {
  const increment = () => {
    controller((prev) => prev + 1);
  };
  console.log('sdf');
  return (
    <>
      <div>Item</div>
      <button onClick={increment}>increment</button>
    </>
  );
};

export default React.memo(Item);
