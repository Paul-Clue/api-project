import React from 'react';
import routes from '../../routes';

function App() {
  return (
    <>
      <header>
        <h1>App Header</h1>
      </header>
      <div>
        {routes()}
      </div>
    </>
  );
}

export default App;
