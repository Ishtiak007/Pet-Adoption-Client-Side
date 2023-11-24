import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routess/Routers';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-[1450px] mx-auto'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
