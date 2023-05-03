import express  from 'express';
import {addHome} from  '../Controllers/Home.js';


const router = express.Router()
 
router.get("/HomeManage", addHome)


export default router