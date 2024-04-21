import ReactDOM from 'react-dom/client'
import './globals.css'

import { BrowserRouter } from "react-router-dom";
import MainRoutes from './routes.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <MainRoutes />
  </BrowserRouter>,
)
