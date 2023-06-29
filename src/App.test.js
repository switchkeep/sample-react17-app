//after
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function AppWithCallbackAfterRender() {
  useEffect(() => { console.log('rendered'); });
  return <App />;
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  const root = ReactDOM.createRoot(div);
  root.render(<AppWithCallbackAfterRender />);
});