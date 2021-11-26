import React from 'react';

function Test() {
  console.log('Test rendered');
  return <div>Test</div>;
}

export default React.memo(Test);
