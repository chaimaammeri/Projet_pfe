import React from 'react';
import Header from '../Components/Header';
import luffyjeune from "../Img/luffyjeune.png"


const AdminProfil = () => {
  return (
      <div>
        <Header></Header>
     <div className="wrapper" >
  <div className="left">
    <img className="pic" src={luffyjeune} alt='admin'  width={100} />

    <h5>Chaima Ammeri</h5>
    <p>Web Developer</p>
  </div>
  <div className="right">
    <div className="info">
      <h3>Informations</h3>
      <div className="info_data">
        <div className="data">
          <h4>ID</h4>
          <p>125469</p>
        </div>
        <div className="data">
          <h4>Email</h4>
          <p>chaimaammeri@gmail.com</p>
        </div>
      </div>
    </div>
    <div className="projects">
      <h3 />
      <div className="projects_data">
        <div className="data">
          <h4>Phone</h4>
          <p>26369874</p>
        </div>
        <div className="data">
          <h4>Adress</h4>
          <p>Ariana ....</p>
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
