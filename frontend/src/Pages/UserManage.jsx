import Button from '@mui/material/Button';
import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import ButtCreate from '../Components/ButtCreate';
import ButtModify from '../Components/ButtModify';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import { NavLink } from 'react-router-dom';

const UserManage = () => {
    return (
        <div>
      <Header></Header>
      {/* <span style={{ float: 'right', marginTop: '62px', fontSize: '17px', marginRight: '65px',  cursor: 'pointer', lineHeight: '25px', display: 'inline-block'}} onclick="">   
               <Fab variant="extended"  style={{fontWeight:'bold',zIndex:2,backgroundColor: 'whitesmoke'}}>
               <NavigationIcon sx={{ mr: 1 }} /><NavLink to="/UserList"  style={{color:'black'}}>User List
              </Fab> 
        </span> */}
        <div className="main-manage2" style={{height: '135%'}}>
          <div className="manage">
            <div className="managetitle2" style={{marginLeft:'220px'}}>Create New User <NavLink to="/UserList" style={{float:'right',fontSize: '16px' ,marginRight: '30px' ,fontWeight:'bold',cursor:'pointer',lineHeight: '22px' ,display:'inlineBlock',color:'grey',zIndex:'3'}} onclick="">❐LIST OF USERS</NavLink></div>
            <div className="manageform">
              <div className="form-frame"> 
                <div className="frame1" style={{marginLeft: '-150px'}}>                         
                  <form action="" method="post" name="form-create" title="user name!">
                    <div className="form-floating" style={{margin: '12px'}}>
                      <input type="number" autoComplete="off" name=""  id="floatingID" className="form-control  purple-border shadow-effect"  minLength={6} onclick="" title="Minimimum 6 Numric Characters" required />
                      <label htmlFor="floatingID" style={{fontWeight: 'bold', color: 'black', fontSize: '17px'}}>User ID</label> 
                    </div>
                    <div className="form-floating" style={{margin: '12px'}}>
                      <input type="text" name="firstName" id="floatingID" autoComplete="off" className="form-control purple-border shadow-effect"  placeholder="User firstName" required />
                      <label htmlFor="floatingID">FirstName</label>
                    </div>
                    <div className="form-floating" style={{margin: '12px'}}>
                      <input type="text" name="lasttName"  id="floatingID" autoComplete="off" className="form-control  purple-border shadow-effect"  placeholder="User lastName" required />
                      <label htmlFor="floatingID">LastName </label> 
                    </div>
                    <div className="form-floating" style={{margin: '12px'}}>
                      <input type="email" name="email" id="floatingID"  autoComplete="off" className="form-control  purple-border shadow-effect" placeholder="User Email" required />
                      <label htmlFor="floatingID">Email</label>
                    </div>
                    <div className="form-floating" style={{margin: '12px'}}>
                      <input type="password" name="password" id="floatingID"  autoComplete="off" title="password" placeholder="minimum 8 charactres with alphanueric" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required className="form-control  purple-border shadow-effect" />
                      <label htmlFor="floatingID">Password </label> 
                    </div>
                    <div className="form-floating" style={{margin: '12px'}}>
                      <input type="text" name="address" id="floatingID"  placeholder="User Address" minLength={6} autoComplete="off" className="form-control  purple-border shadow-effect"  required />
                      <label htmlFor="floatingID">Address </label>
                    </div>
                  </form>   
                </div>

                <div className="frame2" style={{marginLeft: '152px'}}> 
                <form action="" method="post" onsubmit="">    
                  <div className="form-floating" style={{margin: '12px'}}>
                    <input type="tel" name="phone"  id="floatingID"  placeholder="Phone Numbers" minLength={8} pattern="[0-9]{8}" className="form-control  purple-border shadow-effect" />
                    <label htmlFor="floatingID"> Phone</label>
                  </div>
                  {/* style="visibility:visible;margin-top:15px;height:38px;" */}
                  <div className="form-floating mb-3" style={{margin: '12px', marginTop: '-3px'}}>
                    <select type="select" title="User Desk" className="form-select shadow-effect purple-border" id="desk" name="desk" style={{width: '300px', color: 'var(--bs-body-color)'}} onchange="">
                      <option selected data-search />
                      <option value="NA">NA</option>
                      <option value="Renault" data-search="renault">Renault</option>
                      <option value="Nissan" data-search="nissan">Nissan</option>
                      <option value="Saipem" data-search="spm">Saipem</option>s
                      <option value="Convatec" data-search="cvt">Convatec</option>
                      <option value="Philips" data-search="philips">Philips</option>
                      <option value="Sonova" data-search="sonova">Sonova</option>
                      <option value="Hanes" data-search="hei">Hanes</option>
                      <option value="Xpo" data-search="xpo">Xpo</option>
                      <option value="Gxo" data-search="gxo">Gxo</option>
                      <option value="Mylan" data-search="mylan">Mylan</option>
                      <option value="Servier" data-search="servier">Servier</option> 
                    </select>
                    <label htmlFor="floatingInput" style={{fontWeight: 'bold', color: 'black', fontSize: '17px'}}>Desk</label>
                  </div>
                  <div className="form-floating mb-3" style={{margin: '12px', marginTop: '-3px'}}>
                    <select type="text" name="status" id="status" title="User Privileges" required className="form-select shadow-effect purple-border" style={{width: '300px'}}>
                      <option value selected />
                      <option value="activated">1 - Activated</option>             
                      <option value="desativated">2 - Desactivated</option>
                    </select>
                    <label htmlFor="floatingInput" style={{fontWeight: 'bold', color: 'black', fontSize: '17px'}}>  Status </label>    
                  </div>
                  <div className="form-floating mb-3" style={{margin: '12px', marginTop: '-3px'}}>
                    <select type="select" name="privilege" title="User Privileges" required className="form-select shadow-effect purple-border" style={{width: '300px'}}>
                      <option value selected />  
                      <option value="admin">1 - Administrator</option>             
                      <option value="user">2 - User</option>     
                      <option value="qas">3 - QAS</option>             
                      <option value="otl">4 - OTL</option>    
                      <option value="agent">5 - Agent</option>
                    </select>
                    <label htmlFor="floatingInput" style={{fontWeight: 'bold', color: 'black', fontSize: '17px'}}> Privileges </label>
                  </div>
                  <div className="form-floating mb-3" style={{margin: '12px', marginTop: '-3px'}}>
                    <select type="select" id="lang" name="lang" title="User lang" className="form-select shadow-effect purple-border" style={{width: '300px'}}>
                      <option value data-search="hei" selected />
                      <option value="Anglais" data-search="hei">Anglais</option>
                      <option value="Français" data-search="hei">Français</option>
                      <option value="Espagnole" data-search="hei">Espagnole</option>
                    </select>
                    <label htmlFor="floatingInput" style={{fontWeight: 'bold', color: 'black', fontSize: '17px'}}> Languages </label>
                  </div>
                 
                  {/* <div className="form-floating" style={{margin: '12px', marginTop: '-3px'}}>
                    <input type="checkbox" name="sendMail" id="floatingID"  className="form-control purple-border shadow-effect" />    
                    <label htmlFor="floatingID" style={{fontWeight: 'bold', color: 'black', fontSize: '17px'}}>Send to User </label>
                  </div> */}
                  </form>
                </div>  
              </div>
              <br /><br /> 
              <ButtCreate></ButtCreate>
              <span style={{color: 'olivedrab', fontSize: '14px'}} />
            </div>
          </div>
        </div>

        <div className="main-manage2" style={{marginTop: '5%'}}> 
          <div className="manage" >
            <div className="managetitle2">Modify User</div>
            <div className="manageform"> 
              <div className="form-frame" style={{marginLeft:'30px',}}> 
                <div className="frame1" style={{marginLeft: '10px'}}> 
                  <form action="" method="post" onsubmit="">    
                    
  <div style={{display: 'flex',alignItems: 'center'}}>
    <div className="form-floating" style={{margin: '12px'}}>
    <input type="number" name="search-id" id="search-id"  placeholder="User ID Numeric Value" minLength={6} title="Minimum 6 Numeric Characters" className="form-control purple-border shadow-effect" />
    <input type="hidden" name="hiddenID" defaultValue />   
    <label htmlFor="floatingID">Search ID</label>  
  </div>

  <div style={{margin: '12px'}}>
    <Button variant="contained" style={{backgroundColor:'olivedrab'}} startIcon={<PersonSearchIcon/>} type="submit" name="agent-search" defaultValue="Search">Search</Button>
  </div>
  
  <div style={{margin: '12px'}}>
    <Button variant="outlined" color="secondary" endIcon={<DeleteIcon />} type="submit" name="delete" defaultValue="Delete">Delete</Button>
  </div>
</div>
<span style={{color: 'olivedrab', fontSize: '14px'}} />
</form>
<form action="" method="post" onsubmit="">    

                    <div className="form-floating" style={{margin: '12px'}}>
                      <input type="text" name="update-firstName"  placeholder="User firstName" className="form-control  purple-border shadow-effect" id="floatingID" required />
                      <input type="hidden" name="hiddenID" defaultValue />  
                      <label htmlFor="floatingID">FirstName</label>
                    </div>
                    <div className="form-floating" style={{margin: '12px'}}>
                      <input type="email" name="update-email"  placeholder="User Email" className="form-control  purple-border shadow-effect" id="floatingID" required />
                      <label htmlFor="floatingID">LastName </label> 
                    </div>
                    <div className="form-floating" style={{margin: '12px'}}>
                      <input type="text" name="update-lastName" placeholder="User lastName" className="form-control  purple-border shadow-effect" id="floatingID" required />
                      <label htmlFor="floatingID">Email </label> 
                    </div>
                    
                  <div className="form-floating" style={{margin: '12px'}}>
                    <input type="password" name="update-password" id="floatingID" title="Password title" placeholder="minimum 8 charactres with alphanueric" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"  className="form-control purple-border shadow-effect"  />
                    <label htmlFor="floatingID">Password</label>
                  </div>
                  <div className="form-floating" style={{margin: '12px'}}>
                      <input type="text" name="address" id="floatingID"  placeholder="User Address" minLength={6} autoComplete="off" className="form-control  purple-border shadow-effect"  required />
                      <label htmlFor="floatingID">Address </label>
                    </div>
                    </form>
                </div>
                <div className="frame2" style={{marginLeft: '120px'}}> 
                <form action="" method="post" onsubmit="">    
                <div className="form-floating" style={{margin: '12px'}}>
                      <input type="tel" name="update-phone" placeholder="Height Phone Numbers Required" className="form-control  purple-border shadow-effect" id="floatingID" />
                      <span style={{color: 'olivedrab', fontSize: '14px'}}></span> 
                      <label htmlFor="floatingID">Phone</label> 
                    </div> 
                  <div className="form-floating mb-3" style={{margin: '12px'}}>
                    <select type="select" name="update-desk" id="update-desk" title="User Desk"  className="form-select shadow-effect purple-border" style={{width: '300px'}} onchange="">
                      <option data-search />
                      <option value="All">All</option>
                      <option value="Renault" data-search="renault">Renault</option>
                      <option value="Nissan" data-search="nissan">Nissan</option>
                      <option value="Saipem" data-search="spm">Saipem</option>
                      <option value="Convatec" data-search="cvt">Convatec</option>
                      <option value="Philips" data-search="philips">Philips</option>
                      <option value="Sonova" data-search="sonova">Sonova</option>
                      <option value="Hanes" data-search="hei">Hanes</option>
                      <option value="Xpo" data-search="xpo">Xpo</option>
                      <option value="Gxo" data-search="gxo">Gxo</option>
                      <option value="Mylan" data-search="mylan">Mylan</option>
                      <option value="Servier" data-search="servier">Servier</option> 
                    </select>
                    <label htmlFor="floatingInput" style={{fontWeight: 'bold', color: 'black', fontSize: '17px'}}>Desk</label>
                  </div>   
                  <div className="form-floating mb-3" style={{margin: '12px'}}>
                    <select type="text" name="update-status" id='' title="User Status" className="form-select shadow-effect purple-border" style={{width: '300px'}}>
                      <option value />
                      <option value="activated">Activated</option>
                      <option value="desactivated">Desactivated</option>
                    </select>
                    <label htmlFor="floatingInput" style={{fontWeight: 'bold', color: 'black', fontSize: '17px'}}>Status</label>
                  </div>
                  <div className="form-floating mb-3" style={{margin: '12px'}}>
                    <select type="text" name="update-privilege" title="User Privilege" id='' className="form-select shadow-effect purple-border" style={{width: '300px'}}>
                      <option value="none" />
                      <option value="admin"> 1- Administrator</option>
                      <option value="user">2- User</option> 
                      <option value="otl">1- OTL</option>
                      <option value="qas">2- QAS</option>        
                      <option value="agent">2- Agent</option>
                    </select>
                    <label htmlFor="floatingInput" style={{fontWeight: 'bold', color: 'black', fontSize: '17px'}}>Privileges</label>
                  </div>
                  <div className="form-floating mb-3" style={{margin: '12px'}}>
                    <select type="text" name="update-lang" title="User Desk" id="update-lang" className="form-select shadow-effect purple-border" style={{width: '300px'}}>
                      <option value />
                      <option value="all">All</option>
                      <option value="all">Français</option>
                      <option value="all">Anglais</option>
                      <option value="all">Espagnole</option>
                      <option value="all" >Italien</option>

                    </select>
                    <label htmlFor="floatingInput" style={{fontWeight: 'bold', color: 'black', fontSize: '17px'}}>Languages</label>
                  </div> 
                  </form>
                </div>
              </div>
              <br /><br />  
              <ButtModify></ButtModify>
              <span style={{color: 'olivedrab', fontSize: '14px'}}></span>
            </div> 
          </div>        
        </div>
        <br /><br />
        <Footer></Footer>
        </div>
    );
}
export default UserManage;
