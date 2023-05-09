import express  from 'express';
import {addUser, getUser}  from '../Controllers/UserM.js';

const router = express.Router()
 
router.post("/UserManage", addUser)
router.get("/UserManage", getUser)

// POST : is create
// GET :is search (get element by ID)
// DELETE : is delete 
// POST (modify) : is a search(get) + modification(post)
export  default router

