import Button from '@mui/material/Button';
import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import ButtCreate from '../Components/ButtCreate';
import ButtModify from '../Components/ButtModify';
import { NavLink } from 'react-router-dom';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';



const AgentManage = () => {
    return (
        <div>
     <Header></Header>
  
        <div className="main-manage2">
          <div className="manage">
          <div className="managetitle2" style={{marginLeft:'220px'}}>Create New Agent <NavLink to="/AgentList" style={{float:'right',fontSize: '16px' ,marginRight: '30px' ,fontWeight:'bold',cursor:'pointer',lineHeight: '22px' ,display:'inlineBlock',color:'grey',zIndex:'3'}} onclick="">❐LIST OF AGENTS</NavLink></div>
            <div className="manageform">
              <div className="form-frame"> 
                <div className="frame1" style={{marginLeft: '-150px'}}>                            
                  <form action="" method="post" name="form-create">
                    <div className="form-floating" style={{margin: '12px'}}>
                      <input type="number" name="userId" id="userId"  className="form-control  purple-border shadow-effect" placeholder="User ID Numeric Value" minLength={6} title="Minimimum 6 Numric Characters" required />
                      <label htmlFor="floatingID">User ID</label>
                    </div>
                    <div className="form-floating" style={{margin: '12px'}}>
                      <input type="text" name="firstName" id="floatingID" autoComplete="off" className="form-control  purple-border shadow-effect" placeholder="User FullName" required />
                      <label htmlFor="floatingID">FirstName</label>
                    </div>
                    <div className="form-floating" style={{margin: '12px'}}>
                      <input type="text" name="lasttName" id="floatingID" className="form-control  purple-border shadow-effect" placeholder="User FullName" required />
                      <label htmlFor="floatingID">LastName </label> 
                    </div>
                    <div className="form-floating" style={{margin: '12px'}}>
                      <input type="email" name="email" id="floatingID" autoComplete="off" className="form-control  purple-border shadow-effect" placeholder="User Email" required />
                      <label htmlFor="floatingID">Email</label>
                    </div>
                    <div className="form-floating" style={{margin: '12px'}}>
                      <input type="text" id="floatingID" name="address" placeholder="Agen Address" minLength={6} autoComplete="off" className="form-control  purple-border shadow-effect"  required />
                      <label htmlFor="floatingID">Address </label>
                    </div>
                  </form>
                </div>
                <div className="frame2" style={{marginLeft: '152px'}}> 
                  <form action="" method="post" name="form-create">
                    <div className="form-floating" style={{margin: '12px'}}>
                      <input type="tel" name="phone"  id="floatingID" placeholder="Height Phone Numbers Required" minLength={8} pattern="[0-9]{8}" className="form-control  purple-border shadow-effect" />
                      <label htmlFor="floatingID"> Phone</label>
                    </div>  
                    <div className="form-floating mb-3" style={{margin: '12px', marginTop: '-3px'}}>
                      <select type="select"  id="desk" name="desk"  title="User Desk" className="form-select shadow-effect purple-border"style={{width: '300px', color: 'var(--bs-body-color)'}} onchange="langSelect(this.id,&quot;lang&quot;)">
                        <option selected data-search />
                        <option value="NA">NA</option>
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
                    <div className="form-floating mb-3" style={{margin: '12px', marginTop: '-3px'}}>
                      <select type="text" name="status" id="status" title="User Privileges" required className="form-select shadow-effect purple-border" style={{width: '300px'}}>
                        <option value selected />
                        <option value="activated">1 - Activated</option>             
                        <option value="desativated">2 - Desactivated</option>
                      </select>
                      <label htmlFor="floatingInput" style={{fontWeight: 'bold', color: 'black', fontSize: '17px'}}>  Status </label>
                    </div>    
                    <div className="form-floating mb-3" style={{margin: '12px', marginTop: '-3px'}}>
                      <select type="text" name="status" id="unit" title="User Desk" required className="form-select shadow-effect purple-border" style={{width: '300px'}}>
                        <option value selected />
                        <option value="none">None</option>
                        <option value="bu1">BU1</option>
                        <option value="bu2">BU2</option>
                        <option value="bu3">BU3</option>
                      </select>
                      <label htmlFor="floatingInput" style={{fontWeight: 'bold', color: 'black', fontSize: '17px'}}>Unit</label>
                    </div>
                    <div className="form-floating mb-3" style={{margin: '12px', marginTop: '-3px'}}>
                      <select type="select" id="lang" name="lang" title="User lang" className="form-select shadow-effect purple-border" style={{width: '300px'}}>
                        <option value data-search="hei" selected />
                        <option value="all">All</option>
                        <option value="Anglais" data-search="hei">Anglais</option>
                        <option value="Français" data-search="hei">Français</option>
                        <option value="Espagnole" data-search="hei">Espagnole</option>
                        <option value="Espagnole" data-search="hei">Italien</option>

                      </select>
                      <label htmlFor="floatingInput" style={{fontWeight: 'bold', color: 'black', fontSize: '17px'}}> Languages </label>
                    </div>                                      
                  </form> 
                </div>
              </div>    
              <br /><br />    
              <ButtCreate></ButtCreate>
              <span style={{width: 'auto', fontWeight: 'normal'}} /> 
            </div>
          </div>
        </div>

        <div className="main-manage2" style={{marginTop: '5%'}}>
          <div className="manage">
            <div className="managetitle2">Modify Agent</div>
            <div className="manageform">
              <div className="form-frame">
                <div className="frame1" style={{marginLeft: '40px'}}> 
                  <form action="" method="post" onsubmit="">   
                  <div style={{display: 'flex',alignItems: 'center'}}>
    <div className="form-floating" style={{margin: '12px'}}>
    <input type="number" name="search-id" id="search-id" placeholder="User ID Numeric Value" minLength={6} title="Minimum 6 Numeric Characters" className="form-control purple-border shadow-effect" />
    <input type="hidden" name="hiddenID" defaultValue />   
    <label htmlFor="floatingID">Search ID</label>  
  </div>

  <div style={{margin: '12px'}}>
    <Button variant="contained" startIcon={<PersonSearchIcon/>} style={{backgroundColor:'olivedrab'}} type="submit" name="agent-search" defaultValue="Search">Search</Button>
  </div>

  <div style={{margin: '12px'}}>
  <Button variant="outlined" color="secondary" endIcon={<DeleteIcon />} type="submit" name="delete" defaultValue="Delete">Delete</Button>
  </div>
</div>

                <span style={{color: 'olivedrab', fontSize: '14px'}} /> 
                  </form>
                  <form action="" method="post" onsubmit="">     
                    <div className="form-floating" style={{margin: '12px'}}>
                      <input type="text" name="update-firstName" id="floatingID" placeholder="User firstName" className="form-control  purple-border shadow-effect" required />
                      <input type="hidden" name="hiddenID"  />  
                      <label htmlFor="floatingID">FirstName</label>
                    </div>
                    <div className="form-floating" style={{margin: '12px'}}>
                      <input type="email" name="update-email" id="floatingID" placeholder="User Email" className="form-control  purple-border shadow-effect" required />
                      <label htmlFor="floatingID">LastName </label> 
                    </div>
                    <div className="form-floating" style={{margin: '12px'}}>
                      <input type="text" name="update-lastName" id="floatingID" placeholder="User lastName" className="form-control  purple-border shadow-effect" required />
                      <label htmlFor="floatingID">Email </label> 
                    </div> 
                    <div className="form-floating" style={{margin: '12px'}}>
                      <input type="text" name="update-address" id="floatingID" placeholder="User Address" minLength={6} className="form-control  purple-border shadow-effect" />
                      <label htmlFor="floatingID">Address </label>  
                    </div>  
                     
                  </form>
                </div> 
                <div className="frame2" style={{marginLeft: '120px'}}> 
                  <form action="" method="post" onsubmit="">   
                  <div className="form-floating" style={{margin: '12px'}}>
                      <input type="tel" name="update-phone" id="floatingID" placeholder="Height Phone Numbers Required" minLength={8} pattern="[0-9]{8}" className="form-control  purple-border shadow-effect"  />
                      <label htmlFor="floatingID"> Phone</label>
                    </div>
                    <div className="form-floating mb-3" style={{margin: '12px', marginTop: '-3px'}}>
                      <select type="select" name="update-desk" title="User Desk" id="update-desk" className="form-select shadow-effect purple-border" style={{width: '300px'}} onchange="langSelect(this.id, &quot;update-lang&quot;);desk()">
                        <option selected data-search />
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
                    <span id="unit-container" style={{display: 'none'}} />
                    <div className="form-floating mb-3" style={{margin: '12px', marginTop: '-3px'}}>
                      <select type="text" name="status" id="status" title="User Privileges" required className="form-select shadow-effect purple-border" style={{width: '300px'}}>
                        <option value selected />
                        <option value="activated">1 - Activated</option>             
                        <option value="desativated">2 - Desactivated</option>
                      </select>
                      <label htmlFor="floatingInput" style={{fontWeight: 'bold', color: 'black', fontSize: '17px'}}>  Status </label>
                    </div>
                    <div className="form-floating mb-3" style={{margin: '12px', marginTop: '-3px'}}>
                      <select type="text" name="status" id="unit" title="User Desk" required className="form-select shadow-effect purple-border" onchange="desk();" style={{width: '300px'}}>
                        <option value selected />
                        <option value="none">None</option>
                        <option value="bu1">BU1</option>
                        <option value="bu2">BU2</option>
                        <option value="bu3">BU3</option>
                      </select>
                      <label htmlFor="floatingInput" style={{fontWeight: 'bold', color: 'black', fontSize: '17px'}}>Unit</label>
                    </div>     
                    <div className="form-floating mb-3" style={{margin: '12px', marginTop: '-3px'}}>
                      <select type="text" name="update-lang" title="User Desk" id="update-lang" className="form-select shadow-effect purple-border" style={{width: '300px'}}>
                        <option value selected />
                        <option value="all">Français</option>
                        <option value="all">Anglais</option>
                        <option value="all">Espagnole</option>
                      </select>
                      <label htmlFor="floatingInput" style={{fontWeight: 'bold', color: 'black', fontSize: '17px'}}>Languages</label>
                      <br />     
                    </div> 
                  </form>
                </div>
              </div> 
                 <br /><br /> 
              <ButtModify></ButtModify>                
              <span style={{width: 'auto', fontWeight: 'normal'}} /> 
              
            </div>
         
          </div>     
        </div>
        <br /><br />
        <Footer></Footer>   
        </div>
    );
}

export default AgentManage;
