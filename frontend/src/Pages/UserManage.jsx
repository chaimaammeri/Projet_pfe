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
  
        <div className='form-bod' style={{marginTop:'210px',marginBottom:'230px'}}>
        <div className="container" > 
            <form onSubmit={handleSubmit} >
            <div className="managetitle2" style={{marginLeft:'140px', marginRight:'50px'}}>Create New User <NavLink to="/AgentList" style={{float:'right',fontSize: '16px' ,marginRight: '-30px' ,fontWeight:'bold',cursor:'pointer',lineHeight: '22px' ,display:'inlineBlock',color:'grey',zIndex:'3'}}>❐LIST OF USERS</NavLink></div>
            <div className='content' style={{marginTop:'25px'}}> 

                   <div className='row'  style={{margin:'12px'}}>
                     <div className=" col-md-6">
                       <label htmlFor="id_us" style={{marginLeft:'8px'}}>User ID</label> 
                       <input type="number" id="id_us" onChange={e => setData({...data, ID_Us: e.target.value})} autoComplete="off" name="Id_Us" placeholder='User ID'  className="form-control  purple-border shadow-effect"  minLength={6} title="Minimimum 6 Numric Characters" required />
                     </div>
                     <div className=" col-md-6">
                       <label htmlFor="firstname_us" style={{marginLeft:'8px'}}>FirstName</label>
                       <input type="text" id="firstname_us" onChange={e => setData({...data, FirstName_Us: e.target.value})} name="firstName"  autoComplete="off" className="form-control purple-border shadow-effect"  placeholder="User firstName" required />
                     </div>
                   </div>

                    <div className='row'  style={{margin:'12px'}}>
                      <div className=" col-md-6" >
                        <label htmlFor="lastname_us" style={{marginLeft:'8px'}}>LastName </label> 
                        <input type="text" id="lastname_us"  onChange={e => setData({...data, LastName_Us: e.target.value})} name="lasttName"  autoComplete="off" className="form-control  purple-border shadow-effect"  placeholder="User lastName" required />
                      </div>
                      <div className=" col-md-6" >
                        <label htmlFor="email_us" style={{marginLeft:'8px'}}>Email</label>
                        <input type="email" name="email_us" id="email" onChange={e => setData({...data, Email_Us: e.target.value})}  autoComplete="off" className="form-control  purple-border shadow-effect" placeholder="User Email" required />
                      </div>
                    </div>

                 <div className='row'  style={{margin:'12px'}}>
                     <div className=" col-md-6" >
                       <label htmlFor="password_us" style={{marginLeft:'8px'}}>Password </label> 
                       <input type="password" id="password_us" onChange={e => setData({...data, Password_Us: e.target.value})} name="password"    title="password" placeholder="minimum 8 charactres with alphanueric" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required className="form-control  purple-border shadow-effect" />
                     </div>
                     <div className=" col-md-6" >
                       <label htmlFor="adress_us" style={{marginLeft:'8px'}}>Address </label>
                       <input type="text" id="adress_us" onChange={e => setData({...data, Adress_Us: e.target.value})} name="adress"   placeholder="User Address" minLength={6} autoComplete="off" className="form-control  purple-border shadow-effect"  required />
                     </div>
                  
                 </div>

               <div class="col-12"  style={{margin:'12px'}}>
  
                    <div className=" col-md-6" >
                    <label htmlFor="phone_us" style={{marginLeft:'20px'}}> Phone</label>
                    <input type="tel"  id="phone_us"  onChange={e => setData({...data, Phone_Us: e.target.value})} style={{width:'710px', marginLeft:'14px'}} name="phone" autoComplete="off"   placeholder="Phone Numbers" minLength={8} pattern="[0-9]{8}" required className="form-control  purple-border shadow-effect" />
                    </div>
              </div>


                 <div className='row'  style={{margin:'12px'}}>
                   <div className="col-md-6" >
                   <label htmlFor="desk_us" >Desk</label>
                     <select type="select" id="desk_us"  onChange={e => setData({...data, Desk_Us: e.target.value})} className="form-select shadow-effect purple-border" required  style={{ width: '350px' ,height:'50px'}} >
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
                   </div>
                  
                  
                   <div className="col-md-6" >
                   <label htmlFor="status_us" >  Status </label>    
                     <select type="select" id="status_us" onChange={e => setData({...data, Status_Us: e.target.value})}   required className="form-select shadow-effect purple-border" style={{ width: '350px' ,height:'50px'}}>
                     <option value=""></option>
                       <option value="activated">1 - Activated</option>             
                       <option value="desativated">2 - Desactivated</option>
                     </select>
                   </div>
                 </div>


                 <div className='row'  style={{margin:'12px'}}>
  
                    <div className="col-md-6" >
                    <label htmlFor="privileges_us" > Privileges </label>
                      <select type="select" id='privileges_us'  onChange={e => setData({...data, Privilége_Us: e.target.value})}   required className="form-select shadow-effect purple-border" style={{ width: '350px' ,height:'50px'}}>
                      <option value=""></option>  
                        <option value="admin">1 - Administrator</option>             
                        <option value="user">2 - User</option>     
                        <option value="qas">3 - QAS</option>             
                        <option value="otl">4 - OTL</option>    
                        <option value="agent">5 - Agent</option>
                      </select>
                    </div>
  
                    <div className="col-md-6" >
                    <label htmlFor="lang_us" > Languages </label>
                      <select type="select" id="lang_us"  onChange={e => setData({...data, Language_Us: e.target.value})}  className="form-select shadow-effect purple-border" style={{ width: '350px' ,height:'50px'}} required>
                      <option value=""></option>
                        <option value="Anglais" data-search="hei">All</option>
                        <option value="Anglais" data-search="hei">Anglais</option>
                        <option value="Français" data-search="hei">Français</option>
                        <option value="Espagnole" data-search="hei">Espagnole</option>
                        <option value="Anglais" data-search="hei">Anglais/Français</option>
                        <option value="Anglais" data-search="hei">Anglais/Espagnole</option>
                        <option value="Français" data-search="hei">Français/Espagnole</option>
                      </select>
                    </div>
               </div>

              <Button type="submit" variant="contained" fullWidth color="secondary" startIcon={<SendIcon/>}  name="agent-search" defaultValue="CREATE" style={{paddingLeft: '9%', paddingRight: '9%', letterSpacing: '4px', marginBottom: '2%', marginLeft: '3%'}} >CREATE</Button>
                </div> 
             </form>
              </div>   
            </div> 
       
{/* --------------modifyy--------------------------------- */}
<div className='form-bod' style={{marginBottom:'180px'}} >
<div className="container" > 
            <form onSubmit={handleSubmit} >
            <div className="managetitle2" style={{marginLeft:'20px',marginBottom:'25px'}}>Modify Agent </div>


 <div className='content'> 

  <div class="row g-3">
    <div class="col-sm-7">
        <label htmlFor="searchid_us" style={{marginLeft:'30px'}}>Search ID</label>  
        <input type="number" name="search-id"  style={{marginLeft:'23px',width:'420px'}} id="searchid_us"  placeholder="User ID Numeric Value" minLength={6} title="Minimum 6 Numeric Characters" className="form-control purple-border shadow-effect" />
    </div>

   <div class="col-sm">
     <Button variant="contained" startIcon={<PersonSearchIcon/>} style={{backgroundColor:'olivedrab',marginLeft:'30px',marginTop:'25px'}} type="submit" name="agent-search" >Search</Button>
   </div>

  <div class="col-sm">
    <Button variant="outlined" color="secondary" endIcon={<DeleteIcon />} style={{marginTop:'25px'}} type="submit" name="delete" >Delete</Button>
  </div>
</div>
      
                    <div  className='row'  style={{margin:'12px'}}>
                      <div className="col-md-6">
                        <label htmlFor="searchfirst_us">FirstName</label>
                        <input type="text" name="searchfirst_us"  placeholder="User firstName" className="form-control  purple-border shadow-effect" />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="searchlast_us">LastName </label> 
                        <input type="email" name="searchlast_us"  placeholder="User Email" className="form-control  purple-border shadow-effect"  />
                      </div>
                    </div>


                 <div className='row'  style={{margin:'12px'}}>
                   <div className="col-md-6">
                     <label htmlFor="searchemail_us">Email </label> 
                       <input type="text" id='searchemail_us' name="update-lastName" placeholder="User lastName" className="form-control  purple-border shadow-effect"  />
                   </div>
                     
                   <div className="col-md-6">
                     <label htmlFor="searchpassword_us">Password</label>
                     <input type="password" name="update-password" id="searchpassword_us" title="Password title" placeholder="minimum 8 charactres with alphanueric" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"  className="form-control purple-border shadow-effect"  />
                   </div>
                 </div>

                  
                 <div className='row' style={{margin:'12px'}}>
                   <div className="col-md-6">
                      <label htmlFor="searchadress_us">Address </label>
                       <input type="text" name="update-address" id="searchadress_us"  placeholder="User Address" minLength={6} autoComplete="off" className="form-control  purple-border shadow-effect"  />
                     </div>
                  
                  <div className="col-md-6">
                       <label htmlFor="searchphone_id">Phone</label> 
                       <input type="tel" id="searchphone_id"  name="update-phone" placeholder="Height Phone Numbers Required" className="form-control  purple-border shadow-effect" />
                    </div>
                 </div>


                <div className='row'  style={{margin:'12px'}}>
                    <div className="col-md-6">
                    <label htmlFor="searchdesk_us" >Desk</label>
                      <select type="select"  id="searchdesk_us"   style={{width: '350px' ,height:'50px'}} className="form-select shadow-effect purple-border" >
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
                    </div>   
                    <div className="col-md-6">
                    <label htmlFor="searchstatus_us">Status</label>
                      <select type="select" name="update-status"  style={{width: '350px' ,height:'50px'}} id="searchstatus_us" className="form-select shadow-effect purple-border" >
                        <option value=""></option>
                        <option value="activated">Activated</option>
                        <option value="desactivated">Desactivated</option>
                      </select>
                    </div>
                    
                  </div>

                 <div className='row'  style={{margin:'12px'}}>
                 <div  className="col-md-6">
                   <label htmlFor="searchprivileges_us" >Privileges</label>
                     <select type="select" name="update-privilege"  style={{width: '350px' ,height:'50px'}}  id="searchprivileges_us"  className="form-select shadow-effect purple-border">
                     <option value=""></option>
                       <option value="admin"> 1- Administrator</option>
                       <option value="user">2- User</option> 
                       <option value="otl">1- OTL</option>
                       <option value="qas">2- QAS</option>        
                       <option value="agent">2- Agent</option>
                     </select>
                   </div>
                   <div className="col-md-6" >
                   <label htmlFor="searchlang_us" >Languages</label>
                     <select type="select" name="update-lang"  style={{width: '350px' ,height:'50px'}} id="searchlang_us" className="form-select shadow-effect purple-border" >
                       <option value="Anglais" data-search="hei">All</option>
                       <option value="Anglais" data-search="hei">Anglais</option>
                       <option value="Français" data-search="hei">Français</option>
                       <option value="Espagnole" data-search="hei">Espagnole</option>
                       <option value="Anglais" data-search="hei">Anglais/Français</option>
                       <option value="Anglais" data-search="hei">Anglais/Espagnole</option>
                       <option value="Français" data-search="hei">Français/Espagnole</option>
                   </select>
                  </div>
                 </div>
                 </div>
              <Button type="submit" variant="contained" fullWidth color="secondary" startIcon={<SendIcon/>}  name="agent-search" style={{paddingLeft: '5.5%', paddingRight: '5.5%', letterSpacing: '4px', marginBottom: '1%', marginLeft: '3%'}} >MODIFY</Button>
              
              </form>
          </div>
          </div>
          <div> <Footer></Footer>  </div>

         </div>
    );
}
export default UserManage;
