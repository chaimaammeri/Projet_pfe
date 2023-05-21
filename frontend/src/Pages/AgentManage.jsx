import Button from '@mui/material/Button';
import React, { useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import SendIcon from '@mui/icons-material/Send';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { grey } from '@mui/material/colors';


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
    const [Password_Ag, setPassword_Ag] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post('http://localhost:3001/AgentManage', {
          ID_Agent, FirstName_Ag, LastName_Ag, Email_Ag, Adress_Ag, Desk_Ag, Phone_Ag, Status_Ag, Unit_Ag, Language_Ag, Password_Ag });
        console.log(res.data);
      } catch (err) {
        console.error(err);
      }
    };
                                       
    return (
     <div>
       <Header></Header>
     <div className='form-bod' style={{marginTop:'200px',marginBottom:'200px'}}>
        <div className="container" > 
            <form onSubmit={handleSubmit} >
            <div className="managetitle2" style={{marginLeft:'140px', marginRight:'50px'}}>Create New Agent <NavLink to="/AgentList" style={{float:'right',fontSize: '16px' ,marginRight: '-30px' ,fontWeight:'bold',cursor:'pointer',lineHeight: '22px' ,display:'inlineBlock',color:'grey',zIndex:'3'}} onClick="">❐LIST OF AGENTS</NavLink></div>
                 <div className='content' style={{marginTop:'25px'}}> 

                    <div className='row'  style={{margin:'12px'}}>
                      <div className="col-md-6" >
                      <label htmlFor="id_ag" style={{marginLeft:'8px'}}>User ID</label>
                        <input type="number" name="ID_Agent" id="id_ag" onChange={(e) => setID_Ag(e.target.value)}  className="form-control  purple-border shadow-effect" placeholder="User ID Numeric Value" minLength={6} title="Minimimum 6 Numric Characters" required />
                      </div>
                      <div className=" col-md-6" >
                      <label htmlFor="firstname_ag" style={{marginLeft:'8px'}}>FirstName</label>
                        <input type="text" name="FirstName_Ag" id="firstname_ag" onChange={(e) => setFirstName_Ag(e.target.value)} autoComplete="off" className="form-control  purple-border shadow-effect" placeholder="agent firstname" required />
                      </div>
                    </div>

                    <div className='row'  style={{margin:'12px'}}>
                      <div className="col-md-6" >                       
                       <label htmlFor="lastname_ag" style={{marginLeft:'8px'}}>LastName </label> 
                        <input type="text" name="LastName_Ag" id="lastname_ag" onChange={(e) => setLastName_Ag(e.target.value)} className="form-control purple-border shadow-effect" autoComplete="off" placeholder="agent lastname" required />
                      </div>
                      <div className="col-md-6" >
                      <label htmlFor="email_ag" style={{marginLeft:'8px'}}>Email</label>
                        <input type="email" name="Email_Ag" id="email_ag" onChange={(e) => setEmail_Ag(e.target.value)}  autoComplete="off" className="form-control  purple-border shadow-effect" placeholder="agent Email" required />
                      </div>

                   </div>

                   <div className='row'  style={{margin:'12px'}}>
                     <div className=" col-md-6" >
                     <label htmlFor="adress_ag" style={{marginLeft:'8px'}}>Adress </label>
                       <input type="text" id="adress_ag" name="Adress_Ag" onChange={(e) => setAdress_Ag(e.target.value)}  placeholder="agent Address" minLength={6} autoComplete="off" className="form-control  purple-border shadow-effect"  required />
                     </div>
                     <div className="col-md-6">
                     <label htmlFor="phone_ag" style={{marginLeft:'8px'}}> Phone</label>
                       <input type="tel" name="Phone_Ag"  id="phone_ag"  onChange={(e) => setPhone_Ag(e.target.value)}   placeholder="Height Phone Numbers Required" minLength={8} pattern="[0-9]{8}" className="form-control  purple-border shadow-effect" />
                     </div>    
                   </div>
                   <div class="col-12" >
                      <label htmlFor="password_ag" style={{marginLeft:'30px'}}>Password</label>
                        <input type="password" name="Password_Ag" id="password_ag" onChange={(e) => setPassword_Ag(e.target.value)}  style={{width:'710px', marginLeft:'25px'}} autoComplete="off" className="form-control purple-border shadow-effect" placeholder="agent password" required />
                      </div>
               
                   <div className='row' style={{ margin: '12px 12px 0px 12px ' }}>
               <div className="mb-3 col-md-6">
      <label htmlFor="desk_ag" >Desk</label>
    <select type="select"  id="desk_ag" name="Desk_Ag" onChange={(e) => setDesk_Ag(e.target.value)}  className="form-select shadow-effect purple-border" style={{ width: '350px' ,height:'50px'}}>
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
  </div>
  <div className="mb-3 col-md-6">
  <label htmlFor="status_ag" >Status</label>
    <select type="select" id="status_ag" name="Status_Ag"  onChange={(e) => setStatus_Ag(e.target.value)}  className="form-select shadow-effect purple-border" style={{ width: '350px', height:'50px'}}>
      <option value=""></option>
      <option value="activated">1 - Activated</option>
      <option value="desativated">2 - Desactivated</option>
    </select>
  </div>
</div>

                   <div className='row'  style={{margin:'5px 12px 12px 12px '}}>
                     <div className=" mb-3 col-md-6" >
                     <label htmlFor="unit_ag" >Unit</label>
                       <select type="select" name="Unit_Ag" id="unit_ag"  onChange={(e) => setUnit_Ag(e.target.value)} className="form-select shadow-effect purple-border" style={{width: '350px' ,height:'50px'}}>
                       <option value=""></option>
                         <option value="none">None</option>
                         <option value="bu1">BU1</option>
                         <option value="bu2">BU2</option>
                         <option value="bu3">BU3</option>
                       </select>
                     </div>
                     <div className=" mb-3 col-md-6" >
                     <label htmlFor="lang_ag" > Languages </label>
                       <select type="select" id="lang_ag" name="Language_Ag" onChange={(e) => setLanguage_Ag(e.target.value)} className="form-select shadow-effect purple-border" style={{width: '350px' , height:'50px'}}>
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
                 
                    <Button type="submit" variant="contained" fullWidth color="secondary" startIcon={<SendIcon/>}  name="agent-search"  style={{paddingLeft: '9%', paddingRight: '9%', letterSpacing: '4px', marginBottom: '2%', marginLeft: '3%'}} >CREATE</Button>
                </div> 
             </form>
              </div>   
            </div> 
       
{/* ------------------------------------------------------------------------------------------------------------- */}
<div className='form-bod' style={{marginTop:'10px',marginBottom:'200px'}} >
<div className="container" > 
            <form onSubmit={handleSubmit} >
            <div className="managetitle2" style={{marginLeft:'20px',marginBottom:'25px'}}>Modify Agent </div>

                 <div className='content'> 

<div class="row g-3">
  <div class="col-sm-7">
  <label htmlFor="search_id" style={{marginLeft:'30px'}}>Search ID</label>  
  <input type="number" name="search-id" id="search-id" style={{marginLeft:'23px',width:'420px'}} placeholder="User ID Numeric Value" minLength={6} title="Minimum 6 Numeric Characters" className="form-control purple-border shadow-effect" />
  </div>

  <div class="col-sm">
  <Button variant="contained" startIcon={<PersonSearchIcon/>} style={{backgroundColor:'olivedrab',marginLeft:'30px',marginTop:'25px'}} type="submit" name="agent-search" >Search</Button>
  </div>

  <div class="col-sm">
  <Button variant="outlined" color="secondary" endIcon={<DeleteIcon />} style={{marginTop:'25px'}} type="submit" name="delete" >Delete</Button>
  </div>
</div>
                    
                  <div className='row'  style={{margin:'12px'}}>
  
                      <div className="col-md-6">
                      <label htmlFor="searchlastname_ag"  style={{margin: '8px'}}>FirstName</label>
                        <input type="text" name="update-firstName" id="searchlastname_ag" placeholder="User firstName" className="form-control  purple-border shadow-effect"/>
                      </div>
  
                      <div className="col-md-6">
                      <label htmlFor="searchlastname_ag"  style={{margin: '8px'}}>LastName </label> 
                        <input type="email" name="update-email" id="searchlastname_ag" placeholder="User Email" className="form-control  purple-border shadow-effect" />
                      </div>
  
                  </div>

                   <div className='row'  style={{margin:'12px'}}>
                     <div className="col-md-6" >
                     <label htmlFor="searchemail_ag" style={{margin: '8px'}}>Email </label> 
                       <input type="text" name="update-lastName" id="searchemail_ag" placeholder="User lastName" className="form-control  purple-border shadow-effect" />
                     </div> 
                     <div className="col-md-6" >
                     <label htmlFor="searchadress_ag" style={{margin: '8px'}}>Address </label>  
                       <input type="text" name="update-address" id="searchadress_ag" placeholder="User Address" minLength={6} className="form-control  purple-border shadow-effect" />
                     </div> 
                   </div> 


            <div className='row'  style={{margin:'12px'}}> 
                  <div className="col-md-6" style={{marginTop:'-16px'}} >
                  <label htmlFor="searchphone_ag" style={{margin: '8px'}}> Phone</label>
                      <input type="tel" name="searchphone_ag" id="searchphone_ag" placeholder="Height Phone Numbers Required" minLength={8} pattern="[0-9]{8}" className="form-control  purple-border shadow-effect"  />
                    </div>
                    <div className="col-md-6" style={{marginRight:'0px'}}>
                    <label htmlFor="searchdesk_ag" >Desk</label>
                      <select type="select" id="searchdesk_ag" name='' className="form-select shadow-effect purple-border" style={{width: '350px' ,height:'50px'}} >
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
                    </div>

                    <div className='row'  style={{margin:'12px'}}>

                    <div className="col-md-6" >
                    <label htmlFor="searchstatus_ag" style={{margin: '8px', marginTop: '-16px'}}>  Status </label>
                      <select type="select" id="searchstatus_ag" className="form-select shadow-effect purple-border" style={{width: '350px' ,height:'50px'}}>
                        <option value=""></option>
                        <option value="activated">1 - Activated</option>             
                        <option value="desativated">2 - Desactivated</option>
                      </select>
                    </div>

                    <div className="col-md-6" >
                    <label htmlFor="searchunit_ag" style={{margin: '8px', marginTop: '-3px'}} >Unit</label>
                      <select type="select" id="searchunit_ag" name="" className="form-select shadow-effect purple-border" style={{width: '350px' ,height:'50px'}}>
                      <option value=""></option>
                        <option value="none">None</option>
                        <option value="bu1">BU1</option>
                        <option value="bu2">BU2</option>
                        <option value="bu3">BU3</option>
                      </select>
                    </div>  
                    </div>

                  <div className='row'  style={{margin:'12px'}}>
  
                      <div class="col-12" style={{margin: '12px', marginTop: '-3px'}}>
                      <label htmlFor="searchlang_ag" >Languages</label>  
                        <select type="select" name="update-lang" id="searchlang_ag" className="form-select shadow-effect purple-border" style={{width:'710px', marginLeft:'-7px',height:'50px'}} >
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
           </div>
           <Button variant="contained" color="secondary" fullWidth startIcon={<SendIcon/>} type="submit" name="agent-search"  style={{paddingLeft: '5.5%', paddingRight: '5.5%', letterSpacing: '4px', marginBottom: '2%', marginLeft: '2%'}} >MODIFY</Button>

           </form>
            </div>
          </div>
          <div> <Footer></Footer>  </div>

         </div>
    );
}
export default AgentManage;

      
      



// -------------------dev vedio 46min--------------------------------

// const AgentManage = () => {
//   const[agent,setAgent]=useState({
//     ID_Agent:null,
//     FirstName_Ag:"",
//     LastName_Ag:"",
//     Email_Ag:"",
//     Adress_Ag:"",
//     Desk_Ag:"",
//     Phone_Ag:null,
//     Status_Ag:"",
//     Unit_Ag:"",
//     Language_Ag:"",
//     Password_Ag:"",
//   })
 
// const handleChange = (e) => {
//   setAgent((prev) => ({ ...prev, [e.target.name]: e.target.value }))
// }

//   const handleClick = async e =>{
//     e.preventDefault()
//     try{
//       await axios.post("http://localhost:3001/AgentManage", agent)
//     }catch(err){
//   console.log(err)
//     }
//   }

//     return (
//      <div>
//        <Header></Header>
//      <div className='form-bod' style={{marginTop:'300px',marginBottom:'200px'}}>
//         <div className="container"> 
//             <form >
//               <h2>Create New Agent</h2>
//                  <div className='content'> 

//                     <div className='row'  style={{margin:'12px'}}>
//                       <div className="col-md-6" >
//                       <label htmlFor="id_ag" style={{marginLeft:'8px'}}>User ID</label>
//                         <input type="number" name="ID_Agent" id="id_ag"  onChange={handleChange}  className="form-control  purple-border shadow-effect" placeholder="User ID Numeric Value" minLength={6} title="Minimimum 6 Numric Characters" required />
//                       </div>
//                       <div className=" col-md-6" >
//                       <label htmlFor="firstname_ag" style={{marginLeft:'8px'}}>FirstName</label>
//                         <input type="text" name="FirstName_Ag" id="firstname_ag" onChange={handleChange}  autoComplete="off" className="form-control  purple-border shadow-effect" placeholder="agent firstname" required />
//                       </div>
//                     </div>

//                     <div className='row'  style={{margin:'12px'}}>
//                       <div className="col-md-6" >                       
//                        <label htmlFor="lastname_ag" style={{marginLeft:'8px'}}>LastName </label> 
//                         <input type="text" name="LastName_Ag" id="lastname_ag" onChange={handleChange}  className="form-control purple-border shadow-effect" autoComplete="off" placeholder="agent lastname" required />
//                       </div>
//                       <div className="col-md-6" >
//                       <label htmlFor="email_ag" style={{marginLeft:'8px'}}>Email</label>
//                         <input type="email" name="Email_Ag" id="email_ag"  onChange={handleChange}   autoComplete="off" className="form-control  purple-border shadow-effect" placeholder="agent Email" required />
//                       </div>

//                    </div>

//                    <div className='row'  style={{margin:'12px'}}>
//                      <div className=" col-md-6" >
//                      <label htmlFor="adress_ag" style={{marginLeft:'8px'}}>Adress </label>
//                        <input type="text" id="adress_ag" name="Adress_Ag"  onChange={handleChange}   placeholder="agent Address" minLength={6} autoComplete="off" className="form-control  purple-border shadow-effect"  required />
//                      </div>
//                      <div className="col-md-6">
//                      <label htmlFor="phone_ag" style={{marginLeft:'8px'}}> Phone</label>
//                        <input type="tel" name="Phone_Ag"  id="phone_ag"  onChange={handleChange}   placeholder="Height Phone Numbers Required" minLength={8} pattern="[0-9]{8}" className="form-control  purple-border shadow-effect" />
//                      </div>    
//                    </div>
                  
//                    <div className='row' style={{ margin: '12px' }}>
//                <div className="mb-3 col-md-6">
//       <label htmlFor="desk_ag" >Desk</label>
//     <select type="select"  id="desk_ag" name="Desk_Ag"  onChange={handleChange} className="form-select shadow-effect purple-border" style={{ width: '300px', color: 'var(--bs-body-color)' }}>
//       <option value=""></option>
//       <option value="NA">NA</option>
//       <option value="Renault" data-search="renault">Renault</option>
//       <option value="Nissan" data-search="nissan">Nissan</option>
//       <option value="Saipem" data-search="spm">Saipem</option>
//       <option value="Convatec" data-search="cvt">Convatec</option>
//       <option value="Philips" data-search="philips">Philips</option>
//       <option value="Sonova" data-search="sonova">Sonova</option>
//       <option value="Hanes" data-search="hei">Hanes</option>
//       <option value="Xpo" data-search="xpo">Xpo</option>
//       <option value="Gxo" data-search="gxo">Gxo</option>
//       <option value="Mylan" data-search="mylan">Mylan</option>
//       <option value="Servier" data-search="servier">Servier</option>
//     </select>
//   </div>
//   <div className="mb-3 col-md-6">
//   <label htmlFor="status_ag" >Status</label>
//     <select type="select" id="status_ag" name="Status_Ag"  onChange={handleChange}  className="form-select shadow-effect purple-border" style={{ width: '300px' }}>
//       <option value=""></option>
//       <option value="activated">1 - Activated</option>
//       <option value="desativated">2 - Desactivated</option>
//     </select>
//   </div>
// </div>

//                    <div className='row'  style={{margin:'12px'}}>
//                      <div className=" mb-3 col-md-6" >
//                      <label htmlFor="unit_ag" >Unit</label>
//                        <select type="select" name="Unit_Ag" id="unit_ag" onChange={handleChange}  className="form-select shadow-effect purple-border" style={{width: '300px'}}>
//                        <option value=""></option>
//                          <option value="none">None</option>
//                          <option value="bu1">BU1</option>
//                          <option value="bu2">BU2</option>
//                          <option value="bu3">BU3</option>
//                        </select>
//                      </div>
//                      <div className=" mb-3 col-md-6" >
//                      <label htmlFor="lang_ag" > Languages </label>
//                        <select type="select" id="lang_ag" name="Language_Ag" onChange={handleChange}   className="form-select shadow-effect purple-border" style={{width: '300px'}}>
//                        <option value=""></option>
//                        <option value="Anglais" data-search="hei">All</option>
//                        <option value="Anglais" data-search="hei">Anglais</option>
//                        <option value="Français" data-search="hei">Français</option>
//                        <option value="Espagnole" data-search="hei">Espagnole</option>
//                        <option value="Anglais" data-search="hei">Anglais/Français</option>
//                        <option value="Anglais" data-search="hei">Anglais/Espagnole</option>
//                        <option value="Français" data-search="hei">Français/Espagnole</option>
//                        </select>
//                      </div> 
//                    </div> 
//                    <div className="" >
//                       <label htmlFor="password_ag" style={{marginLeft:'8px'}}>Password</label>
//                         <input type="password" name="Password_Ag" id="password_ag"  onChange={handleChange}   autoComplete="off" className="form-control  purple-border shadow-effect" placeholder="agent password" required />
//                       </div>

//                     <Button type="submit" onClick={handleClick} variant="contained" color="secondary" startIcon={<SendIcon/>}  name="agent-search"  style={{paddingLeft: '9%', paddingRight: '9%', letterSpacing: '4px', marginBottom: '2%', marginLeft: '3%'}} >CREATE</Button>
//                 </div> 
//              </form>
//               </div>   
             
//         </div>
//          <Footer></Footer>  
//           </div>
//     );
// }
// export default AgentManage;


// --------------------------------------CHAT GPT-----------------------------------------------------------
// const AgentManage = () => {
//   const [formData, setFormData] = useState({
//     ID_Agent: null,
//     FirstName_Ag: "",
//     LastName_Ag: "",
//     Email_Ag: "",
//     Adress_Ag: "",
//     Desk_Ag: "",
//     Phone_Ag: null,
//     Status_Ag: "",
//     Unit_Ag: "",
//     Language_Ag: "",
//     Password_Ag: "",
//   });

//   const handleChange = (e) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleClick = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:3001/AgentManage", formData);
//       // Reset the form after successful submission if needed
//       setFormData({
//         ID_Agent:0,
//         FirstName_Ag: "",
//         LastName_Ag: "",
//         Email_Ag: "",
//         Adress_Ag: "",
//         Desk_Ag: "",
//         Phone_Ag: 0,
//         Status_Ag: "",
//         Unit_Ag: "",
//         Language_Ag: "",
//         Password_Ag: "",
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div>
//       <Header></Header>
//       <div className='form-bod' style={{ marginTop: '300px', marginBottom: '200px' }}>
//         <div className="container">
//           <form>
//             <h2>Create New Agent</h2>
//             <div className='content'>
//               {/* Form inputs */}
//               <div className='row' style={{ margin: '12px' }}>
//                 {/* ID_Agent input */}
//                 <div className="col-md-6" >
//                   <label htmlFor="id_ag" style={{ marginLeft: '8px' }}>User ID</label>
//                   <input
//                     type="number"
//                     name="ID_Agent"
//                     id="id_ag"
//                     value={formData.ID_Agent} onChange={handleChange}
//                     className="form-control purple-border shadow-effect"
//                     placeholder="User ID Numeric Value"
//                     minLength={6}
//                     title="Minimimum 6 Numeric Characters"
//                     required
//                   />
//                 </div>
//                 {/* FirstName_Ag input */}
//                 <div className=" col-md-6" >
//                   <label htmlFor="firstname_ag" style={{ marginLeft: '8px' }}>FirstName</label>
//                   <input
//                     type="text"
//                     name="FirstName_Ag"
//                     id="firstname_ag"
//                     value={formData.FirstName_Ag}
//                     onChange={handleChange}
//                     autoComplete="off"
//                     className="form-control purple-border shadow-effect"
//                     placeholder="agent firstname"
//                     required
//                   />
//                 </div>
//               </div>
//               <div className='row'  style={{margin:'12px'}}>
//                    <div className="col-md-6" >                       
//                     <label htmlFor="lastname_ag" style={{marginLeft:'8px'}}>LastName </label> 
//                      <input type="text" name="LastName_Ag" id="lastname_ag" value={formData.LastName_Ag} onChange={handleChange} className="form-control purple-border shadow-effect" autoComplete="off" placeholder="agent lastname" required />
//                    </div>
//                    <div className="col-md-6" >
//                    <label htmlFor="email_ag" style={{marginLeft:'8px'}}>Email</label>
//                      <input type="email" name="Email_Ag" id="email_ag"value={formData.Email_Ag} onChange={handleChange}  autoComplete="off" className="form-control  purple-border shadow-effect" placeholder="agent Email" required />
//                    </div>

//                 </div>

//                 <div className='row'  style={{margin:'12px'}}>
//                   <div className=" col-md-6" >
//                   <label htmlFor="adress_ag" style={{marginLeft:'8px'}}>Adress </label>
//                     <input type="text" id="adress_ag" name="Adress_Ag" value={formData.Adress_Ag} onChange={handleChange}  placeholder="agent Address" minLength={6} autoComplete="off" className="form-control  purple-border shadow-effect"  required />
//                   </div>
//                   <div className="col-md-6">
//                   <label htmlFor="phone_ag" style={{marginLeft:'8px'}}> Phone</label>
//                     <input type="tel" name="Phone_Ag"  id="phone_ag"  value={formData.Phone_Ag} onChange={handleChange}   placeholder="Height Phone Numbers Required" minLength={8} pattern="[0-9]{8}" className="form-control  purple-border shadow-effect" />
//                   </div>    
//                 </div>
               
//                 <div className='row' style={{ margin: '12px' }}>
//             <div className="mb-3 col-md-6">
//    <label htmlFor="desk_ag" >Desk</label>
//  <select type="select"  id="desk_ag" name="Desk_Ag" value={formData.Desk_Ag} onChange={handleChange}  className="form-select shadow-effect purple-border" style={{ width: '300px', color: 'var(--bs-body-color)' }}>
//    <option value=""></option>
//    <option value="NA">NA</option>
//    <option value="Renault" data-search="renault">Renault</option>
//    <option value="Nissan" data-search="nissan">Nissan</option>
//    <option value="Saipem" data-search="spm">Saipem</option>
//    <option value="Convatec" data-search="cvt">Convatec</option>
//    <option value="Philips" data-search="philips">Philips</option>
//    <option value="Sonova" data-search="sonova">Sonova</option>
//    <option value="Hanes" data-search="hei">Hanes</option>
//    <option value="Xpo" data-search="xpo">Xpo</option>
//    <option value="Gxo" data-search="gxo">Gxo</option>
//    <option value="Mylan" data-search="mylan">Mylan</option>
//    <option value="Servier" data-search="servier">Servier</option>
//  </select>
// </div>
// <div className="mb-3 col-md-6">
// <label htmlFor="status_ag" >Status</label>
//  <select type="select" id="status_ag" name="Status_Ag"  value={formData.Status_Ag} onChange={handleChange}  className="form-select shadow-effect purple-border" style={{ width: '300px' }}>
//    <option value=""></option>
//    <option value="activated">1 - Activated</option>
//    <option value="desativated">2 - Desactivated</option>
//  </select>
// </div>
// </div>

//                 <div className='row'  style={{margin:'12px'}}>
//                   <div className=" mb-3 col-md-6" >
//                   <label htmlFor="unit_ag" >Unit</label>
//                     <select type="select" name="Unit_Ag" id="unit_ag"  value={formData.Unit_Ag} onChange={handleChange} className="form-select shadow-effect purple-border" style={{width: '300px'}}>
//                     <option value=""></option>
//                       <option value="none">None</option>
//                       <option value="bu1">BU1</option>
//                       <option value="bu2">BU2</option>
//                       <option value="bu3">BU3</option>
//                     </select>
//                   </div>
//                   <div className=" mb-3 col-md-6" >
//                   <label htmlFor="lang_ag" > Languages </label>
//                     <select type="select" id="lang_ag" name="Language_Ag" value={formData.Language_Ag} onChange={handleChange} className="form-select shadow-effect purple-border" style={{width: '300px'}}>
//                     <option value=""></option>
//                     <option value="Anglais" data-search="hei">All</option>
//                     <option value="Anglais" data-search="hei">Anglais</option>
//                     <option value="Français" data-search="hei">Français</option>
//                     <option value="Espagnole" data-search="hei">Espagnole</option>
//                     <option value="Anglais" data-search="hei">Anglais/Français</option>
//                     <option value="Anglais" data-search="hei">Anglais/Espagnole</option>
//                     <option value="Français" data-search="hei">Français/Espagnole</option>
//                     </select>
//                   </div> 
//                 </div> 
//                 <div className="" >
//                    <label htmlFor="password_ag" style={{marginLeft:'8px'}}>Password</label>
//                      <input type="password" name="Password_Ag" id="password_ag" value={formData.Password_Ag} onChange={handleChange} autoComplete="off" className="form-control  purple-border shadow-effect" placeholder="agent password" required />
//                    </div>

//               <Button
//                 type="submit"
//                 onClick={handleClick}
//                 variant="contained"
//                 color="secondary"
//                 startIcon={<SendIcon />}
//                 name="agent-search"
//                 style={{ paddingLeft: '9%', paddingRight: '9%', letterSpacing: '4px', marginBottom: '2%', marginLeft: '3%' }}
//               >
//                 CREATE
//               </Button>
//             </div>
//           </form>
//         </div>

//         </div>
//       <Footer></Footer>  
//        </div>
//  );
// }
// export default AgentManage;

