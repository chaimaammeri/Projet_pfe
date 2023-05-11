import React, { Component, useEffect, useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import axios from 'axios';

const RHReport = () => {

const [employee, setEmployee] = useState([]);

useEffect(() => {
const fetchAllEmployee = async () => {
try {
const res = await axios.get("http://localhost:3001/RHReport");
setEmployee(res.data);
} catch(err) {
console.log(err);
}
};
fetchAllEmployee();
}, []);

return (
<div>
<Header />
<div className='bodyy'>
<main className="main">
<section className="table_header">
<h3>The List Of Employees</h3>
</section>
<section className="table_body">
<table className='tab'>
<thead className='thead'>
  <tr className='tr'>
    <th className='th'>ID</th>
    <th className='th'>First Name</th>
    <th className='th'>Last Name</th>
    <th className='th'>Email</th>
    <th className='th'>Manager</th>
    <th className='th'>NID</th>
    <th className='th'>Salary</th>
    <th className='th'>Title</th>
    <th className='th'>StartDate</th>
    <th className='th'>EndDate</th>
  </tr>
</thead>
<tbody className='tbody'>
  {employee.map((row, index) => (
    <tr className='tr' key={index}>
      <td className='td'><strong>{row.ID_Emp}</strong></td>
      <td className='td'>{row.FirstName_Emp}</td>
      <td className='td'>{row.LastName_Emp}</td>
      <td className='td'>{row.Email_Emp}</td>
      <td className='td'>{row.Manager_Emp}</td>
      <td className='td'>{row.NID}</td>
      <td className='td'>{row.Salary_Emp}</td>
      <td className='td'>{row.Title_Emp}</td>
      <td className='td'>{row.StartDate}</td>
      <td className='td'>{row.EndDate}</td>
    </tr>
  ))}
</tbody>
</table>
</section>
</main>
<br />
<br />
</div>
<Footer />
</div>
);
};

export default RHReport;