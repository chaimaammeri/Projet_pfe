import React from 'react';
import { Routes, Route } from "react-router-dom";
import Login from './Pages/Login';
import AdminProfil from './Pages/AdminProfil';
import UserManage from './Pages/UserManage';
import UserList from './Pages/UserList';
import AgentManage from './Pages/AgentManage';
import AgentList from './Pages/AgentList';
import DeskManage from './Pages/DeskManage';
import RHAdmin from './Pages/RHAdmin';
import RHReport from './Pages/RHReport';


function App() {
    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<Login></Login>} />
                <Route path='/AdminProfil' element={<AdminProfil></AdminProfil>} />

                <Route path='/UserManage' element={<UserManage></UserManage>} />
                <Route path='/UserList' element={<UserList></UserList>} />
                <Route path='/AgentManage' element={<AgentManage></AgentManage>} />
                <Route path='/AgentList' element={<AgentList></AgentList>} />
                <Route path='/DeskManage' element={<DeskManage></DeskManage>} />

                <Route path='/RHAdmin' element={<RHAdmin></RHAdmin>} />
                <Route path='/RHReport' element={<RHReport></RHReport>} />

            


            </Routes>
        </div>
    );
}

export default App;
