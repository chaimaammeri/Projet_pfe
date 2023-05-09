import express  from 'express';
import {userList} from  '../Controllers/UserL.js';


const router = express.Router()
 
router.get("/UserList", userList)


export default router