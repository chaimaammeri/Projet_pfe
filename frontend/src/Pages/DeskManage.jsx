import Button from '@mui/material/Button';
import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import DeleteIcon from '@mui/icons-material/Delete';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import SendIcon from '@mui/icons-material/Send';



function DeskManage() {
    return (
        <div>
    <Header></Header>
        <div className="main-manage2">
          <div className="manage">
            <div className="managetitle2">Create New Desk
            </div>
            <div className="manageform">
              <div className="form-frame"> 
                <div className="frame1" style={{marginLeft: '-10px'}}>                                
                  <form >
                  <div className="mb-3" style={{margin: '12px'}}>
                    <label  class="form-label" htmlFor="DeskName" style={{marginLeft:'-300px'}}>Desk Name</label>
                    <input type="text" name="desk_name" id='DeskName' placeholder="Desk Name" title="Desk Name" className="form-control purple-border shadow-effect" required style={{height:'60px'}} />               
                  </div>
                <div className="mb-3" style={{margin: '12px'}}>
                  <label class="form-label" htmlFor="DeskAcronyme" style={{marginLeft:'-270px'}}>Desk Acronyme</label>
                  <input type="text" id="DeskAcronyme" name="desk_acronyme" placeholder="Desk Acronyme" title="Desk acronyme" className="form-control  purple-border shadow-effect" style={{height:'60px'}} required/>
               </div>
                    <div className="mb-3" style={{margin: '12px'}}>
                         <label  htmlFor="DeskLanguages" style={{marginLeft:'-270px'}}>Desk Languages</label>
                         <textarea class="form-control shadow-effect purple-border"  id="DeskLanguages" name="desk_language" placeholder="l1:french...l2:english...l2:spanish... etc..." rows="3"></textarea>
                   </div>
                   <div  className="mb-3" style={{margin: '12px'}}>
                         <label  htmlFor="CallQuestions" style={{marginLeft:'-280px'}}>Call Questions</label>
                        <textarea type="textarea" id="CallQuestions" name="call_question" className="form-control shadow-effect purple-border" required  placeholder="q1:Does the agent...., q2:....., etc ..." rows="3"/>
                   </div>
                   <div className="mb-3" style={{margin: '12px'}}>
                         <label  htmlFor="CaseQuestions" style={{marginLeft:'-280px'}}>Case Questions</label>
                         <textarea id="CaseQuestions" name="case_question" className="form-control shadow-effect purple-border" required  placeholder="q1:Does the agent .....,q2:...., etc ....." rows="3"></textarea>
                   </div>
                   <div className="mb-3" style={{margin: '12px'}}>
                   <label htmlFor="CallWeighting" style={{marginLeft:'-280px'}}>Call Weighting </label>
                       <textarea type="textarea" id="CallWeighting" name="call_weighting" className="form-control shadow-effect purple-border" required  placeholder="q1:Does the agent ...., q2:..., etc ..." rows="3" />
                  </div>
                  </form>        
                </div>
                <div className="frame2" style={{marginLeft: '152px'}}> 
                  <form >
                  <div className="mb-3" style={{margin: '12px'}}>
                         <label  htmlFor="CaseWeighting" style={{marginLeft:'-100px'}}>Case Weighting</label>
                         <textarea type="textarea" id="CaseWeighting" name="case_weighting" className="form-control shadow-effect purple-border" required placeholder="q1:3, q2:...,etc..." rows="3"></textarea>
                   </div>

                   <div className="mb-3" style={{margin: '12px'}}>
                         <label  htmlFor="CallEliminator" style={{marginLeft:'-100px'}}>Call Eliminator</label>
                         <textarea type="textarea" id="CallEliminator" name="call_eliminator" className="form-control shadow-effect purple-border" required  placeholder="q1, q2, etc..." rows="3"></textarea>
                   </div>

                   <div className="mb-3"  style={{margin: '12px'}}>
                      <label htmlFor="CaseEliminator" style={{marginLeft:'-100px'}}>Case Eliminator  </label>
                      <textarea type="textarea" id="CaseEliminator" name="case_eliminator" className="form-control shadow-effect purple-border" required placeholder="q1, q2:...., etc..."  rows="3"/>
                     </div>  

                   <div className="mb-3" style={{margin: '12px'}}>
                      <label htmlFor="CallCategories" style={{marginLeft:'-100px'}}>Call Categories</label>
                      <textarea type="textarea" id="CallCategories" name="call_category" className="form-control shadow-effect purple-border" required placeholder="q1:Call Closing, q2:...., etc..."  rows="3" />
                     </div> 

                   <div className="mb-3" style={{margin: '12px'}}>
                      <label htmlFor="CaseCategories" style={{marginLeft:'-100px'}}>Case Categories </label>                 
                      <textarea type="textarea" id="CaseCategories" name="case_category" className="form-control shadow-effect purple-border" required placeholder="q1Call Closing,q2, etc..." title="q1:Call Closing, q2, etc..."  rows="3" />
                   </div>   
                        
                  </form> 
                </div>
              </div>    
              <br /><br />  
              <Button variant="contained" color="secondary" startIcon={<SendIcon/>} type="submit" name="agent-search" defaultValue="CREATE" style={{paddingLeft: '9%', paddingRight: '9%', letterSpacing: '4px', marginBottom: '2%', marginLeft: '3%'}} >CREATE</Button>
              <span style={{width: 'auto', fontWeight: 'normal'}} />                                            
            </div>
          </div> 
        </div>

        <div className="main-manage2" style={{marginTop: '5%'}}>  
          <div className="manage">
            <div className="managetitle2">Modify Desk</div>
            <div className="manageform">
              <div className="form-frame">
                <div className="frame1" style={{marginLeft: '60px',marginTop:'23px'}}> 
<form onSubmit="">             
<div style={{display: 'flex', alignItems: 'center'}}>
  <div className="form-floating mb-3" style={{margin: '12px'}}>
    <select type="select" name="desk_search"  id="SearchDesk_up" className="form-select shadow-effect purple-border" style={{width: '300px'}}>
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
    <label htmlFor="SearchDesk" style={{fontWeight: 'bold', color: 'black', fontSize: '17px'}}>Search Desk </label>
  </div>  
 
  <div style={{margin: '12px'}}>
    <Button variant="contained"  style={{backgroundColor:'olivedrab'}} startIcon={<ManageSearchIcon/>} type="submit" name="agent-search" defaultValue="Search">Search</Button>
  </div>

  <div style={{margin: '12px'}}>
  <Button variant="outlined" color="secondary" endIcon={<DeleteIcon />} type="submit" name="delete" defaultValue="Delete">Delete</Button>
  </div>
   </div>
  </form>
                 <form onSubmit=""> 
                 <div class="mb-3" style={{margin: '12px'}}>
                    <label  class="form-label" htmlFor="DeskName" style={{marginLeft: '-370px'}}>Desk Name</label>
                    <input type="text" name="desk_name_update" id="DeskName_up" placeholder="Desk Name" title="Desk Name" className="form-control purple-border shadow-effect" required style={{height:'50px'}} rows="3" />               
                  </div>

                <div class="mb-3" style={{margin: '12px'}}>
                  <label class="form-label" htmlFor="DeskAcronyme" style={{marginLeft: '-340px'}}>Desk Acronyme</label>
                  <input type="text" name="desk_acronyme_update" id="DeskAcronyme_up" placeholder="Desk Acronyme" title="Desk acronyme" className="form-control  purple-border shadow-effect" style={{height:'50px'}} required rows="3"/>
               </div>

               <div class="mb-3" style={{margin: '12px'}}>
                         <label htmlFor="DeskLanguages_up" style={{marginLeft: '-340px'}}>Desk Languages</label>
                         <textarea class="form-control shadow-effect purple-border"  name="desk_language_update" id="DeskLanguages_up" placeholder="l1:french...l2:english...l2:spanish... etc..."  rows="3"></textarea>
                   </div> 


                   <div class="mb-3" style={{margin: '12px'}}>
                         <label style={{marginLeft:'-350px'}} htmlFor="CallQuestions_up">Call Questions</label>
                         <textarea class="form-control shadow-effect purple-border"  id="CallQuestions_up" name="call_question_update" placeholder="q1:Does the agent ....,q2:.....,etc..." rows="3"></textarea>
                   </div> 

                    <div className="mb-3" style={{margin: '12px'}}>
                    <label htmlFor="CaseQuestions_up" style={{marginLeft:'-350px'}}>Case Questions</label>
                      <textarea type="textarea" title="desk_language" id="CaseQuestions_up" name="case_question_update" className="form-control shadow-effect purple-border"  placeholder="q1:Does the agent ....,q2:.....,etc..." rows="3" ></textarea>
                    </div>  

                  </form>
                </div> 

                <div className="frame2" style={{marginLeft: '100px'}}> 
                  <form  onsubmit="">

                    <div className="mb-3" style={{margin: '12px'}}>
                      <label htmlFor="CallWeighting_up" style={{marginLeft:'-310px'}}>Call Weighting</label>
                      <textarea type="textarea" id="CallWeighting_up"  name="call_weighting_update" title="User Desk" className="form-control shadow-effect purple-border"  placeholder="q1:3,q2:...q3:...." />
                    </div>
                    <div className="mb-3" style={{margin: '12px'}}>
                    <label htmlFor="CaseWeighting_up" style={{marginLeft:'-310px'}}>Case weighting </label>
                      <textarea type="textarea" id="CaseWeighting_up" name="case_weighting_update" title="User Desk"  className="form-control shadow-effect purple-border"  placeholder="q1:3, q2:...,etc..." />
                    </div>
                    <div className="mb-3" style={{margin: '12px'}}>
                      <label htmlFor="CallEliminator_up" style={{marginLeft:'-310px'}}>Call Eliminator </label>
                      <textarea type="textarea" name="call_eliminator_update" title="User Desk" id="CallEliminator_up" className="form-control shadow-effect purple-border" placeholder="q1:..., q2:...., etc..." />
                    </div> 
                    <div className="mb-3" style={{margin: '12px'}}>
                    <label htmlFor="floatingTextarea2" style={{marginLeft:'-310px'}}>Case Eliminator </label>
                      <textarea type="textarea" name="case_eliminator_update" title="User Desk" id="case_eliminator_update" className="form-control shadow-effect purple-border"  placeholder="q1:..., q2:...., etc..."  />
                    </div>  
                    <div className="mb-3" style={{margin: '12px'}}>
                    <label htmlFor="CallCategories_up" style={{marginLeft:'-310px'}}>Call Categories </label>
                      <textarea type="textarea" name="call_category_update" title="User Desk" id="CallCategories_up" className="form-control shadow-effect purple-border" placeholder="q1:Call Closing,q2, etc..." />
                    </div>   
                    <div className="mb-3" style={{margin: '12px'}}>
                    <label htmlFor="CaseCategorie_up" style={{marginLeft:'-310px'}}>Case Categories</label>
                      <textarea type="textarea" name="case_category_update" title="User Desk" id="CaseCategorie_up" className="form-control shadow-effect purple-border" placeholder="q1:Call Closing,q2, etc..."  />
                    </div>              
                  </form>
                </div>
              </div> 
              <br/><br /> 
              <Button variant="contained" color="secondary" startIcon={<SendIcon/>} type="submit" name="agent-search" defaultValue="Send" style={{paddingLeft: '5.5%', paddingRight: '5.5%', letterSpacing: '4px', marginBottom: '2%', marginLeft: '3%'}} >MODIFY</Button>
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

