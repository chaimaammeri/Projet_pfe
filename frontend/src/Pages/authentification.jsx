import Button from '@mui/material/Button';
import React from 'react';

const AgentManage = () => {
    return (
<>
  <div id="showModalAcc" className="modal" style={{ display: "none" }}>
    <div className="modal-content">
      <div className="modal-header">
        <span id="close" className="close" onclick="closeModalAcc();">
          ×
        </span>
        <h1
          style={{ marginTop: 3, fontFamily: "Georama-Condensed-ExtraLight" }}
        >
          Account creation request
        </h1>
      </div>
      <div className="modal-body" style={{ marginTop: "-10px" }}>
        <p />
        <form action="account-creation-request.php" method="post">
          &nbsp;
          <label htmlFor="firstName">
            FirstName : &nbsp;&nbsp;
            <input
              type="text"
              id="firstName"
              name="firstName"
              style={{ width: 160 }}
              required=""
              placeholder="firstName"
            />
            &nbsp;&nbsp;
            <label htmlFor="lastName">
              LastName : &nbsp;
              <input
                type="text"
                id="lastName"
                name="lastName"
                style={{ width: 160 }}
                required=""
                placeholder="lastName"
              />
              <br />
              <label htmlFor="email">
                Email : &nbsp;&nbsp;
                <input
                  type="email"
                  name="email"
                  id="email"
                  style={{ width: 190 }}
                  required=""
                  placeholder="DXC email"
                />
                &nbsp;&nbsp;
                <label htmlFor="id">
                  Id : &nbsp;&nbsp;
                  <input
                    type="number"
                    id="id"
                    name="id"
                    style={{ width: 190 }}
                    required=""
                    placeholder="DXC ID"
                  />
                  <br />
                  <select
                    id="desk"
                    name="desk"
                    className="form-create"
                    title="User Desk"
                    style={{ visibility: "visible", marginTop: 15, height: 35 }}
                    onchange="langSelect(this.id, 'lang')"
                    required=""
                  >
                    <option selected="" value="NA">
                      NA
                    </option>
                    <option value="Renault" data-search="renault">
                      Renault
                    </option>
                    <option value="Nissan" data-search="nissan">
                      Nissan
                    </option>
                    <option value="Saipem" data-search="spm">
                      Saipem
                    </option>
                    <option value="Convatec" data-search="cvt">
                      Convatec
                    </option>
                    <option value="Philips" data-search="philips">
                      Philips
                    </option>
                    <option value="Sonova" data-search="sonova">
                      Sonova
                    </option>
                    <option value="Hanes" data-search="hei">
                      Hanes
                    </option>
                    <option value="Xpo" data-search="xpo">
                      Xpo
                    </option>
                    <option value="Gxo" data-search="gxo">
                      Gxo
                    </option>
                    <option value="Mylan" data-search="mylan">
                      Mylan
                    </option>
                    <option value="Servier" data-search="servier">
                      Servier
                    </option>
                  </select>
                  <input type="hidden" id="desk_hidden" defaultValue="" />
                  &nbsp;&nbsp;&nbsp;
                  <input
                    type="submit"
                    name="accountCreation"
                    defaultValue="Send"
                    style={{
                      backgroundColor: "olivedrab",
                      color: "white",
                      height: 35
                    }}
                  />
                  <p />
                </label>
              </label>
            </label>
          </label>
        </form>
      </div>
      <div className="modal-footer">
        <span
          style={{
            color: "white",
            textAlign: "center",
            marginBottom: 3,
            marginTop: 10
          }}
        >
          DXC<sup> ©</sup>
        </span>
      </div>
    </div>
  </div>
  <div id="showModalRpw" className="modal" style={{ display: "none" }}>
    <div className="modal-content">
      <div className="modal-header">
        <span id="close" className="close" onclick="closeModalRpw();">
          ×
        </span>
        <h1 style={{ marginTop: 3 }}>Password Reset</h1>
      </div>
      <div
        className="modal-body"
        style={{
          marginTop: "-33px",
          fontFamily: "Georama-Condensed-ExtraLight"
        }}
      >
        &nbsp;<p style={{ textAlign: "left" }}></p>
        <form action="/authentification.php" method="post">
          <label htmlFor="userRequest">Your Email :</label>
          <input
            type="email"
            name="userRequest"
            id="text"
            className="input"
            placeholder="Your DXC email here!"
            required=""
            autoComplete="off"
            style={{ width: 290 }}
          />
          &nbsp;&nbsp;
          <input
            type="submit"
            name="userRequestRpw"
            id="submit"
            className="button"
            style={{
              width: 130,
              fontSize: 16,
              backgroundColor: "olivedrab",
              color: "whitesmoke",
              marginTop: 22
            }}
            defaultValue="Password Reset"
          />
        </form>
        <p />
        <span
          style={{ color: "white", fontWeight: "bold", zIndex: 1, opacity: 1 }}
        />
      </div>
      <div className="modal-footer">
        <span
          style={{
            color: "white",
            textAlign: "center",
            marginBottom: 3,
            marginTop: 10
          }}
        >
          DXC<sup> ©</sup>
        </span>
      </div>
    </div>
  </div>
  <header>
    <div className="left-header">
      <img src="./medias/photos/DXC Logo.bmp" />
    </div>
    <div className="right-header">
      <div className="title" style={{ color: "white" }}>
        DXC TUNISIA WEB PORTAL
      </div>
      <div className="square">
        <span className="date" id="date">
          26-04-2023 9:20:29
        </span>
      </div>
    </div>
  </header>
  <img
    src="./medias/photos/back33.jpg"
    style={{
      position: "absolute",
      transform: "rotate(-15deg)",
      marginLeft: "18%",
      border: "3px solid #ddd",
      borderRadius: 4,
      padding: 2,
      width: 250,
      marginTop: "-5%"
    }}
  />
  <div
    className="menue"
    id="authentification"
    onclick="document.getElementById(this.id).style.animation = 'anim 2s ease forwards'; document.getElementById('open-menue').style.transform = 'rotate(-180deg)';"
  >
    <div className="form-menue">
      <form
        action="/authentification.php"
        method="post"
        style={{ marginTop: 20 }}
      >
        <label
          style={{
            color: "orange",
            textDecoration: "underline",
            letterSpacing: 2
          }}
        >
          Admin Access
        </label>
        <br />
        <br />
        <label htmlFor="adminName" style={{ color: "white" }}>
          Your Email :
        </label>
        <input
          style={{ width: 200 }}
          type="text"
          name="adminName"
          id="userMail"
          autoComplete="on"
        />
        <br />
        <br />
        <label htmlFor="adminPassword" style={{ color: "white" }}>
          Your Password :
        </label>
        <br />
        <br />
        <input
          style={{ width: 200 }}
          type="password"
          name="adminPassword"
          id="password"
        />
        <br />
        <br />
        <label htmlFor="adminPassword2" style={{ color: "white" }}>
          Your Token :
        </label>
        <br />
        <input
          style={{ width: 200 }}
          type="text"
          name="adminPassword2"
          id="password"
        />
        <br />
        <br />
        <input
          type="submit"
          name="adminValidate"
          id="submit"
          className="button"
          defaultValue="LogIn"
        />
        <a
          onclick="swap()"
          id="link"
          href="#"
          name="tokenVerif"
          style={{
            textDecoration: "none",
            color: "orange",
            marginLeft: 130,
            position: "absolute",
            marginTop: 5,
            fontSize: 13
          }}
        >
          &nbsp; | Generate Token &nbsp;
        </a>
      </form>
    </div>
    <div
      className="vl"
      onclick="document.getElementById('authentification').style.animation = 'animRev 2s ease forwards';"
    >
      <i id="open-menue">››</i>
    </div>
  </div>
  <img
    src="./medias/photos/dxc.png"
    style={{
      position: "absolute",
      width: 400,
      transform: "rotate(-30deg)",
      marginLeft: "-40%",
      marginTop: 150
    }}
  />
  <div className="container">
    <div className="header">
      <i
        className="fas fa-pen-nib"
        style={{ fontSize: 22, color: "white" }}
        aria-hidden="true"
      />
      &nbsp; Sign In{" "}
    </div>
    <form action="authentification.php" method="post" className="mainform">
      <label htmlFor="userName">Your Email :</label>
      <br />
      <input
        type="text"
        name="userName"
        id="text"
        className="input"
        autoComplete="on"
      />
      <br />
      <br />
      <label htmlFor="password">Your Password :</label>
      <br />
      <br />
      <input type="password" name="password" id="password" className="input" />
      <br />
      <br />
      <a
        href="#"
        style={{
          fontSize: 12,
          position: "absolute",
          textAlign: "center",
          marginLeft: "-35px",
          marginTop: 10,
          color: "olivedrab",
          textDecoration: "underline"
        }}
        title="Account creation request"
        onclick="showModalAcc()"
      >
        Account creation request!
      </a>
      <input
        type="submit"
        name="userValidate"
        id="submit"
        className="button"
        style={{ marginRight: 210 }}
        defaultValue="LogIn"
      />
      <a
        href="#"
        style={{
          fontSize: 12,
          position: "absolute",
          textAlign: "center",
          marginLeft: 220,
          marginTop: 10,
          color: "orange",
          textDecoration: "underline"
        }}
        title="Reset Your Password"
        onclick="showModalRpw()"
      >
        Forgot Your Password!
      </a>
      <br />
      <br />
    </form>
    <div className="footer">
      <footer>
        DXC<sup> ©</sup>
      </footer>
    </div>
  </div>
  <br />
  <br />
  <div id="geoPosition" style={{ color: "whitesmoke" }} />
  <br />
  <div id="map" style={{ color: "white" }}>
    Copmputer Name : TN-CZC728876C
    <br />
    DXC Domain IP : 10.245.163.10
    <br />
    Opened Port : 80
    <br />
  </div>
  <br />
  {/*<audio id="audio" autoplay src="./medias/sounds/hello.mp3"  type="audio/mp3">Your browser does not support the audio element.</audio>*/}
</>

export default authentification ;

