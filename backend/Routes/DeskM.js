import express  from 'express';
import {addDesk} from  '../Controllers/DeskM.js';


const router = express.Router()
 
router.get("/DeskManage", addDesk)


export default router