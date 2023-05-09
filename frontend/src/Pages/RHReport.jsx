import React, { Component } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import axios from 'axios';
import backgroundImg from '../Img/back.jpg';


export default class RHReport extends Component  {
    // constructor(props){
    //     super(props)
    //     this.state={
    //         employee:[]
    //     }
    // }
    // componentDidMount(){
    //     axios.get('http://localhost:3000/RHReport').then((data)=>this.setState({employee:data.data}))

    // }

    render() {
        return (
            <div>
            <Header />
            {/* {this.state.products.map((item,key)=>{ */}

            {/* })} */}
            {/* <div className='bodyy'> */}

            <div className='bodyy' >
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
        <tr className='tr'>
          <td className='td'>
            <strong>122365478</strong>
          </td>
          <td className='td'>chaima</td>
          <td className='td'>ammeri</td>
          <td className='td'>chaimaammeri@gmail.com</td>
          <td className='td'>mehdi khamlia</td>
          <td className='td'>12365478</td>
          <td className='td'>2500</td>
          <td className='td'>develloper</td>
          <td className='td'>01-02-2023</td>
          <td className='td'>15-05-2023</td>
        </tr>
        <tr className='tr'>
          <td className='td'>
            <strong>122365478</strong>
          </td>
          <td className='td'>chaima</td>
          <td className='td'>ammeri</td>
          <td className='td'>chaimaammeri@gmail.com</td>
          <td className='td'>mehdi khamlia</td>
          <td className='td'>12365478</td>
          <td className='td'>2500</td>
          <td className='td'>develloper</td>
          <td className='td'>01-02-2023</td>
          <td className='td'>15-05-2023</td>
        </tr>
        <tr className='tr'>
          <td className='td'>
            <strong>122365478</strong>
          </td>
          <td className='td'>chaima</td>
          <td className='td'>ammeri</td>
          <td className='td'>chaimaammeri@gmail.com</td>
          <td className='td'>mehdi khamlia</td>
          <td className='td'>12365478</td>
          <td className='td'>2500</td>
          <td className='td'>develloper</td>
          <td className='td'>01-02-2023</td>
          <td className='td'>15-05-2023</td>
        </tr>

        <tr className='tr'>
          <td className='td'>
            <strong>122365478</strong>
          </td>
          <td className='td'>chaima</td>
          <td className='td'>ammeri</td>
          <td className='td'>chaimaammeri@gmail.com</td>
          <td className='td'>mehdi khamlia</td>
          <td className='td'>12365478</td>
          <td className='td'>2500</td>
          <td className='td'>develloper</td>
          <td className='td'>01-02-2023</td>
          <td className='td'>15-05-2023</td>
        </tr>
        <tr className='tr'>
          <td className='td'>
            <strong>122365478</strong>
          </td>
          <td className='td'>chaima</td>
          <td className='td'>ammeri</td>
          <td className='td'>chaimaammeri@gmail.com</td>
          <td className='td'>mehdi khamlia</td>
          <td className='td'>12365478</td>
          <td className='td'>2500</td>
          <td className='td'>develloper</td>
          <td className='td'>01-02-2023</td>
          <td className='td'>15-05-2023</td>
        </tr>
        <tr className='tr'>
          <td className='td'>
            <strong>122365478</strong>
          </td>
          <td className='td'>chaima</td>
          <td className='td'>ammeri</td>
          <td className='td'>chaimaammeri@gmail.com</td>
          <td className='td'>mehdi khamlia</td>
          <td className='td'>12365478</td>
          <td className='td'>2500</td>
          <td className='td'>develloper</td>
          <td className='td'>01-02-2023</td>
          <td className='td'>15-05-2023</td>
        </tr>
        <tr className='tr'>
          <td className='td'>
            <strong>122365478</strong>
          </td>
          <td className='td'>chaima</td>
          <td className='td'>ammeri</td>
          <td className='td'>chaimaammeri@gmail.com</td>
          <td className='td'>mehdi khamlia</td>
          <td className='td'>12365478</td>
          <td className='td'>2500</td>
          <td className='td'>develloper</td>
          <td className='td'>01-02-2023</td>
          <td className='td'>15-05-2023</td>
        </tr>

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
        }}