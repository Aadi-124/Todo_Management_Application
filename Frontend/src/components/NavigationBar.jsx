import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import './Navbar.css';
// import './Todos.css';
import Auth from '../security/AuthContext';

export default function NavigationBar() {


  const authentication = Auth();


  const logout = () =>{
    
    authentication.setAuthenticated(false);
    authentication.setUserName(null);
    authentication.setToken(null);
  }

  return (<>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            
          >
            <MenuIcon />
          </IconButton>

          
    {authentication.isAuthenticated &&<Link to='/' className='links'>Home</Link>}
    {authentication.isAuthenticated &&<Link to='/table' className='links'>Todos</Link>}
    {authentication.isAuthenticated &&<Link to='/welcome/:username' className='links'>Welcome</Link>}
    {authentication.isAuthenticated &&<Link to='/addtodo' className='links'>Add Todo</Link>}

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>


          <Link to='./login' className="links"><Button className="links" color="inherit">{!authentication.isAuthenticated && 'Login'}</Button></Link>
          <Link to='./register' className="links"><Button color="inherit">{!authentication.isAuthenticated && 'Register'}</Button></Link>
          <Link to='./logout' className="links" onClick={logout}><Button color="inherit">{authentication.isAuthenticated && 'Logout'}</Button></Link>
          
        </Toolbar>
      </AppBar>
    </Box>
  </>
  );
}