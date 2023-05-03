import express  from 'express';
import {addRHR} from  '../Controllers/RHReport.js';


const router = express.Router()
 
router.get("/RHReport", addRHR)


export default router