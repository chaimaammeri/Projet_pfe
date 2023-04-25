import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
return (
<Typography variant="body2" color="text.secondary" align="center" {...props}>
{'Copyright '}
<Link color="inherit" href="http://localhost:3000">
DXC Technology
</Link>{' '}
{new Date().getFullYear()}.
</Typography>
);
}

const handleSubmit = async (event) => {
event.preventDefault();
const data = new FormData(event.currentTarget);
const { email, password } = Object.fromEntries(data.entries());

try {
const response = await fetch('http://localhost:3000/login', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ email, password })
});
if (response.ok) {
  // Redirect to home page or dashboard
  console.log('Login successful');
} else {
  // Display error message
  const data = await response.json();
  console.log(data.error);
}
} catch (error) {
  console.log(error);
  }
  };
  
  // const theme = createTheme();
  
  // export default function LogIn() {
  // const handleSubmit = (event) => {
  // event.preventDefault();
  // const data = new FormData(event.currentTarget);
  // console.log({email: data.get('email'),password: data.get('password'),});
  // };
  const theme = createTheme();
  const Login = () => {
  return (
  <ThemeProvider theme={theme}>
  <Container component="main" maxWidth="xs">
  <CssBaseline />
  <Box sx={{ marginTop: 8,display: 'flex',flexDirection: 'column', alignItems: 'center' }}>
  <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}><LockOutlinedIcon /></Avatar>
  <Typography component="h1" variant="h5"> Log in </Typography>
  <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
  <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus className='shadow-effect purple-border' />
  <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" className='shadow-effect purple-border' />
  <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
  <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}> LOG IN </Button>
  </Box>
  </Box>
  <Box sx={{ mt: 8, mb: 4 }}>
  <Copyright />
  </Box>
  </Container>
  </ThemeProvider>
  );
  }
   export {Login} ;