import React, { Component } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import axios from 'axios';
import backgroundImg from '../Img/phot.jpg';


export default class AgentList extends Component  {
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
          <th className='th'>Phone</th>
          <th className='th'>Desk</th>
          <th className='th'>Status</th>
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
          <td className='td'>Ariana</td>
          <td className='td'>25478639</td>
          <td className='td'>Renault</td>
          <td className='td'>Activated</td>
        </tr>
        <tr className='tr'>
          <td className='td'>
            <strong>122365478</strong>
          </td>
          <td className='td'>chaima</td>
          <td className='td'>ammeri</td>
          <td className='td'>chaimaammeri@gmail.com</td>
          <td className='td'>Ariana</td>
          <td className='td'>25478639</td>
          <td className='td'>Renault</td>
          <td className='td'>Activated</td>
        </tr>
        <tr className='tr'>
          <td className='td'>
            <strong>122365478</strong>
          </td>
          <td className='td'>chaima</td>
          <td className='td'>ammeri</td>
          <td className='td'>chaimaammeri@gmail.com</td>
          <td className='td'>Ariana</td>
          <td className='td'>25478639</td>
          <td className='td'>Renault</td>
          <td className='td'>Activated</td>
        </tr>
        <tr className='tr'>
          <td className='td'>
            <strong>122365478</strong>
          </td>
          <td className='td'>chaima</td>
          <td className='td'>ammeri</td>
          <td className='td'>chaimaammeri@gmail.com</td>
          <td className='td'>Ariana</td>
          <td className='td'>25478639</td>
          <td className='td'>Renault</td>
          <td className='td'>Activated</td>
        </tr>
        <tr className='tr'>
          <td className='td'>
            <strong>122365478</strong>
          </td>
          <td className='td'>chaima</td>
          <td className='td'>ammeri</td>
          <td className='td'>chaimaammeri@gmail.com</td>
          <td className='td'>Ariana</td>
          <td className='td'>25478639</td>
          <td className='td'>Renault</td>
          <td className='td'>Activated</td>
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