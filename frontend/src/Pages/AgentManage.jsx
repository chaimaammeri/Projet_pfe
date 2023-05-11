import Button from '@mui/material/Button';
import React, { useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import SendIcon from '@mui/icons-material/Send';
import { NavLink } from 'react-router-dom';
import axios from 'axios';


function AgentManage() {
  const [ID_Agent, setID_Ag] = useState('');
  const [FirstName_Ag, setFirstName_Ag] = useState('');
  const [LastName_Ag, setLastName_Ag] = useState('');
  const [Email_Ag,  setEmail_Ag] = useState('');
  const [Adress_Ag, setAdress_Ag] = useState('');
  const [Phone_Ag, setPhone_Ag] = useState('');
  const [Desk_Ag, setDesk_Ag] = useState('');
  const [Status_Ag, setStatus_Ag] = useState('');
  const [Unit_Ag, setUnit_Ag] = useState('');
  const [Language_Ag, setLanguage_Ag] = useState('');



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/AgentManage', {ID_Agent, FirstName_Ag, LastName_Ag, Email_Ag, Adress_Ag, Desk_Ag, Phone_Ag, Status_Ag, Unit_Ag, Language_Ag });
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

    return (
        <div>
     <Header></Header>
  
        <div className="main-manage2">
          <div className="manage">
          <div className="managetitle2" style={{marginLeft:'220px'}}>Create New Agent <NavLink to="/AgentList" style={{float:'right',fontSize: '16px' ,marginRight: '30px' ,fontWeight:'bold',cursor:'pointer',lineHeight: '22px' ,display:'inlineBlock',color:'grey',zIndex:'3'}} >❐LIST OF AGENTS</NavLink></div>
            <div className="manageform">
              <div className="form-frame"> 
                <div className="frame1" style={{marginLeft: '-150px'}}>                            
                  <form onSubmit={handleSubmit}>
                    <div className="form-floating" style={{margin: '12px'}}>
                      <input type="number" name="userId" id="id_ag" value={ID_Agent} onChange={(e) => setID_Ag(e.target.value)}  className="form-control  purple-border shadow-effect" placeholder="User ID Numeric Value" minLength={6} title="Minimimum 6 Numric Characters" required />
                      <label htmlFor="id_ag">User ID</label>
                    </div>
                    <div className="form-floating" style={{margin: '12px'}}>
                      <input type="text" name="firstname" id="firstname_ag" value={FirstName_Ag} onChange={(e) => setFirstName_Ag(e.target.value)}  autoComplete="off" className="form-control  purple-border shadow-effect" placeholder="agent firstname" required />
                      <label htmlFor="name_ag">FirstName</label>
                    </div>
                    <div className="form-floating" style={{margin: '12px'}}>
                      <input type="text" name="lastname" id="lastname_ag" value={LastName_Ag} onChange={(e) => setLastName_Ag(e.target.value)}  className="form-control purple-border shadow-effect" autoComplete="off" placeholder="agent lastname" required />
                      <label htmlFor="lastname_ag">LastName </label> 
                    </div>
                    <div className="form-floating" style={{margin: '12px'}}>
                      <input type="email" name="email" id="email_ag" value={Email_Ag} onChange={(e) => setEmail_Ag(e.target.value)}  autoComplete="off" className="form-control  purple-border shadow-effect" placeholder="agent Email" required />
                      <label htmlFor="email_ag">Email</label>
                    </div>
                    <div className="form-floating" style={{margin: '12px'}}>
                      <input type="text" id="adress_ag" name="adress" value={Adress_Ag} onChange={(e) => setAdress_Ag(e.target.value)}  placeholder="agent Address" minLength={6} autoComplete="off" className="form-control  purple-border shadow-effect"  required />
                      <label htmlFor="adress_ag">Adress </label>
                    </div>
                  </form>
                </div>
                <div className="frame2" style={{marginLeft: '152px'}}> 
                  <form  onSubmit={handleSubmit}>
                  
                    <div className="form-floating mb-3" style={{margin: '12px', marginTop: '-3px'}}>
                      <select type="select"  id="desk_ag" name="" value={Desk_Ag} onChange={(e) => setDesk_Ag(e.target.value)} className="form-select shadow-effect purple-border"style={{width: '300px', color: 'var(--bs-body-color)'}} >
                      <option value=""></option>
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
                      <label htmlFor="desk_ag" style={{fontWeight: 'bold', color: 'black', fontSize: '17px'}}>Desk</label>
                    </div>  
                    <div className="form-floating" style={{margin: '12px'}}>
                      <input type="tel" name="phone"  id="phone_ag" value={Phone_Ag} onChange={(e) => setPhone_Ag(e.target.value)}  placeholder="Height Phone Numbers Required" minLength={8} pattern="[0-9]{8}" className="form-control  purple-border shadow-effect" />
                      <label htmlFor="phone_ag"> Phone</label>
                    </div>           
                    <div className="form-floating mb-3" style={{margin: '12px', marginTop: '-3px'}}>
                      <select type="select" id="status_ag" name="" value={Status_Ag} onChange={(e) => setStatus_Ag(e.target.value)}  class="form-select shadow-effect purple-border" style={{width: '300px'}}>
                      <option value=""></option>
                        <option value="activated">1 - Activated</option>             
                        <option value="desativated">2 - Desactivated</option>
                      </select>
                      <label htmlFor="status_ag" style={{fontWeight: 'bold', color: 'black', fontSize: '17px'}}>  Status </label>
                    </div>    
                    <div className="form-floating mb-3" style={{margin: '12px', marginTop: '-3px'}}>
                      <select type="select" name="" id="unit_ag" value={Unit_Ag} onChange={(e) => setUnit_Ag(e.target.value)}  className="form-select shadow-effect purple-border" style={{width: '300px'}}>
                      <option value=""></option>
                        <option value="none">None</option>
                        <option value="bu1">BU1</option>
                        <option value="bu2">BU2</option>
                        <option value="bu3">BU3</option>
                      </select>
                      <label htmlFor="unit_ag" style={{fontWeight: 'bold', color: 'black', fontSize: '17px'}}>Unit</label>
                    </div>
                    <div className="form-floating mb-3" style={{margin: '12px', marginTop: '-3px'}}>
                      <select type="select" id="lang_ag" name="" value={Language_Ag} onChange={(e) => setLanguage_Ag(e.target.value)}  className="form-select shadow-effect purple-border" style={{width: '300px'}}>
                      <option value=""></option>
                      <option value="Anglais" data-search="hei">All</option>
                      <option value="Anglais" data-search="hei">Anglais</option>
                      <option value="Français" data-search="hei">Français</option>
                      <option value="Espagnole" data-search="hei">Espagnole</option>
                      <option value="Anglais" data-search="hei">Anglais/Français</option>
                      <option value="Anglais" data-search="hei">Anglais/Espagnole</option>
                      <option value="Français" data-search="hei">Français/Espagnole</option>
                      </select>
                      <label htmlFor="lang_ag" style={{fontWeight: 'bold', color: 'black', fontSize: '17px'}}> Languages </label>
                    </div>                                      
                  </form> 
                </div>
              </div>    
              <br /><br />    
              <Button variant="contained" color="secondary" startIcon={<SendIcon/>} type="submit" name="agent-search"  style={{paddingLeft: '9%', paddingRight: '9%', letterSpacing: '4px', marginBottom: '2%', marginLeft: '3%'}} >CREATE</Button>
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
                  <form >   
                  <div style={{display: 'flex',alignItems: 'center'}}>
    <div className="form-floating" style={{margin: '12px'}}>
     <input type="number" name="search-id" id="search-id" placeholder="User ID Numeric Value" minLength={6} title="Minimum 6 Numeric Characters" className="form-control purple-border shadow-effect" />
     <label htmlFor="search_id">Search ID</label>  
  </div>

  <div style={{margin: '12px'}}>
    <Button variant="contained" startIcon={<PersonSearchIcon/>} style={{backgroundColor:'olivedrab'}} type="submit" name="agent-search" >Search</Button>
  </div>

  <div style={{margin: '12px'}}>
  <Button variant="outlined" color="secondary" endIcon={<DeleteIcon />} type="submit" name="delete" >Delete</Button>
  </div>
</div>

                    <div className="form-floating" style={{margin: '12px'}}>
                      <input type="text" name="update-firstName" id="searchlastname_ag" placeholder="User firstName" className="form-control  purple-border shadow-effect"/>
                      <label htmlFor="searchlastname_ag">FirstName</label>
                    </div>
                    <div className="form-floating" style={{margin: '12px'}}>
                      <input type="email" name="update-email" id="searchlastname_ag" placeholder="User Email" className="form-control  purple-border shadow-effect" />
                      <label htmlFor="searchlastname_ag">LastName </label> 
                    </div>
                    <div className="form-floating" style={{margin: '12px'}}>
                      <input type="text" name="update-lastName" id="searchemail_ag" placeholder="User lastName" className="form-control  purple-border shadow-effect" />
                      <label htmlFor="searchemail_ag">Email </label> 
                    </div> 
                    <div className="form-floating" style={{margin: '12px'}}>
                      <input type="text" name="update-address" id="searchadress_ag" placeholder="User Address" minLength={6} className="form-control  purple-border shadow-effect" />
                      <label htmlFor="searchadress_ag">Address </label>  
                    </div>  
                     
                  </form>

                </div> 
                <div className="frame2" style={{marginLeft: '120px'}}> 
                  <form >   
                  <div className="form-floating" style={{margin: '12px'}}>
                      <input type="tel" name="searchphone_ag" id="searchphone_ag" placeholder="Height Phone Numbers Required" minLength={8} pattern="[0-9]{8}" className="form-control  purple-border shadow-effect"  />
                      <label htmlFor="searchphone_ag"> Phone</label>
                    </div>
                    <div className="form-floating mb-3" style={{margin: '12px', marginTop: '-3px'}}>
                      <select type="select" id="searchdesk_ag" name='' className="form-select shadow-effect purple-border" style={{width: '300px'}} >
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
                      <label htmlFor="searchdesk_ag" style={{fontWeight: 'bold', color: 'black', fontSize: '17px'}}>Desk</label>
                    </div> 
                    <span id="unit-container" style={{display: 'none'}} />
                    <div className="form-floating mb-3" style={{margin: '12px', marginTop: '-3px'}}>
                      <select type="select" id="searchstatus_ag" className="form-select shadow-effect purple-border" style={{width: '300px'}}>
                        <option value=""></option>
                        <option value="activated">1 - Activated</option>             
                        <option value="desativated">2 - Desactivated</option>
                      </select>
                      <label htmlFor="searchstatus_ag" style={{fontWeight: 'bold', color: 'black', fontSize: '17px'}}>  Status </label>
                    </div>
                    <div className="form-floating mb-3" style={{margin: '12px', marginTop: '-3px'}}>
                      <select type="select" id="searchunit_ag" name="" className="form-select shadow-effect purple-border" style={{width: '300px'}}>
                      <option value=""></option>
                        <option value="none">None</option>
                        <option value="bu1">BU1</option>
                        <option value="bu2">BU2</option>
                        <option value="bu3">BU3</option>
                      </select>
                      <label htmlFor="searchunit_ag" style={{fontWeight: 'bold', color: 'black', fontSize: '17px'}}>Unit</label>
                    </div>     
                    <div className="form-floating mb-3" style={{margin: '12px', marginTop: '-3px'}}>
                      <select type="select" name="update-lang" id="searchlang_ag" className="form-select shadow-effect purple-border" style={{width: '300px'}}>
                      <option value=""></option>

                      <option value="Anglais" data-search="hei">All</option>
                      <option value="Anglais" data-search="hei">Anglais</option>
                      <option value="Français" data-search="hei">Français</option>
                      <option value="Espagnole" data-search="hei">Espagnole</option>
                      <option value="Anglais" data-search="hei">Anglais/Français</option>
                      <option value="Anglais" data-search="hei">Anglais/Espagnole</option>
                      <option value="Français" data-search="hei">Français/Espagnole</option>

                      </select>
                      <label htmlFor="searchlang_ag" style={{fontWeight: 'bold', color: 'black', fontSize: '17px'}}>Languages</label>
                      <br />     
                    </div> 
                  </form>
                </div>
              </div> 
                 <br /><br /> 
                 <Button variant="contained" color="secondary" startIcon={<SendIcon/>} type="submit" name="agent-search"  style={{paddingLeft: '5.5%', paddingRight: '5.5%', letterSpacing: '4px', marginBottom: '2%', marginLeft: '3%'}} >MODIFY</Button>
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
