import * as React from 'react'; 
import Button from '@mui/material/Button';
import logo from "../Img/logo.bmp"
import axios from 'axios';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme();

const Login = () => {
  const [inputs, setInputs] =  useState({
    email: "" ,
    password: "" ,
  })

const [err, setError] = useState(null);

const navigate = useNavigate();

//  at the beginning the 'email' and he 'password'  going to be empty but whenever we change our inputs here we are going to set our states again
const handleChange = (e) => {
  setInputs ((prev) => ({ ...prev, [e.target.name]: e.target.value}))
}
 
const handleSubmit = async (e) => {
  e.preventDefault()
  try {
    await axios.post("http://localhost:3001/backend/Routes/Auth/Login", inputs)
    navigate("/AdminProfil")
  }catch (err) {
    setError(err.response.data)
  }}



return (
 <div>
    <header className="index-container">
        <img className="pic" src={logo} alt='' />
        <div className="index-title">DXC WEB PORTAL</div>
        <div className="photo-admin" style={{color: 'white',marginLeft:"600px"}}>    
          <div className="square" id="date">03-03-2023 12:05:12</div> 
        </div>
    </header>
   <br></br>
   {/* <LoginSide></LoginSide> */}
   <ThemeProvider theme={theme}>
   <Container component="main" maxWidth="xs">
   <CssBaseline />
   <Box sx={{ marginTop: 8,display: 'flex',flexDirection: 'column', alignItems: 'center' }}>
   <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}><LockOutlinedIcon /></Avatar>
   <Typography component="h1" variant="h5"> Log in </Typography>
   <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
   <TextField margin="normal" required fullWidth name="email"  id="email" onChange={handleChange} label="Email Address" autoComplete="email" autoFocus className='Login' />
   <TextField margin="normal" required fullWidth name="password" id="password" onChange={handleChange} label="Password" type="password"  autoComplete="current-password" className='Login' />
   <FormControlLabel control={<Checkbox value="remember" color="secondary" />} label="Remember me" />
   <Button type="submit" fullWidth variant="contained" color='secondary' sx={{ mt: 3, mb: 2 }} onClick={handleSubmit} > LOG IN </Button>
   {err && <p>{err}</p>}
   </Box>
   </Box>
   <Box sx={{ mt: 5, mb: 4 }}>
   </Box>
   </Container>
   </ThemeProvider>
   <br></br>
   <footer className="footAD">DXC Technology<sup> ©</sup></footer>
 </div>
);
}
   export default Login ;