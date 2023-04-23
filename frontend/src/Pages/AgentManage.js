import Button from '@mui/material/Button';
import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const AgentManage = () => {
    return (
        <div>
     <Header></Header>
      <div className="tit"> Agent Manage </div> 
        <div className="main-manage2">
          <div className="manage">
            <div className="managetitle2">Create New Agent<span style={{color: 'olivedrab', float: 'right', margin: 'auto', fontSize: '16px', marginRight: '22px', fontWeight: 'bold', cursor: 'pointer', lineHeight: '22px', display: 'inline-block', zIndex: 3}} onclick="notepad()">❐&nbsp;Notepad +</span></div>
            <div className="manageform">
              <div className="form-frame"> 
                <div className="frame1" style={{marginLeft: '-150px'}}>                            
                  <form action="/agent_manage.php" method="post" name="form-create">
                    <div className="form-floating" style={{margin: '12px'}}>
                      <input type="number" name="userId" className="form-control  purple-border shadow-effect" id="userId" placeholder="User ID Numeric Value" minLength={6} title="Minimimum 6 Numric Characters" required />
                      <label htmlFor="floatingID">User ID</label>
                    </div>
                    <div className="form-floating" style={{margin: '12px'}}>
                      <input type="text" name="firstName" autoComplete="off" className="form-control  purple-border shadow-effect" id="floatingID" placeholder="User FullName" required />
                      <label htmlFor="floatingID">FirstName</label>
                    </div>
                    <div className="form-floating" style={{margin: '12px'}}>
                      <input type="text" name="lasttName" className="form-control  purple-border shadow-effect" id="floatingID" placeholder="User FullName" required />
                      <label htmlFor="floatingID">LastName </label> 
                    </div>
                    <div className="form-floating" style={{margin: '12px'}}>
                      <input type="email" name="email" autoComplete="off" className="form-control  purple-border shadow-effect" id="floatingID" placeholder="User Email" required />
                      <label htmlFor="floatingID">Email</label>
                    </div>
                    <div className="form-floating" style={{margin: '12px'}}>
                      <input type="text" name="address" placeholder="Agen Address" minLength={6} autoComplete="off" className="form-control  purple-border shadow-effect" id="floatingID" required />
                      <label htmlFor="floatingID">Address </label>
                    </div>
                  </form>
                </div>
                <div className="frame2" style={{marginLeft: '120px'}}> 
                  <form action="/agent_manage.php" method="post" name="form-create">
                    <div className="form-floating" style={{margin: '12px'}}>
                      <input type="tel" name="phone" placeholder="Height Phone Numbers Required" minLength={8} pattern="[0-9]{8}" className="form-control  purple-border shadow-effect" id="floatingID" />
                      <label htmlFor="floatingID"> Phone</label>
                    </div>  
                    <div className="form-floating mb-3" style={{margin: '12px', marginTop: '-3px'}}>
                      <select type="select" title="User Desk" className="form-select shadow-effect purple-border" id="desk" name="desk" style={{width: '300px', color: 'var(--bs-body-color)'}} onchange="langSelect(this.id,&quot;lang&quot;)">
                        <option selected data-search />
                        <option value="NA">NA</option><option value="Renault" data-search="renault">Renault</option>
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
                      <select type="select" id="lang" name="lang" title="User lang" className="form-select shadow-effect purple-border" style={{width: '300px'}}>
                        <option value data-search="hei" selected />
                        <option value="Anglais" data-search="hei">Anglais</option>
                        <option value="Français" data-search="hei">Français</option>
                        <option value="Espagnole" data-search="hei">Espagnole</option>
                      </select>
                      <label htmlFor="floatingInput" style={{fontWeight: 'bold', color: 'black', fontSize: '17px'}}> Languages </label>
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
                      <select type="text" name="status" id="status" title="User Privileges" required className="form-select shadow-effect purple-border" style={{width: '300px'}}>
                        <option value selected />
                        <option value="activated">1 - Activated</option>             
                        <option value="desativated">2 - Desactivated</option>
                      </select>
                      <label htmlFor="floatingInput" style={{fontWeight: 'bold', color: 'black', fontSize: '17px'}}>  Status </label>
                    </div>                                       
                  </form> 
                </div>
              </div>    
              <br /><br />                 
              <input type="submit" name="submit-create" defaultValue="CREATE" className="btn btn-purple " id="floatingID" style={{paddingLeft: '9%', paddingRight: '9%', letterSpacing: '5px', marginBottom: '2%', marginLeft: '0%'}} />
              <span style={{width: 'auto', fontWeight: 'normal'}} /> 
              <br /><br /> 
            </div>
          </div>
        </div>
        <div className="main-manage2" style={{marginTop: '5%'}}>
          <div className="manage">
            <div className="managetitle2">Modify Agent<a className="list" name="agent" style={{fontSize: '17px', color: 'olivedrab', height: '23px', marginLeft: '5px', lineHeight: '24px', fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif', float: 'right', marginRight: '20px'}} href="agent_list.php">♻ Agent List</a></div>
            <div className="manageform">
              <div className="form-frame">
                <div className="frame1" style={{marginLeft: '-10px'}}> 
                  <form action="/agent_manage.php" method="post" onsubmit="return validateForm()">   
                    <div className="form-floating" style={{margin: '12px', marginLeft: '11px', marginBottom: '2px', display: 'inline-block'}}>
                      <input type="number" name="search-id" id="search-id" defaultValue placeholder="User ID Numeric Value" minLength={6} title="Minimum 6 Numeric Characters" className="form-control purple-border shadow-effect" />
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
                  <form action="/agent_manage.php" method="post">     
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
                      <input type="tel" name="update-phone" placeholder="Height Phone Numbers Required" minLength={8} pattern="[0-9]{8}" className="form-control  purple-border shadow-effect" id="floatingID" />
                      <label htmlFor="floatingID"> Phone</label>
                    </div>   
                  </form>
                </div> 
                <div className="frame2" style={{marginLeft: '120px'}}> 
                  <form action="/agent_manage.php" method="post" onsubmit="return validateForm()">   
                    <div className="form-floating" style={{margin: '12px'}}>
                      <input type="text" name="update-address" placeholder="User Address" minLength={6} className="form-control  purple-border shadow-effect" id="floatingID" />
                      <label htmlFor="floatingID">Address </label>  
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
              <input type="submit" name="update-user" defaultValue="MODIFY" className="btn btn-purple " id="floatingID" style={{paddingLeft: '9%', paddingRight: '9%', letterSpacing: '5px', marginBottom: '2%', marginLeft: '6%'}} />
              <span style={{color: 'olivedrab', fontSize: '14px'}} />   
              <br /><br /> 
            </div>
          </div>        
        </div>
        <br /><br /><br /><br /> 
        <Footer></Footer>   
        </div>
    );
}

export default AgentManage;
