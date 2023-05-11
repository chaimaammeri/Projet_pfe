import React, { Component, useEffect, useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import axios from 'axios';


const AgentList = () =>  {
  
const [agent, setAgent] = useState([]);

useEffect(() => {
const fetchAllAgent = async () => {
try {
const res = await axios.get("http://localhost:3001/AgentList");
setAgent(res.data);
} catch(err) {
console.log(err);
}
};
fetchAllAgent();
}, []);

        return (
            <div>
            <Header />
            <div className='bodyy' >
  <main className="main">
  <section className="table_header" >
   
    <h3>The List Of Agents</h3>
  </section>
  <section className="table_body">
    <table className='tab'>
      <thead className='thead'>
        <tr className='tr'>
          <th className='th'>ID</th>
          <th className='th'>First Name</th>
          <th className='th'>Last Name</th>
          <th className='th'>Email</th>
          <th className='th'>Adress</th>
          <th className='th'>Desk</th>
          <th className='th'>Phone</th>
          <th className='th'>Status</th>
          <th className='th'>Unit</th>
          <th className='th'>Language</th>

        </tr>
      </thead>
      <tbody className='tbody'>
  {agent.map((row, index) => (
    <tr className='tr' key={index}>
      <td className='td'><strong>{row.ID_Agent}</strong></td>
      <td className='td'>{row.FirstName_Ag}</td>
      <td className='td'>{row.LastName_Ag}</td>
      <td className='td'>{row.Email_Ag}</td>
      <td className='td'>{row.Adress_Ag}</td>
      <td className='td'>{row.Desk_Ag}</td>
      <td className='td'>{row.Phone_Ag}</td>
      <td className='td'>{row.Status_Ag}</td>
      <td className='td'>{row.Unit_Ag}</td>
      <td className='td'>{row.Language_Ag}</td>
    </tr>
  ))}
</tbody>
    </table>
  </section>
</main>
<br></br>
   <br></br>
   </div>
   <Footer></Footer>
          </div>
       );
      };
      
      export default AgentList;