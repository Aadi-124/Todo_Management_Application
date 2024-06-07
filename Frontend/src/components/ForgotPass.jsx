
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import './forgotpass.css';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function ForgotPass() {

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        formState = { errors }
      } = useForm();
    

      const onSubmit = () =>{

      }

    return (
        <>

<div style={{height:'100vh'}} className="outerdiv">
            <div className="login_container">
                <div >
                <h1  className="heading">
                    Enter your Email 
                </h1>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
        

                <div className="username">
                    <TextField style={{"width":"100%"}} {...register("email")}className="inp" type="email" id="outlined-basic 2" label="Enter Email" variant="outlined" />
                </div>
                <div className="submit">
                    <Button style={{"margin":"50px"}} className="inp" type="submit" variant='contained' color='success'>send OTP</Button>
                    <Button style={{"margin":"50px"}} className="inp" onClick={()=>{navigate("/login")}} variant='contained' color="error">Cancel</Button>
                </div>

                </form>
            </div>
        </div>
        
        </>
    );
}