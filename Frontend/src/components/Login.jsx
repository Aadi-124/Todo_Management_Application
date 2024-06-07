import { useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import  Auth  from "../security/AuthContext";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import './login.css';
import Swal from 'sweetalert2';
import { BasicAuthentication } from "../API/APIService";

function ShowSuccess(istrue){
    if(istrue){
        return <h1>Authentication Successfull!</h1>
    }
    return null;
}


function ShowError(istrue){
    if(istrue){
            return <h1>Authentication Failed!</h1>
    }
    return null;
}


function Login(){
    const navigate = useNavigate();
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [success,setSuccess] = useState(false);
    const [error,setError] = useState(false);
    const Authentication = Auth();

    function handleUserName(event){
        setUsername(event.target.value);
    }
    function handlePassword(event){
        setPassword(event.target.value);
    }
 
    

    // function Authenticate(){

        // const basicAuthToken = "Basic "+window.btoa(username+":"+password);
        // BasicAuthentication(basicAuthToken)
        // .then(
        //     (response)=>{
        //         if(response.status == 200){
        //             Authentication.setAuthenticate(true);
        //             Authentication.setUsername(username);
        //             Authentication.setToken(basicAuthToken);
        //             setSuccess(true); 
        //             setError(false); 
        //             const Toast = Swal.mixin({
        //                 toast: true,
        //                 position: "top-end",
        //                 showConfirmButton: false,
        //                 timer: 3000,
        //                 timerProgressBar: true,
        //                 didOpen: (toast) => {
        //                 toast.onmouseenter = Swal.stopTimer;
        //                 toast.onmouseleave = Swal.resumeTimer;
        //                 }
        //             });
        //             Toast.fire({
        //                 icon: "success",
        //                 title: "Signed in successfully"
        //             });
        //             navigate(`../welcome/${username}`);
        //         }
        //     }
                
        // )
        // .catch(
        //     (error)=>{
        //     setSuccess(false); 
        //     setError(true); 
        //     Authentication.setUsername(null);
        //     Authentication.setAuthenticate(false);
        //     Authentication.setToken(null);
        //     const Toast = Swal.mixin({
        //         toast: true,
        //         position: "top-end",
        //         showConfirmButton: false,
        //         timer: 3000,
        //         timerProgressBar: false,
        //         didOpen: (toast) => {
        //           toast.onmouseenter = Swal.stopTimer;
        //           toast.onmouseleave = Swal.resumeTimer;
        //         }
        //       });
        //       Toast.fire({
        //         icon: "error",
        //         title: "Incorrect Username or Password"
        //       });
        //     }
        // )
        
        // if(username === "Aaditya" && password === "123"){
        //     console.log("Authetication Successfull!");
        //     Authentication.setAuthenticate(true);
        //     Authentication.setUsername(username);
        //     setSuccess(true); 
        //     setError(false); 
        //     const Toast = Swal.mixin({
        //         toast: true,
        //         position: "top-end",
        //         showConfirmButton: false,
        //         timer: 3000,
        //         timerProgressBar: true,
        //         didOpen: (toast) => {
        //           toast.onmouseenter = Swal.stopTimer;
        //           toast.onmouseleave = Swal.resumeTimer;
        //         }
        //       });
        //       Toast.fire({
        //         icon: "success",
        //         title: "Signed in successfully"
        //       });
        //     navigate(`../welcome/${username}`);
        // } else {
        //     setSuccess(false); 
        //     setError(true); 
        //     Authentication.setUsername(null);
        //     const Toast = Swal.mixin({
        //         toast: true,
        //         position: "top-end",
        //         showConfirmButton: false,
        //         timer: 3000,
        //         timerProgressBar: false,
        //         didOpen: (toast) => {
        //           toast.onmouseenter = Swal.stopTimer;
        //           toast.onmouseleave = Swal.resumeTimer;
        //         }
        //       });
        //       Toast.fire({
        //         icon: "error",
        //         title: "Incorrect Username or Password"
        //       });
        // }
    // }
    function Authenticate(){
        if(username === "Aaditya" && password === "123"){
            console.log("Authetication Successfull!");
            Authentication.setAuthenticate(true);
            Authentication.setUsername(username);
            setSuccess(true); 
            setError(false); 
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.onmouseenter = Swal.stopTimer;
                  toast.onmouseleave = Swal.resumeTimer;
                }
              });
              Toast.fire({
                icon: "success",
                title: "Signed in successfully"
              });
            navigate(`../welcome/${username}`);
        } else {
            setSuccess(false); 
            setError(true); 
            Authentication.setUsername(null);
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: false,
                didOpen: (toast) => {
                  toast.onmouseenter = Swal.stopTimer;
                  toast.onmouseleave = Swal.resumeTimer;
                }
              });
              Toast.fire({
                icon: "error",
                title: "Incorrect Username or Password"
              });
        }
    }
    
    return (
        <div style={{height:'100vh'}} className="outerdiv">
            <div className="login_container">
                <div >
                <h1  className="heading">
                    Login
                </h1>
                </div>
               

                
                    {success && <div><h1>Authentication Successfull!</h1> </div>}
                    {error && <div> <h1>Authentication Failed!</h1></div>}
               

                <div className="username">
                    <TextField className="inp" id="outlined-basic 2" label="User Name" variant="outlined" onChange={handleUserName} value={username}/>
                </div>
                <div className="password">
                    <TextField className="inp" id="outlined-basic" type="password" label="Password" variant="outlined" onChange={handlePassword} value={password}/>

                </div>
                <div className="submit">
                    <Button className="inp" variant='contained' color='primary' onClick={Authenticate}>Login</Button>
                </div>

                <div>
                    <a className="formlinks" href="/forgotpassword">forgot Password?</a>  
                    <a className="formlinks" href="/register">Register</a>
                </div>

            </div>
        </div>
    );
}






export default Login;