import Button from '@mui/material/Button';
import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import DeleteIcon from '@mui/icons-material/Delete';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import ButtCreate from '../Components/ButtCreate';
import ButtModify from '../Components/ButtModify';


const DeskManage = () => {
    return (
        <div>
    <Header></Header>
      {/* <div className="tit"> Desk Manage </div>  */}
        <div className="main-manage2">
          <div className="manage">
            <div className="managetitle2">Create New Desk
            </div>
            <div className="manageform">
              <div className="form-frame"> 
                <div className="frame1" style={{marginLeft: '-150px'}}>                                
                  <form action="" method="post" name="form-create" title="Desk name!">
                    <div className="form-floating" style={{margin: '12px'}}>
                      <input type="text" name="desk_name" placeholder="Desk Name" title="Desk Name" className="form-control purple-border shadow-effect" required />
                      <label htmlFor="floatingID">Desk Name</label>
                    </div>
                    <div className="form-floating" style={{margin: '12px'}}>
                      <input type="text" id="desk_acronyme" name="desk_acronyme" placeholder="Desk Acronyme" title="Desk acronyme" className="form-control  purple-border shadow-effect" required />
                      <label htmlFor="floatingID">Desk Acronyme</label> 
                    </div>
                    <div className="form-floating" style={{margin: '12px'}}>
                      <textarea type="textarea" id="desk_language" name="desk_language" className="form-control shadow-effect purple-border;"  required wrap="soft" title="&quot;l1&quot;:&quot;french&quot;, &quot;l2&quot;:&quot;spanish&quot;, etc..." placeholder="Desk Languages" defaultValue={""} />
                      <label htmlFor="floatingTextarea2">Desk Languages</label>
                    </div>  
                    <div className="form-floating" style={{margin: '12px'}}>
                      <textarea type="textarea" id="call_question" name="call_question" className="form-control shadow-effect purple-border;" required wrap="soft" title="&quot;q1&quot;:&quot;Does the agent ....&quot;, &quot;q2&quot;:..., etc ..." placeholder="Call Questions" defaultValue={""} />
                      <label htmlFor="floatingTextarea2">Call Questions </label>
                    </div>  
                    <div className="form-floating" style={{margin: '12px'}}>
                      <textarea type="textarea" id="case_question" name="case_question" className="form-control shadow-effect purple-border;" required wrap="soft" title="&quot;q1&quot;:&quot;Does the agent ....&quot;, &quot;q2&quot;:..., etc ..." placeholder="Case Questions" defaultValue={""} />
                      <label htmlFor="floatingTextarea2">Case Questions </label>
                    </div>  
                    <div className="form-floating" style={{margin: '12px'}}>
                      <textarea type="textarea" id="Call_weighting" name="case_question" className="form-control shadow-effect purple-border;" required wrap="soft" title="&quot;q1&quot;:&quot;Does the agent ....&quot;, &quot;q2&quot;:..., etc ..." placeholder="Call_weighting" defaultValue={""} />
                      <label htmlFor="floatingTextarea2">Call weighting  </label>
                    </div>  
                  </form>        
                </div>
                <div className="frame2" style={{marginLeft: '152px'}}> 
                  <form action="" method="post" name="form-create" title="Desk name!">
                    <div className="form-floating" style={{margin: '12px'}}>
                      <textarea type="textarea" id="case_weighting" name="case_weighting" className="form-control shadow-effect purple-border;" required wrap="soft" placeholder="&quot;q1&quot;:3, &quot;q2&quot;:..." title="&quot;q1&quot;:3, &quot;q2&quot;:..." defaultValue={""} />
                      <label htmlFor="floatingTextarea2">Case weighting </label>
                    </div>  
                    <div className="form-floating" style={{margin: '12px'}}>
                      <textarea type="textarea" id="call_eliminator" name="call_eliminator" className="form-control shadow-effect purple-border;" required wrap="soft" placeholder="q1, q5, etc..." title="&quot;q1&quot;, &quot;q5&quot;, etc..." defaultValue={""} />
                      <label htmlFor="floatingTextarea2">Call Eliminator </label>
                    </div>  
                    <div className="form-floating" style={{margin: '12px'}}>
                      <textarea type="textarea" id="case_eliminator" name="case_eliminator" className="form-control shadow-effect purple-border;" required wrap="soft" placeholder="q1, q5, etc..." title="&quot;q1&quot;, &quot;q5&quot;, etc..." defaultValue={""} />
                      <label htmlFor="floatingTextarea2">Case Eliminator  </label>
                    </div>  
                    <div className="form-floating" style={{margin: '12px'}}>
                      <textarea type="textarea" id="call_category" name="call_category" className="form-control shadow-effect purple-border;" required wrap="soft" placeholder="&quot;q1&quot;:&quot;Call Closing&quot;, &quot;q2&quot;, etc..." title="&quot;q1&quot;:&quot;Call Closing&quot;, &quot;q2&quot;, etc..." defaultValue={""} />
                      <label htmlFor="floatingTextarea2">Call Categories</label>
                    </div>  
                    <div className="form-floating" style={{margin: '12px'}}>
                      <textarea type="textarea" id="case_category" name="case_category" className="form-control shadow-effect purple-border;" required wrap="soft" placeholder="&quot;q1&quot;:&quot;Call Closing&quot;, &quot;q2&quot;, etc..." title="&quot;q1&quot;:&quot;Call Closing&quot;, &quot;q2&quot;, etc..." defaultValue={""} />
                      <label htmlFor="floatingTextarea2">Case Categories  </label>
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
            <div className="managetitle2">Modify Desk</div>
            <div className="manageform">
              <div className="form-frame">
                <div className="frame1" style={{marginLeft: '10px'}}> 
<form action="" method="post" onsubmit="">
                    
<div style={{display: 'flex', alignItems: 'center'}}>
  <div className="form-floating mb-3" style={{margin: '12px'}}>
    <select type="select" id="desk" name="desk-name" title="User Desk" className="form-select shadow-effect purple-border" style={{width: '300px'}}>
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
    <label htmlFor="floatingInput" style={{fontWeight: 'bold', color: 'black', fontSize: '17px'}}>Search Desk </label>
    <input type="hidden" id="desk_hidden" defaultValue />  
  </div>   


  <div style={{margin: '12px'}}>
    <Button variant="contained"  style={{backgroundColor:'olivedrab'}} startIcon={<ManageSearchIcon/>} type="submit" name="agent-search" defaultValue="Search">Search</Button>
  </div>

  <div style={{margin: '12px'}}>
  <Button variant="outlined" color="secondary" endIcon={<DeleteIcon />} type="submit" name="delete" defaultValue="Delete">Delete</Button>
  </div>
   </div>
  <span style={{color: 'olivedrab', fontSize: '14px'}} />
  </form>
<form action="" method="post" onsubmit="">

                    <div className="form-floating" style={{margin: '12px', marginTop: '-4px'}}>
                      <input type="text" name="desks-name" id="desks-name" placeholder="Desk acronyme how it appear in AWS!" className="form-control purple-border shadow-effect" />
                      <input type="hidden" name="hidden-desk"  />
                      <label htmlFor="floatingID">Desk Name </label> 
                    </div>
                    <div className="form-floating" style={{margin: '12px'}}>
                      <input type="text" name="desk_acronyme_update" id="desk_acronyme_update"  placeholder="Desk acronyme how it appear in AWS!" className="form-control purple-border shadow-effect" />
                      <label htmlFor="floatingID">Desk Acronyme </label> 
                    </div>
                    <div className="form-floating" style={{margin: '12px'}}>
                      <textarea type="textarea" title="desk_language" name="desk_language_update" id="desk_language_update" className="form-control shadow-effect purple-border;" wrap="soft" placeholder="&quot;l1&quot;:&quot;french&quot;, &quot;l2&quot;:&quot;spanish&quot;, etc..." defaultValue={""} />
                      <label htmlFor="floatingTextarea2">Desk Languages</label>
                    </div> 
                    <div className="form-floating" style={{margin: '12px'}}>
                      <textarea type="textarea" id="call_question_update" name="call_question_update" className="form-control shadow-effect purple-border;"  wrap="soft" title="User Desk" placeholder="maximum characters is 300" defaultValue={""} />
                      <label htmlFor="floatingTextarea2">Call Questions </label>
                    </div>  
                    <div className="form-floating" style={{margin: '12px'}}>
                      <textarea type="textarea" title="desk_language" id="case_question_update" name="case_question_update" className="form-control shadow-effect purple-border;" wrap="soft" placeholder="&quot;q1&quot;:&quot;Does the agent ....&quot;, &quot;q2&quot;:..." defaultValue={""} />
                      <label htmlFor="floatingTextarea2">Case Questions</label>
                    </div>                                               
                  </form>
                </div> 

                <div className="frame2" style={{marginLeft: '152px'}}> 
                  <form action="" method="post" onsubmit="">
                    <div className="form-floating" style={{margin: '12px'}}>
                      <textarea type="textarea" name="call_weighting_update" title="User Desk" id="call_weighting_update" className="form-control shadow-effect purple-border;" wrap="soft" placeholder="&quot;q1&quot;:3, &quot;q2&quot;:..." defaultValue={""} />
                      <label htmlFor="floatingTextarea2">Call weighting  </label>
                    </div>
                    <div className="form-floating" style={{margin: '12px'}}>
                      <textarea type="textarea" name="case_weighting_update" title="User Desk" id="case_weighting_update" className="form-control shadow-effect purple-border;" wrap="soft" placeholder="&quot;q1&quot;:3, &quot;q2&quot;:..." defaultValue={""} />
                      <label htmlFor="floatingTextarea2">Case weighting  </label>
                    </div>
                    <div className="form-floating" style={{margin: '12px'}}>
                      <textarea type="textarea" name="call_eliminator_update" title="User Desk" id="call_eliminator_update" className="form-control shadow-effect purple-border;" wrap="soft" placeholder="&quot;q1&quot;, &quot;q5&quot;, etc..." defaultValue={""} />
                      <label htmlFor="floatingTextarea2">Call Eliminator </label>
                    </div> 
                    <div className="form-floating" style={{margin: '12px'}}>
                      <textarea type="textarea" name="case_eliminator_update" title="User Desk" id="case_eliminator_update" className="form-control shadow-effect purple-border;" wrap="soft" placeholder="&quot;q1&quot;, &quot;q5&quot;, etc..." defaultValue={""} />
                      <label htmlFor="floatingTextarea2">Case Eliminator </label>
                    </div>  
                    <div className="form-floating" style={{margin: '12px'}}>
                      <textarea type="textarea" name="call_category_update" title="User Desk" id="call_category_update" className="form-control shadow-effect purple-border;" wrap="soft" placeholder="&quot;q1&quot;:&quot;Call Closing&quot;, &quot;q2&quot;, etc..." defaultValue={""} />
                      <label htmlFor="floatingTextarea2">Call Categories </label>
                    </div>   
                    <div className="form-floating" style={{margin: '12px'}}>
                      <textarea type="textarea" name="case_category_update" title="User Desk" id="case_category_update" className="form-control shadow-effect purple-border;" wrap="soft" placeholder="&quot;q1&quot;:&quot;Call Closing&quot;, &quot;q2&quot;, etc..." defaultValue={""} />
                      <label htmlFor="floatingTextarea2">Case Categories</label>
                    </div>              
                  </form>
                </div>
              </div> 
              <br/><br /> 
              <ButtModify></ButtModify>
              <span style={{color: 'olivedrab', fontSize: '14px'}} />
            </div>
          </div>       
        </div>
        <br /><br />
    <Footer></Footer>
        </div>
    );
}

export default DeskManage;
