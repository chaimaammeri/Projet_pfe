import Button from '@mui/material/Button';
import React, { useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import SendIcon from '@mui/icons-material/Send';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

function UserManage()  {
  const[data, setData] = useState({
    ID_Us:'',
    FirstName_Us:'',
    LastName_Us:'',
    Email_Us:'',
    Password_Us:'',
    Adress_Us:'',
    Phone_Us:'',
    Desk_Us:'',
    Status_Us:'',
    Privilége_Us:'',
    Language_Us:''
   })
   const handleSubmit = (event) => {
    event.preventDefault();
    const formdata = new FormData();
    formdata.append("ID_Emp", data.ID_Us);
    formdata.append("FirstName_Us", data.FirstName_Us);
    formdata.append("LastName_Us", data.LastName_Us);
    formdata.append("Email_Us", data.Email_Us);
    formdata.append("Password_Us", data.Password_Us);
    formdata.append("Adress_Us", data.Adress_Us);
    formdata.append("Phone_Us", data.Phone_Us);
    formdata.append("Desk_Us", data.Desk_Us);
    formdata.append("Status_Us", data.Status_Us);
    formdata.append("Privilége_Us", data.Privilége_Us);
    formdata.append("Language_Us", data.Language_Us);
    axios.post('http://localhost:3001/UserManage', formdata)
    .then(res => console.log(res))
    .catch(err => console.log(err));
   }



    return (
        <div>
      <Header></Header>
  
        <div className="main-manage2" style={{height: '135%'}}>
          <div className="manage">
            <div className="managetitle2" style={{marginLeft:'220px'}}>Create New User <NavLink to="/UserList" style={{float:'right',fontSize: '16px' ,marginRight: '30px' ,fontWeight:'bold',cursor:'pointer',lineHeight: '22px' ,display:'inlineBlock',color:'grey',zIndex:'3'}} onClick="">❐LIST OF USERS</NavLink></div>
            <div className="manageform">
              <div className="form-frame"> 
                <div className="frame1" style={{marginLeft: '-150px'}}>                         
                  <form  onSubmit={handleSubmit}  >
                    <div className="form-floating" style={{margin: '12px'}}>
                      <input type="number" id="id_us" onChange={e => setData({...data, ID_Us: e.target.value})} autoComplete="off" name=""  className="form-control  purple-border shadow-effect"  minLength={6} title="Minimimum 6 Numric Characters" required />
                      <label htmlFor="id_us" style={{fontWeight: 'bold', color: 'black', fontSize: '17px'}}>User ID</label> 
                    </div>
                    <div className="form-floating" style={{margin: '12px'}}>
                      <input type="text" id="firstname_us" onChange={e => setData({...data, FirstName_Us: e.target.value})} name="firstName"  autoComplete="off" className="form-control purple-border shadow-effect"  placeholder="User firstName" required />
                      <label htmlFor="firstname_us">FirstName</label>
                    </div>
                    <div className="form-floating" style={{margin: '12px'}}>
                      <input type="text" id="lastname_us"  onChange={e => setData({...data, LastName_Us: e.target.value})} name="lasttName"  autoComplete="off" className="form-control  purple-border shadow-effect"  placeholder="User lastName" required />
                      <label htmlFor="lastname_us">LastName </label> 
                    </div>
                    <div className="form-floating" style={{margin: '12px'}}>
                      <input type="email" name="email_us" id="email" onChange={e => setData({...data, Email_Us: e.target.value})}  autoComplete="off" className="form-control  purple-border shadow-effect" placeholder="User Email" required />
                      <label htmlFor="email_us">Email</label>
                    </div>
                    <div className="form-floating" style={{margin: '12px'}}>
                      <input type="password" id="password_us" onChange={e => setData({...data, Password_Us: e.target.value})} name="password"    title="password" placeholder="minimum 8 charactres with alphanueric" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required className="form-control  purple-border shadow-effect" />
                      <label htmlFor="password_us">Password </label> 
                    </div>
                    <div className="form-floating" style={{margin: '12px'}}>
                      <input type="text" id="adress_us" onChange={e => setData({...data, Adress_Us: e.target.value})} name="adress"   placeholder="User Address" minLength={6} autoComplete="off" className="form-control  purple-border shadow-effect"  required />
                      <label htmlFor="adress_us">Address </label>
                    </div>
                  </form>   
                </div>

                <div className="frame2" style={{marginLeft: '152px'}}> 
                <form   onSubmit={handleSubmit}>    
                  <div className="form-floating" style={{margin: '12px'}}>
                    <input type="tel"  id="phone_us"  onChange={e => setData({...data, Phone_Us: e.target.value})} name="phone" autoComplete="off"   placeholder="Phone Numbers" minLength={8} pattern="[0-9]{8}" required className="form-control  purple-border shadow-effect" />
                    <label htmlFor="phone_us"> Phone</label>
                  </div>
                  <div className="form-floating mb-3" style={{margin: '12px', marginTop: '-3px'}}>
                    <select type="select" id="desk_us"  onChange={e => setData({...data, Desk_Us: e.target.value})} className="form-select shadow-effect purple-border" required  style={{width: '300px', color: 'var(--bs-body-color)'}} >
                    <option value=""></option>
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
                    <label htmlFor="desk_us" style={{fontWeight: 'bold', color: 'black', fontSize: '17px'}}>Desk</label>
                  </div>
                  <div className="form-floating mb-3" style={{margin: '12px', marginTop: '-3px'}}>
                    <select type="select" id="status_us" onChange={e => setData({...data, Status_Us: e.target.value})}   required className="form-select shadow-effect purple-border" style={{width: '300px'}}>
                    <option value=""></option>
                      <option value="activated">1 - Activated</option>             
                      <option value="desativated">2 - Desactivated</option>
                    </select>
                    <label htmlFor="status_us" style={{fontWeight: 'bold', color: 'black', fontSize: '17px'}}>  Status </label>    
                  </div>
                  <div className="form-floating mb-3" style={{margin: '12px', marginTop: '-3px'}}>
                    <select type="select" id='privileges_us'  onChange={e => setData({...data, Privilége_Us: e.target.value})}   required className="form-select shadow-effect purple-border" style={{width: '300px'}}>
                    <option value=""></option>  
                      <option value="admin">1 - Administrator</option>             
                      <option value="user">2 - User</option>     
                      <option value="qas">3 - QAS</option>             
                      <option value="otl">4 - OTL</option>    
                      <option value="agent">5 - Agent</option>
                    </select>
                    <label htmlFor="privileges_us" style={{fontWeight: 'bold', color: 'black', fontSize: '17px'}}> Privileges </label>
                  </div>
                  <div className="form-floating mb-3" style={{margin: '12px', marginTop: '-3px'}}>
                    <select type="select" id="lang_us"  onChange={e => setData({...data, Language_Us: e.target.value})}  className="form-select shadow-effect purple-border" style={{width: '300px'}} required>
                    <option value=""></option>
                      <option value="Anglais" data-search="hei">All</option>
                      <option value="Anglais" data-search="hei">Anglais</option>
                      <option value="Français" data-search="hei">Français</option>
                      <option value="Espagnole" data-search="hei">Espagnole</option>
                      <option value="Anglais" data-search="hei">Anglais/Français</option>
                      <option value="Anglais" data-search="hei">Anglais/Espagnole</option>
                      <option value="Français" data-search="hei">Français/Espagnole</option>
                    </select>
                    <label htmlFor="lang_us" style={{fontWeight: 'bold', color: 'black', fontSize: '17px'}}> Languages </label>
                  </div>
             
                  </form>
                </div>  
              </div>
              <br /><br /> 
              <Button type="submit" variant="contained" color="secondary" startIcon={<SendIcon/>}  name="agent-search" defaultValue="CREATE" style={{paddingLeft: '9%', paddingRight: '9%', letterSpacing: '4px', marginBottom: '2%', marginLeft: '3%'}} >CREATE</Button>
              <span style={{color: 'olivedrab', fontSize: '14px'}} />
            </div>
          </div>
        </div>
{/* --------------modifyy--------------------------------- */}
        <div className="main-manage2" style={{marginTop: '5%'}}> 
          <div className="manage" >
            <div className="managetitle2">Modify User</div>
            <div className="manageform"> 
              <div className="form-frame" style={{marginLeft:'30px',}}> 
                <div className="frame1" style={{marginLeft: '10px'}}> 
                  <form onSubmit={handleSubmit}>    
                    
              <div style={{display: 'flex',alignItems: 'center'}}>
              <div className="form-floating" style={{margin: '12px'}}>
               <input type="number" name="search-id" id="searchid_us"  placeholder="User ID Numeric Value" minLength={6} title="Minimum 6 Numeric Characters" className="form-control purple-border shadow-effect" />
               <label htmlFor="searchid_us">Search ID</label>  
                 </div>

                   <div style={{margin: '12px'}}>
                      <Button variant="contained" style={{backgroundColor:'olivedrab'}} startIcon={<PersonSearchIcon/>} type="submit" name="agent-search" defaultValue="Search">Search</Button>
                    </div>
  
                   <div style={{margin: '12px'}}>
                   <Button variant="outlined" color="secondary" endIcon={<DeleteIcon />} type="submit" name="delete" defaultValue="Delete">Delete</Button>
                   </div>
                   </div>

                    <div className="form-floating" style={{margin: '12px'}}>
                      <input type="text" name="searchfirst_us"  placeholder="User firstName" className="form-control  purple-border shadow-effect" />
                      <label htmlFor="searchfirst_us">FirstName</label>
                    </div>
                    <div className="form-floating" style={{margin: '12px'}}>
                      <input type="email" name="searchlast_us"  placeholder="User Email" className="form-control  purple-border shadow-effect"  />
                      <label htmlFor="searchlast_us">LastName </label> 
                    </div>
                    <div className="form-floating" style={{margin: '12px'}}>
                      <input type="text" id='searchemail_us' name="update-lastName" placeholder="User lastName" className="form-control  purple-border shadow-effect"  />
                      <label htmlFor="searchemail_us">Email </label> 
                    </div>
                    
                  <div className="form-floating" style={{margin: '12px'}}>
                    <input type="password" name="update-password" id="searchpassword_us" title="Password title" placeholder="minimum 8 charactres with alphanueric" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"  className="form-control purple-border shadow-effect"  />
                    <label htmlFor="searchpassword_us">Password</label>
                  </div>
                  <div className="form-floating" style={{margin: '12px'}}>
                      <input type="text" name="update-address" id="searchadress_us"  placeholder="User Address" minLength={6} autoComplete="off" className="form-control  purple-border shadow-effect"  />
                      <label htmlFor="searchadress_us">Address </label>
                    </div>
                    </form>
                </div>
                <div className="frame2" style={{marginLeft: '120px'}}> 
                <form  onSubmit={handleSubmit}>    
                <div className="form-floating" style={{margin: '12px'}}>
                      <input type="tel" id="searchphone_id"  name="update-phone" placeholder="Height Phone Numbers Required" className="form-control  purple-border shadow-effect" />
                      <label htmlFor="searchphone_id">Phone</label> 
                    </div> 
                  <div className="form-floating mb-3" style={{margin: '12px'}}>
                    <select type="select"  id="searchdesk_us"  className="form-select shadow-effect purple-border" style={{width: '300px'}} >
                    <option value=""></option>
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
                    <label htmlFor="searchdesk_us" style={{fontWeight: 'bold', color: 'black', fontSize: '17px'}}>Desk</label>
                  </div>   
                  <div className="form-floating mb-3" style={{margin: '12px'}}>
                    <select type="select" name="update-status" id="searchstatus_us" className="form-select shadow-effect purple-border" style={{width: '300px'}}>
                    <option value=""></option>
                      <option value="activated">Activated</option>
                      <option value="desactivated">Desactivated</option>
                    </select>
                    <label htmlFor="searchstatus_us" style={{fontWeight: 'bold', color: 'black', fontSize: '17px'}}>Status</label>
                  </div>
                  <div className="form-floating mb-3" style={{margin: '12px'}}>
                    <select type="select" name="update-privilege"  id="searchprivileges_us"  className="form-select shadow-effect purple-border" style={{width: '300px'}}>
                    <option value=""></option>
                      <option value="admin"> 1- Administrator</option>
                      <option value="user">2- User</option> 
                      <option value="otl">1- OTL</option>
                      <option value="qas">2- QAS</option>        
                      <option value="agent">2- Agent</option>
                    </select>
                    <label htmlFor="searchprivileges_us" style={{fontWeight: 'bold', color: 'black', fontSize: '17px'}}>Privileges</label>
                  </div>
                  <div className="form-floating mb-3" style={{margin: '12px'}}>
  <select type="select" name="update-lang" id="searchlang_us" className="form-select shadow-effect purple-border" style={{width: '300px'}}>
                      <option value="Anglais" data-search="hei">All</option>
                      <option value="Anglais" data-search="hei">Anglais</option>
                      <option value="Français" data-search="hei">Français</option>
                      <option value="Espagnole" data-search="hei">Espagnole</option>
                      <option value="Anglais" data-search="hei">Anglais/Français</option>
                      <option value="Anglais" data-search="hei">Anglais/Espagnole</option>
                      <option value="Français" data-search="hei">Français/Espagnole</option>
  </select>
  <label htmlFor="searchlang_us" style={{fontWeight: 'bold', color: 'black', fontSize: '17px'}}>Languages</label>
</div>
 
                  </form>
                </div>
              </div>
              <br /><br />  
              <Button type="submit" variant="contained" color="secondary" startIcon={<SendIcon/>}  name="agent-search" style={{paddingLeft: '5.5%', paddingRight: '5.5%', letterSpacing: '4px', marginBottom: '2%', marginLeft: '3%'}} >MODIFY</Button>
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
