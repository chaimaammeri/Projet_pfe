import express  from 'express';
import { addAdmin } from '../Controllers/AdminM.js';

const router = express.Router()
 
router.get("/AdminManage", addAdmin)

export default router

