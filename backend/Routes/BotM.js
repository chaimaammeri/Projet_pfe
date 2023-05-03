import express  from 'express';
import {addBot} from  '../Controllers/BotM.js';


const router = express.Router()
 
router.get("/BotManage", addBot)


export default router