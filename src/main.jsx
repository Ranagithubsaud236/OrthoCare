import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Static SEO tags in index.html are for non-JS crawlers; pages render their own via <Seo>.
document.querySelectorAll('[data-static-seo]').forEach((node) => node.remove());

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
