import express  from 'express';
import {addProfil} from  '../Controllers/AdminProfil.js';


const router = express.Router()
 
router.get("/AdminProfil", addProfil)


export default router