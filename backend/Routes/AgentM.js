import express  from 'express';
import {addAgent} from  '../Controllers/AgentM.js';

const router = express.Router()
 
router.get("/AgentManage", addAgent)


export default router