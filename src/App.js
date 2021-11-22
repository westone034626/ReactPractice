import React, { useState, useRef, useEffect } from 'react';

export default function App() {
  const [resourceType, setResourceType] = useState('posts');
  console.log('render');
  useEffect(() => {
    console.log('resourceType changed');
  }, [resourceType]);

  return (
    <>
      <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('Users')}>Users</button>
        <button onClick={() => setResourceType('Comments')}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
    </>
  );
}
