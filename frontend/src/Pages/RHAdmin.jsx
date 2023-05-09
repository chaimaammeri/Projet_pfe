import { Button, TextField } from '@mui/material';
import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import SendIcon from '@mui/icons-material/Send';

const RHAdmin = () => {
  return (
    <div>
      <Header></Header>
<div style={{marginTop:'120px',display:'inline-block',marginBottom:'60px'}}>

  <TextField label="ID" placeholder='search' id="standard-basic" variant="standard" color='secondary' focused style={{margin:'10px',width:'180px'}}/>
  <Button size="small" variant="contained" style={{marginTop:'30px',backgroundColor:'olivedrab'}}>search</Button>
  <TextField label="First Name" id="standard-basic"  color='secondary' variant="standard" focused style={{margin:'18px',width:'250px'}}/>
  <TextField label="Last Name" id="standard-basic"  color='secondary'  variant="standard"  focused style={{margin:'18px',width:'250px'}}/>
  <br></br>
  <TextField label="Email"  variant="standard"  color='secondary' focused style={{margin:'15px',width:'250px'}}/>
  <TextField label="Desk"  variant="standard"  color='secondary' focused style={{margin:'15px',width:'250px'}}/>
  <TextField label="Manager"  variant="standard"  color='secondary'  focused style={{margin:'15px',width:'250px'}}/>
  
</div>

<div className="main-manage22" style={{width:'80%' , marginLeft: '140px',}}>
            <div className="manage" style={{marginLeft: '8px', width: '100%'}}>
              <div className="managetitle2" style={{marginLeft: '0px',color:'black'}}>MODIFY EMPLOYEE</div>
              <div className="manageform" style={{fontSize: '13px'}}>
                <div className="form-frame" style={{display: 'flex', flexDirection: 'row', textAlign: 'center', borderRadius: '5px', bottom: 0}}>
                  <div className="frame1" style={{marginTop: '15px', width: '50%', paddingLeft: '0px', marginLeft: '-30px'}}>
                    <form action="" method="post" >
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
                        <label htmlFor="floatingManger">Manager</label>
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
                        <input type="text" className="form-control shadow-effect purple-border" id="floatingTitle" required placeholder="Employee Title" />
                        <label htmlFor="floatingTitle">Title</label>
                      </div>
                     
                    <div className="form-floating" style={{margin: '12px'}}>
                        <input type="date" placeholder="Employee Start Date" className="form-control shadow-effect purple-border" id="floatingDate" required />
                        <label htmlFor="floatingDate" style={{fontSize: '14.5px'}}>Start Date</label>
                      </div>
                      <div className="form-floating" style={{margin: '12px'}}>
                        <input type="date" placeholder="Employee End Date" className="form-control shadow-effect purple-border " id="floatingDate" required />
                        <label htmlFor="floatingDate" style={{fontSize: '14.5px'}}>End Date</label>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <br />
              <div style={{display: 'flex', justifyContent: 'center', marginBottom: '2%', marginLeft: '3%'}}>
                <Button variant="contained" color="success" startIcon={<SendIcon/>} type="submit" style={{paddingLeft: '8%', paddingRight: '8%', letterSpacing: '5px', marginBottom: '0%', marginTop: '4%',}} >SEND</Button>

              </div> 
            </div>
          
        </div>
<Footer></Footer>
    </div>
  );
}

export default RHAdmin;
