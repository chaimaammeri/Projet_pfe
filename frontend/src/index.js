import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import './index.css'; 
import Login  from './Pages/Login';
import AdminProfil from './Pages/AdminProfil';
import UserManage from './Pages/UserManage';
import UserList from './Pages/UserList';
import AgentManage from './Pages/AgentManage';
import AgentList from './Pages/AgentList';
import DeskManage from './Pages/DeskManage';
import RHAdmin from './Pages/RHAdmin';
import RHReport from './Pages/RHReport';



const router = createBrowserRouter([
{ path: "/",
element: <Login></Login>,
errorElement: <h1>Sorry .......</h1>,
},

{ path: "/AdminProfil",
element: <AdminProfil></AdminProfil>, 
},
{ path: "/UserManage",
element: <UserManage></UserManage>,
},
{ path: "/UserList",
element: <UserList></UserList>,
},

{ path: "/AgentManage",
element: <AgentManage></AgentManage>,
},
{ path: "/AgentList",
element: <AgentList></AgentList>,
},

{ path: "/DeskManage",
element: <DeskManage></DeskManage>,
},

  { path: "/RHAdmin",
  element: <RHAdmin></RHAdmin>, 
},

{ path: "/RHReport",
element: <RHReport></RHReport>, 
},


]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);