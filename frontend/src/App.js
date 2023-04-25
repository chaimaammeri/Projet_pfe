import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home';
import RHAdmin from './Pages/RHAdmin';
import RHReport from './Pages/RHReport';
import AdminManage from './Pages/AdminManage';
import AgentManage from './Pages/AgentManage';
import DeskManage from './Pages/DeskManage';
import BotManage from './Pages/BotManage';
import Login from './Pages/Login'



function App() {
    return (
        <div className='App'>
            <Routes>

                <Route path='/' element={<Home></Home>} />
                <Route path='/Login' element={<Login></Login>} />
                <Route path='/RHAdmin' element={<RHAdmin></RHAdmin>} />
                <Route path='/RHReport' element={<RHReport></RHReport>} />

                <Route path='/AdminManage' element={<AdminManage></AdminManage>} />
                <Route path='/AgentManage' element={<AgentManage></AgentManage>} />
                <Route path='/DeskManage' element={<DeskManage></DeskManage>} />
                <Route path='/BotManage' element={<BotManage></BotManage>} />


            </Routes>
        </div>
    );
}

export default App;
