import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';  // import the dynamic routes
import './index.css';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename="/downloader">
    <AppRoutes />
  </BrowserRouter>
);
