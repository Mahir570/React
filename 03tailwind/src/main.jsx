import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.jsx'
import Card from './Card.jsx'
import Value from './Value.jsx';

const props={
  username:"Jaat",
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Value/>
    
    <Card/>

    
  </StrictMode>,
)
