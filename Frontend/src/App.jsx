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

function App(){

  const [isAuthenticated,setAuthenticate] = useState(false);
  const [username,setUsername] = useState(null);
  const [token,setToken] = useState(null);


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
        navigateTo("/");
    }
  }

  return <>
    <AuthContext.Provider value={{isAuthenticated,setAuthenticate,username,setUsername,token,setToken}}>

    <BrowserRouter>
      <NavigationBar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        
        
        <Route path="/welcome/:username" element={<AuthenticateRoute> <Welcome/>  </AuthenticateRoute>}/>
      
        <Route path="/login" element={ <Login/> }/>
        <Route path="/sample" element={<AuthenticateRoute> <Sample/>  </AuthenticateRoute>}/>
        <Route path="/table" element={<AuthenticateRoute> <CustomizedTables/>  </AuthenticateRoute>}/>
        <Route path="/logout" element={<AuthenticateRoute> <Logout/>  </AuthenticateRoute>}/>
        <Route path="/updatetodo/:id" element={<AuthenticateRoute> <UpdateTodos/>  </AuthenticateRoute>}/>
        <Route path="/pleaselogin" element={ <PleaseLogin/> }/>
        <Route path="/addtodo" element={ <AuthenticateRoute> <AddTodo/> </AuthenticateRoute> }/>
        <Route path="/otp/:role" element={  <OTP/> }/>
        <Route path="/register" element={ <Register/> }/>
        <Route path="/forgotpassword" element={ <ForgotPass/> }/>
        <Route path="*" element={<NotFoundPage/>  }/>
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
