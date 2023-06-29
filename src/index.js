//after
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
registerServiceWorker();