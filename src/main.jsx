import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';

import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routess/Routers';
import AuthProvider from './Providers/AuthProvider';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <div className='max-w-[1450px] mx-auto'>
            <RouterProvider router={router} />
          </div>
        </HelmetProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
