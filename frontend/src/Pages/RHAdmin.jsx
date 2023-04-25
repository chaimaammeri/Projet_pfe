import Button from '@mui/material/Button';
import React from 'react';
import { Link, NavLink} from "react-router-dom";
import SendIcon from '@mui/icons-material/Send';
const RHAdmin = () => {
  return (
      <div>
         <div className="data-main" style={{width: '99%', position: 'relative'}}> 
        <div className="search-menue">
          <b style={{position: 'absolute', color: 'white', left: '-56px', marginTop: '1.5%', transform: 'rotate(-90deg)', fontSize: '46px', letterSpacing: '2px', padding: '10px 26px 10px 26px', marginRight: '-90%', fontFamily: '"Bauhaus93, sans-serif"'}}>DXC</b>
          <b style={{color: 'black', textAlign: 'left', marginTop: '3%', transform: 'rotate(-90deg)', float: 'left', fontSize: '16px', letterSpacing: '2px', backgroundColor: 'white', padding: '8px 19px 8px 19px', fontFamily: '"Bauhaus93, sans-serif"'}}>technology</b>
          <div className="fixe" style={{marginLeft: '300px'}}>
            <form action="/rh_admin.php" method="post" style={{textAlign: 'left', marginLeft: '50px', marginTop: '20px'}}>
              <span style={{fontSize: '23px', fontFamily: '"Bauhaus93'}}>Search 
                <input type="text" id="search" onkeyup="crunchy(this.value)" name="search" className="form-create no-focus-outline" placeholder="Search" minLength={3} style={{width: '300px', marginLeft: '7px', height: '34px', fontSize: '15px', borderRadius: '10px black'}} title="Search" />
                <span id="container" style={{position: 'absolute', zIndex: 3, backgroundColor: 'white', color: 'black', padding: '4px', borderRadius: '4px', fontSize: '13px', display: 'none', marginTop: '20px'}} />

                <input type="submit" defaultValue="Show" className="btn btn-purple"  name="shows"  style={{marginLeft: '30px', height: '40px', fontSize: '15px', border: 'solid 1px #0a0a0a'}} />
                <input  type="reset" defaultValue="Reset" className="btn btn-success"  style={{marginLeft: '30px', height: '40px', fontSize: '15px', border: 'none',backgroundColor:'olivedrab'}}/>
                <button className="btn btn-secondary" style={{marginLeft: '30px', height: '40px', fontSize: '15px'}} onclick="javascript:window.print();">
                  <span style={{fontSize: '20px', letterSpacing: '7px'}}>⎙</span> Print 
                </button>

                <div className="btn-group" style={{marginLeft: '820px',marginTop:'-6.5%'}}>
                  <button type="button" className="btn btn-light">Human Resources</button>
                  <button type="button" className="btn btn-light dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span className="visually-hidden">Toggle Dropdown</span></button>
                  <ul className="dropdown-menu">
                    <li> <NavLink className="dropdown-item" to="/RHAdmin">RH Admin</NavLink></li>
                    <li> <NavLink className="dropdown-item" to="/RHReport">RH Report </NavLink> </li>
                    <li> <hr className="dropdown-divider" /></li>
                    <li> <NavLink className="dropdown-item" to="/">Home</NavLink> </li>
                  </ul>
                </div>


              </span>                  
            </form>
          </div>
        </div> 
        <div className="data-main-frame">
          <div className="item">   
            <table style={{fontSize: '15px', width: '100%', height: '100%', borderCollapse: 'collapse', textAlign: 'left'}}>
              <tbody>
                <tr>
                  <td style={{paddingLeft: '15px', textAlign: 'left', letterSpacing: '5px', fontSize: '18px'}}>ID : 
                    <b style={{color: 'black', textDecoration: 'underline', letterSpacing: '2px', fontFamily: 'arial'}} />
                  </td>
                  <td style={{textAlign: 'left', letterSpacing: '5px', fontSize: '18px'}}>FirstName : 
                    <b style={{color: 'black', textDecoration: 'underline', letterSpacing: '2px', fontFamily: 'arial', textAlign: 'center'}} />
                  </td>
                  <td style={{textAlign: 'left', letterSpacing: '5px', fontSize: '18px'}}>LastName : 
                    <b style={{color: 'black', textDecoration: 'underline', letterSpacing: '2px', fontFamily: 'arial', textAlign: 'center'}} />
                  </td>
                </tr>
                <tr> 
                  <td style={{paddingLeft: '15px', textAlign: 'left', letterSpacing: '5px', fontSize: '18px'}}>Email : 
                    <b><a style={{color: 'black'}} href="mailto:" title="Send Mail to Agent" /></b>
                  </td>
                  <td style={{textAlign: 'left', letterSpacing: '5px', fontSize: '18px'}}>Desk : <b /></td>
                  <td style={{textAlign: 'left', letterSpacing: '5px', fontSize: '18px'}}>Manager : <b /></td>
                </tr>
              </tbody>
            </table>          
          </div>      
        </div>  
        <div className="main-manage22">
          <div className="shadow-effect">
            <div className="manage" style={{marginLeft: '8px', width: '100%'}}>
              <div className="managetitle2" style={{marginLeft: '0px'}}>MODIFY EMPLOYEE</div>
              <div className="manageform" style={{fontSize: '13px'}}>
                <div className="form-frame" style={{display: 'flex', flexDirection: 'row', textAlign: 'center', borderRadius: '5px', bottom: 0}}>
                  <div className="frame1" style={{marginTop: '15px', width: '50%', paddingLeft: '0px', marginLeft: '-30px'}}>
                    <form action="/rh_admin.php" method="post" onsubmit="return validateForm()">
                      <div className="form-floating" style={{margin: '12px'}}>
                        <input type="number" name="search-id" className="form-control  purple-border shadow-effect" id="floatingID" required placeholder="User ID Numeric Value" minLength={6} readOnly="readonly" title="Minimimum 6 Numric Characters" />
                        <label htmlFor="floatingID">ID</label>
                      </div>
                      <div className="form-floating" style={{margin: '12px'}}>
                        <input type="text" className="form-control  purple-border shadow-effect" id="floatingName" required name="update-firstName" placeholder="Employee firstName" />
                        <label htmlFor="floatingName">FirstName</label>
                      </div>
                      <div className="form-floating" style={{margin: '12px'}}>
                        <input type="text" className="form-control  purple-border shadow-effect" id="floatingLastName" required name="update-lastName" placeholder="Employee LasttName" />
                        <label htmlFor="floatingLastName">LastName</label>
                      </div>
                      <div className="form-floating" style={{margin: '12px'}}>
                        <input type="email" name="update-email" className="form-control  purple-border shadow-effect" id="floatingEmail" required placeholder="Employee Email" />
                        <label htmlFor="floatingEmail">Email</label>
                      </div>
                      <div className="form-floating" style={{margin: '12px'}}>
                        <input type="text" name="update-manager" className="form-control  purple-border shadow-effect" id="floatingManger" required placeholder="Employee Manager" />
                        <label htmlFor="floatingManger">Manger</label>
                        <span id="unit-container" style={{display: 'none'}} />
                      </div>
                    </form>
                  </div>
                  <div className="frame2" style={{marginTop: '15px', width: '50%', paddingLeft: '80px'}}>
                    <form action="/rh_admin.php" method="post" onsubmit="return validateForm()">
                      <div className="form-floating" style={{margin: '12px'}}>
                        <input type="number" defaultvalue placeholder="Employee NID" className="form-control shadow-effect purple-border" id="floatingNID" required />
                        <label htmlFor="floatingNID">NID</label>
                      </div>
                      <div className="form-floating" style={{margin: '12px'}}>
                        <input type="number" placeholder="Employee Salary Only Number Allowed" className="form-control shadow-effect purple-border" id="floatingSalary" required />
                        <label htmlFor="floatingSalary">Salary</label>
                      </div>
                      <div className="form-floating" style={{margin: '12px'}}>
                        <input type="date" placeholder="Employee Start Date" className="form-control shadow-effect purple-border" id="floatingDate" required />
                        <label htmlFor="floatingDate" style={{fontSize: '14.5px'}}>Start Date</label>
                      </div>
                      <div className="form-floating" style={{margin: '12px'}}>
                        <input type="date" placeholder="Employee End Date" className="form-control shadow-effect purple-border " id="floatingDate" required />
                        <label htmlFor="floatingDate" style={{fontSize: '14.5px'}}>End Date</label>
                      </div>
                      <div className="form-floating" style={{margin: '12px'}}>
                        <input type="text" className="form-control shadow-effect purple-border  " id="floatingTitle" required placeholder="Employee Title" />
                        <label htmlFor="floatingTitle">Title</label>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <br />
              <div style={{display: 'flex', justifyContent: 'center', marginBottom: '2%', marginLeft: '3%'}}>
                {/* <button type="submit" className="btn btn-purple " style={{paddingLeft: '11%', paddingRight: '11%', letterSpacing: '5px', marginBottom: '3%', marginTop: '4%'}}>SAVE</button> */}
                <Button variant="contained" color="secondary" startIcon={<SendIcon/>} type="submit" style={{paddingLeft: '11%', paddingRight: '11%', letterSpacing: '5px', marginBottom: '3%', marginTop: '4%',backgroundColor: 'rgb(88, 3, 88)'}} >SEND</Button>

              </div> 
            </div>
          </div> 
        </div>
        <div><footer style={{textAlign: 'center', marginBottom: '40px', marginLeft: '10px', fontSize: '30px', letterSpacing: '5px', padding: '5px', color: 'rgb(0, 0, 0)', position: 'relative', width: '100%'}}>DXC Technology<sup> ©</sup></footer></div>
      </div>  
      </div>
  );
}

export default RHAdmin;
