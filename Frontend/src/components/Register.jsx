
import * as React from 'react';
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import './Register.css';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {


  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [pass, setPass] = useState(true);
  const [name, setName] = useState(true);
  const [phone, setPhone] = useState(true);
  const [dob, setDob] = useState(true);
  const [role,setRole] = useState('');
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState = { errors }
  } = useForm();

  const handleRole = (event) =>{
    setRole(event.target.value);
  }

  const onSubmit = () => {

    console.log("ENTERED!");
    if (getValues("name").length <= 20 && getValues("name").length >= 3) setName(true); else {setName(false); return false;}
    if (getValues("phone").length == 10) setPhone(true); else {setPhone(false);  return false;}
    if (getValues("pass") == getValues("cpass")) setPass(true); else {setPass(false);  return false;}
    let date = getValues("dob").split(".");
    if (new Date().getFullYear() - date[2] >= 18) setDob(true); else {setDob(false);  return false;}
    console.log(name);
    console.log(pass);
    console.log(dob);
    console.log(phone);

    const ROLE = getValues("role");
    if(name && phone && pass && dob){
        navigate(`/otp/${ROLE}`);
    }

  }


  return (
    <>

      <form action="" onSubmit={handleSubmit(onSubmit)}>
    <div className='formcontainer'>

          <div id='Regheading'>

            {/* Heading */}
            <p className='heading'>Register</p>

          </div>
        <div className="Regcontainer">

          <div className='subcontainer'>

            <div>


              {/* NAME */}
              <TextField className="outlined-basic txt_fields" id='name' type="text" {...register("name")} label="Name" variant="outlined" required />
              {!name && <label htmlFor="name" style={{ "color": "red", "display": "block", "fontFamily": "Roboto" }}>*User Name must in between 3 to 20 letters</label>}
              <br />
              <br />
            </div>
            <div>


              {/* ROLE */}
              <Box className="txt_fields">
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Role</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    {...register("role")}
                    label="Role"
                    onChange={handleRole}
                    value={role}
                    required
                  >
                    <MenuItem value={"ADMIN"}>ADMIN</MenuItem>
                    <MenuItem value={"USER"}>USER</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <br />
            </div>
            <div>

              {/* PASSWORD */}
              <FormControl className="txt_fields" variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                  {...register("pass")}
                  required
                  id="outlined-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              <br />
              <br />
            </div>

            {/* PASSWORD */}
            <div>
              <TextField className="outlined-basic txt_fields" id='cpass' type="password" {...register("cpass")} label="Confirm Password" variant="outlined" required />
              {!pass && <label htmlFor="cpass" style={{ "color": "red", "display": "block", "fontFamily": "Roboto" }}>*Password Doesn't Match </label>}
              <br />
              <br />
            </div>
          </div>

          <div className='subcontainer'>

            {/* EMAIL */}
            <div>
              <TextField className="outlined-basic txt_fields" type="email" {...register("email")} label="Email" variant="outlined" required />
              <br />
              <br />
            </div>

            {/* PHONE */}
            <div>
              <TextField className="outlined-basic txt_fields" id='phone' type="number" {...register("phone")} label="Phone" variant="outlined" required />
              {!phone && <label htmlFor="phone" style={{ "color": "red", "display": "block", "fontFamily": "Roboto" }}>*Incorrect Phone Number </label>}
              <br />
              <br />
            </div>


            {/* DOB */}
            <div>
              <LocalizationProvider dateAdapter={AdapterDayjs}  adapterLocale="de">
                <DemoContainer components={['DateField']}>
                  <DateField className='txt_fields' {...register("dob")} id='date' label="Date Of Birth" required/>
                </DemoContainer>
              </LocalizationProvider>
              {!dob && <label htmlFor="date" style={{ "color": "red", "display": "block", "fontFamily": "Roboto" }}>*User Should be Above 18 </label>}
              <br />
            </div>

            {/* PROFILE PIC */}
            <div>
              <TextField className="outlined-basic txt_fields" type="text" {...register("profilepic")} label="ProfilePic" variant="outlined"required />
              <br />
              <br />
            </div>
        </div>

          </div>

          <div id='Regsubmit'>
            {/* SUBMIT BUTTON! */}
            <Button variant="contained" id='regbtn' type="submit">Register</Button>
           
          </div>

    </div>
      </form>






    </>
  );
}