import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

function AppWithCallbackAfterRender() {  
  useEffect(() => {    
    console.log('rendered');  
  });  
  return <App />
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<AppWithCallbackAfterRender />);
});