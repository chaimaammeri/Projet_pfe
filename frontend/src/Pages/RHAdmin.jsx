import { Button, ButtonGroup, TextField } from '@mui/material';
import React, { useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete'
import axios from 'axios';

function  RHAdmin()  {
  const [ID_Emp, setId] = useState('');
  const [FirstName_Emp, setFirstName] = useState('');
  const [LastName_Emp, setLastName] = useState('');
  const [Email_Emp, setEmail] = useState('');
  const [NID, setDesk] = useState('');
  const [Manager_Emp, setManager] = useState('');

  const handleSearch = async () => {
    try {
      const res = await axios.get(`http://localhost:3001/RHAdmin/${ID_Emp}`);
      const { FirstName_Emp, LastName_Emp, Email_Emp, NID,Manager_Emp } = res.data;
      setFirstName(FirstName_Emp);
      setLastName(LastName_Emp);
      setEmail(Email_Emp);
      setDesk(NID);
      setManager(Manager_Emp);
    } catch (err) {
      console.log(err);
    }
  };

  // ---------------------------------
 const[data, setData] = useState({
  ID_Emp:'',
  FirstName_Emp:'',
  LastName_Emp:'',
  Email_Emp:'',
  Manager_Emp:'',
  NID:'',
  Salary_Emp:'',
  Title_Emp:'',
  StartDate:'',
  EndDate:''

 })
 const handleSubmit = (event) => {
  event.preventDefault();
  const formdata = new FormData();
  formdata.append("ID_Emp", data.ID_Emp);
  formdata.append("FirstName_Emp", data.FirstName_Emp);
  formdata.append("LastName_Emp", data.LastName_Emp);
  formdata.append("Email_Emp", data.Email_Emp);
  formdata.append("Manager_Emp", data.Manager_Emp);
  formdata.append("NID", data.NID);
  formdata.append("Salary_Emp", data.Salary_Emp);
  formdata.append("Title_Emp", data.Title_Emp);
  formdata.append("StartDate", data.StartDate);
  formdata.append("EndDate", data.EndDate);
  axios.post('http://localhost:3001/RHAdmin', formdata)
  .then(res => console.log(res))
  .catch(err => console.log(err));
 }

  return (
    <div>
      <Header></Header>
      <div style={{marginTop:'100px',display:'inline-block',marginBottom:'30px'}}>
      <TextField
        label="ID"
        placeholder="search"
        id="standard-basic"
        variant="standard"
        color="secondary"
        focused
        style={{margin:'7px',width:'170px'}}
        value={ID_Emp}
        onChange={(e) => setId(e.target.value)}
      />
      <Button
        size="small"
        variant="contained"
        style={{marginTop:'30px',backgroundColor:'olivedrab'}}
        onClick={handleSearch}
      >
        search
      </Button>
      <TextField
        label="First Name"
        id="standard-basic"
        color="secondary"
        variant="standard"
        focused
        style={{margin:'15px',width:'230px'}}
        value={FirstName_Emp}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <TextField
        label="Last Name"
        id="standard-basic"
        color="secondary"
        variant="standard"
        focused
        style={{margin:'15px',width:'230px'}}
        value={LastName_Emp}
        onChange={(e) => setLastName(e.target.value)}
      />
      <br />
      <TextField
        label="Email"
        variant="standard"
        color="secondary"
        focused
        style={{margin:'15px',width:'230px'}}
        value={Email_Emp}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Desk"
        variant="standard"
        color="secondary"
        focused
        style={{margin:'15px',width:'230px'}}
        value={NID}
        onChange={(e) => setDesk(e.target.value)}
      />
      <TextField
        label="Manager"
        variant="standard"
        color="secondary"
        focused
        style={{margin:'15px',width:'230px'}}
        value={Manager_Emp}
        onChange={(e) => setManager(e.target.value)}
      />
    </div>

<div className="main-manage22" style={{width:'68%' , marginLeft: '200px',}}>
            <div className="manage" style={{marginLeft: '8px', width: '100%'}}>
              <div className="managetitle2" style={{marginLeft: '0px',color:'black'}}>MODIFY EMPLOYEE</div>
              <div className="manageform" style={{fontSize: '13px'}}>
                <div className="form-frame" style={{display: 'flex', flexDirection: 'row', textAlign: 'center', borderRadius: '5px', bottom: 0}}>
                  <div className="frame1" style={{marginTop: '15px', width: '50%', paddingLeft: '0px', marginLeft: '-30px'}}>
                     <form  onSubmit={handleSubmit}>
                      <div className="form-floating" style={{margin: '12px'}}>
                        <input type="number" id="id_emp"  onChange={e => setData({...data, ID_Emp: e.target.value})} name="search-id" className="form-control  purple-border shadow-effect"  placeholder="User ID Numeric Value" minLength={6} title="Minimimum 6 Numric Characters" />
                        <label htmlFor="id_emp">ID</label>
                      </div>
                      <div className="form-floating" style={{margin: '12px'}}>
                        <input type="text" id="name_emp" onChange={e => setData({...data, FirstName_Emp: e.target.value})} className="form-control  purple-border shadow-effect"   name="update-firstName" placeholder="Employee firstName" />
                        <label htmlFor="name_emp">FirstName</label>
                      </div>
                      <div className="form-floating" style={{margin: '12px'}}>
                        <input type="text" id="last_emp" onChange={e => setData({...data,  LastName_Emp: e.target.value})} className="form-control  purple-border shadow-effect"  name="update-lastName" placeholder="Employee LasttName" />
                        <label htmlFor="last_emp">LastName</label>
                      </div>
                      <div className="form-floating" style={{margin: '12px'}}>
                        <input type="email"  id="email_emp"  onChange={e => setData({...data, Email_Emp: e.target.value})} name="update-email" className="form-control  purple-border shadow-effect"placeholder="Employee Email" />
                        <label htmlFor="email_emp">Email</label>
                      </div>
                      <div className="form-floating" style={{margin: '12px'}}>
                        <input type="text" id="manager_emp" onChange={e => setData({...data,  Manager_Emp: e.target.value})} name="update-manager" className="form-control  purple-border shadow-effect" placeholder="Employee Manager" />
                        <label htmlFor="manager_emp">Manager</label>
                      </div>
                    
                    </form>
                  </div>
                  <div className="frame2" style={{marginTop: '15px', width: '50%', paddingLeft: '80px'}}>
                    <form  onSubmit={handleSubmit}>
                    <div className="form-floating" style={{margin: '12px'}}>
                        <input type="number" id="NID_emp"  onChange={e => setData({...data,  NID: e.target.value})}  placeholder="Employee NID" className="form-control shadow-effect purple-border"  />
                        <label htmlFor="NID_emp">NID</label>
                      </div>
                      <div className="form-floating" style={{margin: '12px'}}>
                        <input type="number" id="salary_emp" onChange={e => setData({...data, Salary_Emp: e.target.value})} placeholder="Employee Salary Only Number Allowed" className="form-control shadow-effect purple-border" />
                        <label htmlFor="salary_emp">Salary</label>
                      </div>
                     
                      <div className="form-floating" style={{margin: '12px'}}>
                        <input type="text" id="title_emp"  onChange={e => setData({...data, Title_Emp: e.target.value})} className="form-control shadow-effect purple-border" placeholder="Employee Title" />
                        <label htmlFor="title_emp">Title</label>
                      </div>
                     
                    <div className="form-floating" style={{margin: '12px'}}>
                        <input type="date"  id="date_deb" onChange={e => setData({...data,  StartDate: e.target.value})} placeholder="Employee Start Date" className="form-control shadow-effect purple-border" />
                        <label htmlFor="date_deb" style={{fontSize: '14.5px'}}>Start Date</label>
                      </div>
                      <div className="form-floating" style={{margin: '12px'}}>
                        <input type="date" id="date_fin" onChange={e => setData({...data,  EndDate: e.target.value})} placeholder="Employee End Date" className="form-control shadow-effect purple-border " />
                        <label htmlFor="date_fin" style={{fontSize: '14.5px'}}>End Date</label>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <br />
              <div style={{display: 'flex', justifyContent: 'center', marginBottom: '2%', marginLeft: '3%'}}>
                {/* <Button variant="contained" color="success" startIcon={<SendIcon/>} type="submit" style={{paddingLeft: '8%', paddingRight: '8%', letterSpacing: '5px', marginBottom: '0%', marginTop: '2%',}} >SEND</Button> */}
                   <Button variant="contained" color="success" startIcon={<SendIcon/>} type="submit" style={{marginRight:'20px',width:'120px'}} >SEND</Button>
                   <Button variant="outlined" color="secondary" endIcon={<DeleteIcon />} type="submit">DELETE</Button>
              </div> 
            </div>
          
        </div>
<Footer></Footer>
    </div>
  );
}

export default RHAdmin;
