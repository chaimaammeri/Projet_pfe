import express  from 'express';
import {agentList} from  '../Controllers/AgentL.js';


const router = express.Router()
 
router.get("/agentList", agentList)


export default router