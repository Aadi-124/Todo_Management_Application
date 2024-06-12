// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import { useState } from "react";
import Login from "./components/Login";
import { BrowserRouter,} from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage";
import Welcome from "./components/Welcome";
import Home from "./components/Home";
import Sample from "./components/Sample";
import CustomizedTables from "./components/Table";
import Footer from "./components/footer";
import NavigationBar from "./components/NavigationBar";
import { AuthContext } from "./security/AuthContext";
import Logout from "./components/Logout";
import PleaseLogin from "./components/PleaseLogin";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import UpdateTodos from "./components/UpdateTodos";
import AddTodo from "./components/AddTodo";
import Register from "./components/Register";
import OTP from "./components/OTP";
import ForgotPass from "./components/ForgotPass";
import RegistrattionOTP from "./components/RegistrationOTP";
import ForgotOTP from "./components/ForgotOTP";
import ResetPassword from "./components/ResetPassword";
import Admin from "./components/Admin";
import User from "./components/User";
import NotAuthorized from "./components/NotAuthorized";
import ShowAllTodoTable from "./components/ShowAllTodoTable";

function App(){

  const [isAuthenticated,setAuthenticate] = useState(false);
  const [username,setUsername] = useState('');
  const [token,setToken] = useState('');
  const [role,setRole] = useState('');
  const [userid,setUserid] = useState('');


  function navigateTo(destination)  {
    const navigate = useNavigate();
    // Here the use Effect is only used to just avoid warnings

    useEffect(() => {
      navigate(destination);
    }, []);
    
  } 

  function AuthenticateRoute({children}){
    if(isAuthenticated){
      return children;
    } else {
        navigateTo("/notauthorized");
    }
  }

  function AuthenticateRouteForUsers({children}){
    if(isAuthenticated && role == "USER"){
      return children;
    } else {
        navigateTo("/notauthorized");
    }
  }

  function AuthenticateRouteForAdmins({children}){
    console.log(role);
    if(isAuthenticated && role == "ADMIN"){
      return children;
    } else {
        navigateTo("/notauthorized");
    }
  }

  return <>
    <AuthContext.Provider value={{isAuthenticated,setAuthenticate,username,setUsername,token,setToken,role,setRole,userid,setUserid}}>

    <BrowserRouter>
      <NavigationBar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        
        
        <Route path="/welcome" element={<AuthenticateRoute> <Welcome/>  </AuthenticateRoute>}/>
      
        <Route path="/login" element={ <Login/> }/>
        <Route path="/sample" element={<Sample/>}/>
        <Route path="/logout" element={ <Logout/>}/>
        <Route path="/pleaselogin" element={ <PleaseLogin/> }/>
        <Route path="/otp" element={  <OTP/> }/>
        <Route path="/registration-otp" element={  <RegistrattionOTP/> }/>
        <Route path="/reset-password" element={  <ResetPassword/> }/>
        <Route path="/forgot-otp" element={  <ForgotOTP/> }/>
        <Route path="/register" element={ <Register/> }/>
        <Route path="/forgotpassword" element={ <ForgotPass/> }/>
        <Route path="/notauthorized" element={ <NotAuthorized/> }/>
        <Route path="*" element={<NotFoundPage/>  }/>


        <Route path="/table" element={ <CustomizedTables/>}/>
        <Route path="/updatetodo" element={<AuthenticateRoute> <UpdateTodos/>  </AuthenticateRoute>}/>
        <Route path="/addtodo" element={ <AuthenticateRoute> <AddTodo/> </AuthenticateRoute> }/>
        <Route path="/showalltodo" element={ <AuthenticateRouteForAdmins> <ShowAllTodoTable/> </AuthenticateRouteForAdmins>}/>


        
        <Route path="/admin" element={<AuthenticateRoute> <Admin/>  </AuthenticateRoute>}/>
        <Route path="/user" element={<AuthenticateRoute> <User/>  </AuthenticateRoute>}/>


      </Routes>
      <Footer/>
    </BrowserRouter>

    </AuthContext.Provider>
  </>
}

export default App;



// import React from "react";
// import ComA from "./ComA";
// import ComB from "./ComB";
// import ComC from "./ComC";
// import { counterContext } from "./AuthContext";

// const App = () =>{


//   const value = 0;


//   return(
//       <counterContext.Provider>
//         <ComA/>
//         <ComB/>
//         <ComC/>
//       </counterContext.Provider>
// )
// };


// export default App;
