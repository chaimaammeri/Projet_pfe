import express  from 'express';
import {login, logout } from '../Controllers/Auth.js';


const app = express()
 
app.post('/', login)
app.post('/Logout', logout)


export default router
