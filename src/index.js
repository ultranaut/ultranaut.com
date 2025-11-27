import React from 'react';
import ReactDOM from 'react-dom/client';
import Ultranaut from './components/Ultranaut';

// ReactDOM.render(<Ultranaut />, document.querySelector('#root'));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Ultranaut />
  </React.StrictMode>
)
