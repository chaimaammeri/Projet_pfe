import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import './index.css'; 
import Home from './Pages/Home';
import RHAdmin from './Pages/RHAdmin';
import RHReport from './Pages/RHReport';
import AdminManage from './Pages/AdminManage';
import AgentManage from './Pages/AgentManage';
import DeskManage from './Pages/DeskManage';
import BotManage from './Pages/BotManage';
import { Login } from './Pages/Login';
import Inbox from './Pages/Inbox';

const router = createBrowserRouter([
  { path: "/",
    element: <Home></Home>,
    errorElement: <h1>Sorry .......</h1>,
},

  { path: "/Login",
  element: <Login></Login>, 
},

{ path: "/Inbox",
element: <Inbox></Inbox>, 
},

  { path: "/RHAdmin",
  element: <RHAdmin></RHAdmin>, 
},

{ path: "/RHReport",
element: <RHReport></RHReport>, 
},

{ path: "/AdminManage",
element: <AdminManage></AdminManage>,
},

{ path: "/AgentManage",
element: <AgentManage></AgentManage>,
},

{ path: "/DeskManage",
element: <DeskManage></DeskManage>,
},

{ path: "/BotManage",
element: <BotManage></BotManage>, 
},

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);