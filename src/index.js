import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

function AppWithCallbackAfterRender() {  
  useEffect(() => {    
    console.log('rendered');  
  });  
  return <App />
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<AppWithCallbackAfterRender />);
registerServiceWorker();