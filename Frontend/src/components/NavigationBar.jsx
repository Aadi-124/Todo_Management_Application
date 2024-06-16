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
import Auth from '../security/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';










export default function NavigationBar() {

    const navigate = useNavigate();
    const authentication = Auth();
    const [authenticated,setAuthenticated] = React.useState();
    const [usernavbtn,setUsernavbtn] = React.useState(false);
    const [adminnavbtn,setAdminnavbtn] = React.useState(false);
    const [navbtns,setNavbtns] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);

  };

  const logout = () =>{
    
    authentication.setAuthenticated(false);
    authentication.setUserName(null);
    authentication.setToken(null);
    setAdminnavbtn(false);
    setUsernavbtn(false);
    navigate("/logout");
  }
  
  // useEffect(() => {
  //   console.log("USE EFFECT!!");
  //   setAuth();
  //   if(adminnavbtn)
  //     setNavbtns(['Home','Todos','Welcome','Add Todos','Show All Todos']);
  //   if(usernavbtn)
  //     setNavbtns(['Home','Todos','Welcome','Add Todos']);

  //   console.log(usernavbtn);
  //   console.log(adminnavbtn);
  //   console.log(navbtns);

  // },[]);

  useEffect(() => {
    setAuth();
  });

  function setAuth() {
    if(authentication.isAuthenticated && authentication.role == "ADMIN"){
      setAdminnavbtn(true);
      setAdminnavbtn(true);
      setAuthenticated(true);
      setAuthenticated(true);
      }
      if(authentication.isAuthenticated && authentication.role == "USER"){
        setUsernavbtn(true);
        setUsernavbtn(true);
        setAuthenticated(true);
        setAuthenticated(true);
    }
  }

  const navigateTo = (text) =>{
    if(text == "Home"){
      navigate("/home")
    } else if(text == "Todos"){
      navigate("/table");
    } else if(text == "Welcome"){
      navigate("/welcome");
    } else if(text == "Add Todos"){
      navigate("/addtodo");
    } else if(text == "Show All Todos"){
      navigate("/showalltodo");
    }
  } 




  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {/* {navbtns.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))} */}

         
           {authenticated && usernavbtn && 

          <ListItem disablePadding>
            <ListItemButton onClick={()=>navigate("/")}>
              <ListItemIcon>
                HOME
              </ListItemIcon>
              <ListItemText/>
            </ListItemButton>
          </ListItem>

        }
          {authenticated && usernavbtn && 

          <ListItem disablePadding>
            <ListItemButton onClick={()=>navigate("/welcome")}>
              <ListItemIcon>
                WELCOME
              </ListItemIcon>
              <ListItemText/>
            </ListItemButton>
          </ListItem>

        }
          {authenticated && usernavbtn && 

          <ListItem disablePadding>
            <ListItemButton onClick={()=>navigate("/table")}>
              <ListItemIcon>
                TODOS
              </ListItemIcon>
              <ListItemText/>
            </ListItemButton>
          </ListItem>

        }
          {authenticated && usernavbtn && 

          <ListItem disablePadding>
            <ListItemButton onClick={()=>navigate("/addtodo")}>
              <ListItemIcon>
                ADD TODOS
              </ListItemIcon>
              <ListItemText/>
            </ListItemButton>
          </ListItem>

        }
          {authenticated && adminnavbtn && 

          <ListItem disablePadding>
            <ListItemButton onClick={()=>navigate("/")}>
              <ListItemIcon>
                HOME
              </ListItemIcon>
              <ListItemText/>
            </ListItemButton>
          </ListItem>

        }
          {authenticated && adminnavbtn && 

          <ListItem disablePadding>
            <ListItemButton onClick={()=>navigate("/welcome")}>
              <ListItemIcon>
                WELCOME
              </ListItemIcon>
              <ListItemText/>
            </ListItemButton>
          </ListItem>

        }
          {authenticated && adminnavbtn && 

          <ListItem disablePadding>
            <ListItemButton onClick={()=>navigate("/addtodo")}>
              <ListItemIcon>
                ADD TODOS
              </ListItemIcon>
              <ListItemText/>
            </ListItemButton>
          </ListItem>

        }
          {authenticated && adminnavbtn && 

          <ListItem disablePadding>
            <ListItemButton onClick={()=>navigate("/table")}>
              <ListItemIcon>
                TODOS
              </ListItemIcon>
              <ListItemText/>
            </ListItemButton>
          </ListItem>

        }
          {authenticated && adminnavbtn && 

          <ListItem disablePadding>
            <ListItemButton onClick={()=>navigate("/showalltodo")}>
              <ListItemIcon>
                SHOW ALL TODOS
              </ListItemIcon>
              <ListItemText/>
            </ListItemButton>
          </ListItem>

        }

        
      </List>
      <Divider />
      <List>
        {/* {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))} */}
      </List>
    </Box>
  );


  return (<>

{/* <Button onClick={toggleDrawer(true)}>Open drawer</Button> */}
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    <Box sx={{ flexGrow: 1 }} id='box'>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
            
          >
            <MenuIcon />
          </IconButton>

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