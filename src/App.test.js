//after
import React, { useEffect } from 'react';
import { createRoot } from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  function AppWithCallbackAfterRender() { useEffect(() => { console.log('rendered'); }); return <App />;}
  const root = createRoot(div);
  root.render(<AppWithCallbackAfterRender />);
});