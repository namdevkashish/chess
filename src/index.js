import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/index.css';
import './styles/board.css';
import './styles/counter.css';
import './styles/settings.css';
import './styles/timer.css';
import './styles/utilities.css';
import './styles/pawn_promotion.css';
import './styles/switch.css';
import './styles/keyboard_control.css'
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
