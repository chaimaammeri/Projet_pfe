import Button from '@mui/material/Button';
import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const AdminManage = () => {
    return (
        <div>
      <Header></Header>
      <div className="tit"> User Manage </div> 
        <div className="main-manage2" style={{height: '135%'}}>
          <div className="manage">
            <div className="managetitle2">Create New User <span style={{color: 'olivedrab', float: 'right', margin: 'auto', fontSize: '16px', marginRight: '22px', fontWeight: 'bold', cursor: 'pointer', lineHeight: '22px', display: 'inline-block', zIndex: 3}} onclick="notepad()">❐&nbsp;Notepad +</span></div>
            <div className="manageform">
              <div className="form-frame"> 
                <div className="frame1" style={{marginLeft: '-150px'}}>                         
                  <form action="/admin-manage.php" method="post" name="form-create" title="Desk name!">
                    <div className="form-floating" style={{margin: '12px'}}>
                      <input type="number" autoComplete="off" name="userId" className="form-control  purple-border shadow-effect" id="floatingID" minLength={6} onclick="awarness()" title="Minimimum 6 Numric Characters" required />
                      <label htmlFor="floatingID" style={{fontWeight: 'bold', color: 'black', fontSize: '17px'}}>User ID</label> 
                    </div>
                    <div className="form-floating" style={{margin: '12px'}}>
                      <input type="text" name="firstName" autoComplete="off" className="form-control  purple-border shadow-effect" id="floatingID" placeholder="User firstName" required />
                      <label htmlFor="floatingID">FirstName</label>
                    </div>
                    <div className="form-floating" style={{margin: '12px'}}>
                      <input type="text" name="lasttName" autoComplete="off" className="form-control  purple-border shadow-effect" id="floatingID" placeholder="User lastName" required />
                      <label htmlFor="floatingID">LastName </label> 
                    </div>
                    <div className="form-floating" style={{margin: '12px'}}>
                      <input type="password" name="password" autoComplete="off" title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters" placeholder="minimum 8 charactres with alphanueric" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required className="form-control  purple-border shadow-effect" id="floatingID" />
                      <label htmlFor="floatingID">Password </label> 
                    </div>
                    <div className="form-floating" style={{margin: '12px'}}>
                      <input type="email" name="email" autoComplete="off" className="form-control  purple-border shadow-effect" id="floatingID" placeholder="User Email" required />
                      <label htmlFor="floatingID">Email</label>
                    </div>
                    <div className="form-floating" style={{margin: '12px'}}>
                      <input type="text" name="address" placeholder="User Address" minLength={6} autoComplete="off" className="form-control  purple-border shadow-effect" id="floatingID" required />
                      <label htmlFor="floatingID">Address </label>
                    </div>
                  </form>   
                </div>
                <div className="frame2" style={{marginLeft: '152px'}}> 
                  <div className="form-floating" style={{margin: '12px'}}>
                    <input type="tel" name="phone" placeholder="Height Phone Numbers Required" minLength={8} pattern="[0-9]{8}" className="form-control  purple-border shadow-effect" id="floatingID" />
                    <label htmlFor="floatingID"> Phone</label>
                  </div>
                  {/* style="visibility:visible;margin-top:15px;height:38px;" */}
                  <div className="form-floating mb-3" style={{margin: '12px', marginTop: '-3px'}}>
                    <select type="select" title="User Desk" className="form-select shadow-effect purple-border" id="desk" name="desk" style={{width: '300px', color: 'var(--bs-body-color)'}} onchange="langSelect(this.id,&quot;lang&quot;)">
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
                    <select type="select" id="lang" name="lang" title="User lang" className="form-select shadow-effect purple-border" style={{width: '300px'}}>
                      <option value data-search="hei" selected />
                      <option value="Anglais" data-search="hei">Anglais</option>
                      <option value="Français" data-search="hei">Français</option>
                      <option value="Espagnole" data-search="hei">Espagnole</option>
                    </select>
                    <label htmlFor="floatingInput" style={{fontWeight: 'bold', color: 'black', fontSize: '17px'}}> Languages </label>
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
                  <div className="form-floating" style={{margin: '12px', marginTop: '-3px'}}>
                    <input type="checkbox" name="sendMail" className="form-control  purple-border shadow-effect" id="floatingID" />    
                    <label htmlFor="floatingID" style={{fontWeight: 'bold', color: 'black', fontSize: '17px'}}>Send to User </label>
                  </div>
                </div>  
              </div>
              <br /><br /> 
              <input type="submit" name="update-user" defaultValue="CREATE" className="btn btn-purple " id="floatingID" style={{paddingLeft: '11%', paddingRight: '11%', letterSpacing: '4px', marginBottom: '2%', marginLeft: '3%'}} />
              <span style={{color: 'olivedrab', fontSize: '14px'}} />
              <br /><br /> 
            </div>
          </div>
        </div>
        <div className="main-manage2" style={{marginTop: '5%'}}> 
          <div className="manage">
            <div className="managetitle2">Modify User<span style={{color: 'olivedrab', float: 'right', margin: 'auto', fontSize: '16px', marginRight: '22px', fontWeight: 'bold', cursor: 'pointer', lineHeight: '22px', display: 'inline-block', zIndex: 3}} onclick="notepad()">❐&nbsp;Notepad +</span></div>
            <div className="manageform"> 
              <div className="form-frame"> 
                <div className="frame1" style={{marginLeft: '0px'}}> 
                  <form action="/admin-manage.php" method="post" onsubmit="validateForm()">    
                    <div className="form-floating" style={{margin: '12px', marginLeft: '5px', marginBottom: '2px', display: 'inline-block'}}>
                      <input type="number" name="search-id" id="search-id" defaultValue placeholder="User ID Numeric Value" minLength={6} title="Minimimum 6 Numric Characters" className="form-control purple-border shadow-effect" />
                      <input type="hidden" name="hiddenID" defaultValue />   
                      <label htmlFor="floatingID">Search ID</label> 
                    </div>
                    <div style={{display: 'inline-block'}}>
                      <input type="submit" name="agent-search" defaultValue="Search" className="btn btn-success but" style={{marginLeft: '-10%', marginTop: '14%', backgroundColor: 'olivedrab', borderColor: 'olivedrab'}} />
                    </div> 
                    <div style={{display: 'inline-block'}}>
                      <input type="submit" name="delete" defaultValue="Delete" className="btn btn-success but" style={{marginLeft: '8%', marginTop: '14%', backgroundColor: 'black', borderColor: 'black'}} />
                    </div>
                    <span style={{color: 'olivedrab', fontSize: '14px'}} /> 
                  </form>  
                  <form action="/admin-manage.php" method="post">
                    <div className="form-floating" style={{margin: '12px'}}>
                      <input type="text" name="update-firstName" defaultValue placeholder="User firstName" className="form-control  purple-border shadow-effect" id="floatingID" required />
                      <input type="hidden" name="hiddenID" defaultValue />  
                      <label htmlFor="floatingID">FirstName</label>
                    </div>
                    <div className="form-floating" style={{margin: '12px'}}>
                      <input type="email" name="update-email" defaultValue placeholder="User Email" className="form-control  purple-border shadow-effect" id="floatingID" required />
                      <label htmlFor="floatingID">LastName </label> 
                    </div>
                    <div className="form-floating" style={{margin: '12px'}}>
                      <input type="text" name="update-lastName" defaultValue placeholder="User lastName" className="form-control  purple-border shadow-effect" id="floatingID" required />
                      <label htmlFor="floatingID">Email </label> 
                    </div>
                    <div className="form-floating" style={{margin: '12px'}}>
                      <input type="tel" name="update-phone" defaultValue placeholder="Height Phone Numbers Required" className="form-control  purple-border shadow-effect" id="floatingID" />
                      <span style={{color: 'olivedrab', fontSize: '14px'}}></span> 
                      <label htmlFor="floatingID">Phone</label> 
                    </div> 
                  </form>
                </div>
                <div className="frame2" style={{marginLeft: '152px'}}> 
                  <div className="form-floating" style={{margin: '12px'}}>
                    <input type="password" name="update-password" title="Password title" placeholder="minimum 8 charactres with alphanueric" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" defaultValue className="form-control purple-border shadow-effect" id="floatingID" />
                    <label htmlFor="floatingID">Password</label>
                  </div>
                  <div className="form-floating mb-3" style={{margin: '12px'}}>
                    <select type="select" name="update-desk" title="User Desk" id="update-desk" className="form-select shadow-effect purple-border" onchange="langSelect(this.id,&quot;lang&quot;)">
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
                    <select type="text" name="update-lang" title="User Desk" id="update-lang" className="form-select shadow-effect purple-border" style={{width: '300px'}}>
                      <option value />
                      <option value="all">Français</option>
                      <option value="all">Anglais</option>
                      <option value="all">Espagnole</option>
                    </select>
                    <label htmlFor="floatingInput" style={{fontWeight: 'bold', color: 'black', fontSize: '17px'}}>Languages</label>
                  </div>   
                  <div className="form-floating mb-3" style={{margin: '12px'}}>
                    <select type="text" name="update-privilege" title="User Privilege" className="form-select shadow-effect purple-border" style={{width: '300px'}}>
                      <option value />
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
                    <select type="text" name="update-status" title="User Status" className="form-select shadow-effect purple-border" style={{width: '300px'}}>
                      <option value />
                      <option value="activated">Activated</option>
                      <option value="desactivated">Desactivated</option>
                    </select>
                    <label htmlFor="floatingInput" style={{fontWeight: 'bold', color: 'black', fontSize: '17px'}}>Status</label>
                  </div>
                </div>
              </div>
              <br /><br />  
              <input type="submit" name="update-user" defaultValue="MODIFY" className="btn btn-purple " id="floatingID" style={{paddingLeft: '9%', paddingRight: '9%', letterSpacing: '4px', marginBottom: '2%', marginLeft: '3%'}} />&nbsp;
              <span style={{color: 'olivedrab', fontSize: '14px'}}></span>
              <br /><br /> 
            </div> 
          </div>        
        </div>
        <br /><br /><br /><br />
        <Footer></Footer>
        </div>
    );
}
export default AdminManage;
