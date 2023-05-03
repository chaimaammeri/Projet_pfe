import express  from 'express';
import {addRHA} from  '../Controllers/RHAdmin.js';


const router = express.Router()
 
router.get("/RHAdmin", addRHA)


export default router