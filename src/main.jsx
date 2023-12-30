import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './component/Home/Home';
import Jobs from './component/AppliedJobs/Jobs';
import ErrorPage from './errorPage/ErrorPage';
import JobDetails from './component/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/jobs",
        element: <Jobs></Jobs>
      },
      {
        path: "/job/:id",
        element:<JobDetails></JobDetails>,
        loader: () => fetch('../public/jobs.json')
      }
    ]
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
