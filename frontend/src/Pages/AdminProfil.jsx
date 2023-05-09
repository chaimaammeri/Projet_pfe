import React from 'react';
import Header from '../Components/Header';
import luffyjeune from "../Img/luffyjeune.png"


const AdminProfil = () => {
  return (
      <div>
        <Header></Header>
     <div className="wrapper" >
  <div className="left">
  <div style={{marginTop:'60px'}}>
      <img className="pic" src={luffyjeune} alt='admin'  width={100}  />
    
      <h6>Web Developer</h6>
  </div>
  </div>
  <div className="right">
    <div className="info">
      <h3>Informations</h3>
      <div className="info_data">
        <div className="data">
          <h4>FirstName</h4>
          <p>Chaima</p>
        </div>
        <div className="data">
          <h4>LastName</h4>
          <p>Ammeri</p>
        </div>
      </div>
    </div>
    <div className="projects">
      <h3 />
      <div className="projects_data">
        <div className="data">
          <h4>ID</h4>
          <p>26369874</p>
        </div>
        <div className="data">
          <h4>Email</h4>
          <p>chaimaammeri@gmail.com</p>
        </div>
      </div>
    </div>
  </div>
</div>
<footer className="footAD">DXC Technology<sup> ©</sup></footer>
      </div>
  );
}


export default AdminProfil;
