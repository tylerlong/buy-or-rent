import React from 'react';
import {createRoot} from 'react-dom/client';

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Buy or Rent</h1>
        Hello world!
      </>
    );
  }
}

const container = document.createElement('div');
document.body.appendChild(container);
const root = createRoot(container);
root.render(<App />);
