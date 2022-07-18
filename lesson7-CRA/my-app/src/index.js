import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

let text = 'Hello World';
const elem = (
  <div>
    <h2>Some text: {text} {2+2}</h2>
    <input type="text"/>
    <button>Click</button>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);


