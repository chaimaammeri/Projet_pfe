import React, { Component, useEffect, useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import axios from 'axios';



const UserList = () =>  {
  
  const [user, setUser] = useState([]);
  
  useEffect(() => {
  const fetchAllUser = async () => {
  try {
  const res = await axios.get("http://localhost:3001/UserList");
  setUser(res.data);
  } catch(err) {
  console.log(err);
  }
  };
  fetchAllUser();
  }, []);
  
          return (
            <div>
            <Header />
            <div className='bodyy'>
  <main className="main"  >
  <section className="table_header" >
   
    <h3>The List Of Users</h3>
  </section>
  <section className="table_body">
    <table className='tab'>
      <thead className='thead'>
        <tr className='tr'>
          <th className='th'>ID</th>
          <th className='th'>First Name</th>
          <th className='th'>Last Name</th>
          <th className='th'>Email</th>
          <th className='th'>Password</th>
          <th className='th'>Adress</th>
          <th className='th'>Phone</th>
          <th className='th'>Desk</th>
          <th className='th'>Status</th>
          <th className='th'>Privilége</th>
          <th className='th'>Language</th>

        </tr>
      </thead>
      <tbody className='tbody'>
  {user.map((row, index) => (
    <tr className='tr' key={index}>
      <td className='td'><strong>{row.ID_Us}</strong></td>
      <td className='td'>{row.FirstName_Us}</td>
      <td className='td'>{row.LastName_Us}</td>
      <td className='td'>{row.Email_Us}</td>
      <td className='td'>{row.Password_Us}</td>
      <td className='td'>{row.Adress_Us}</td>
      <td className='td'>{row.Phone_Us}</td>
      <td className='td'>{row.Desk_Us}</td>
      <td className='td'>{row.Status_Us}</td>
      <td className='td'>{row.Privilége_Us}</td>
      <td className='td'>{row.Language_Us}</td>

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
    
    export default UserList;