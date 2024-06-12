import * as React from 'react';
import PropTypes from 'prop-types';
import { Input as BaseInput } from '@mui/base/Input';
import { Box, styled } from '@mui/system';
import "./Todos.css";
import { Button } from '@mui/material';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { registerUserAPI, verifyOTP } from '../API/APIService';
import { CoPresentOutlined } from '@mui/icons-material';
import { LoadingButton } from "@mui/lab";
import { useState } from 'react';
import { Send } from '@mui/icons-material';
function OTP({ separator, length, value, onChange }) {

 

  const inputRefs = React.useRef(new Array(length).fill(null));

  const focusInput = (targetIndex) => {
    const targetInput = inputRefs.current[targetIndex];
    targetInput.focus();
  };

  const selectInput = (targetIndex) => {
    const targetInput = inputRefs.current[targetIndex];
    targetInput.select();
  };

  const handleKeyDown = (event, currentIndex) => {
    switch (event.key) {
      case 'ArrowUp':
      case 'ArrowDown':
      case ' ':
        event.preventDefault();
        break;
      case 'ArrowLeft':
        event.preventDefault();
        if (currentIndex > 0) {
          focusInput(currentIndex - 1);
          selectInput(currentIndex - 1);
        }
        break;
      case 'ArrowRight':
        event.preventDefault();
        if (currentIndex < length - 1) {
          focusInput(currentIndex + 1);
          selectInput(currentIndex + 1);
        }
        break;
      case 'Delete':
        event.preventDefault();
        onChange((prevOtp) => {
          const otp =
            prevOtp.slice(0, currentIndex) + prevOtp.slice(currentIndex + 1);
          return otp;
        });

        break;
      case 'Backspace':
        event.preventDefault();
        if (currentIndex > 0) {
          focusInput(currentIndex - 1);
          selectInput(currentIndex - 1);
        }

        onChange((prevOtp) => {
          const otp =
            prevOtp.slice(0, currentIndex) + prevOtp.slice(currentIndex + 1);
          return otp;
        });
        break;

      default:
        break;
    }
  };

  const handleChange = (event, currentIndex) => {
    const currentValue = event.target.value;
    let indexToEnter = 0;

    while (indexToEnter <= currentIndex) {
      if (inputRefs.current[indexToEnter].value && indexToEnter < currentIndex) {
        indexToEnter += 1;
      } else {
        break;
      }
    }
    onChange((prev) => {
      const otpArray = prev.split('');
      const lastValue = currentValue[currentValue.length - 1];
      otpArray[indexToEnter] = lastValue;
      return otpArray.join('');
    });
    if (currentValue !== '') {
      if (currentIndex < length - 1) {
        focusInput(currentIndex + 1);
      }
    }
  };

  const handleClick = (event, currentIndex) => {
    selectInput(currentIndex);
  };

  const handlePaste = (event, currentIndex) => {
    event.preventDefault();
    const clipboardData = event.clipboardData;

    // Check if there is text data in the clipboard
    if (clipboardData.types.includes('text/plain')) {
      let pastedText = clipboardData.getData('text/plain');
      pastedText = pastedText.substring(0, length).trim();
      let indexToEnter = 0;

      while (indexToEnter <= currentIndex) {
        if (inputRefs.current[indexToEnter].value && indexToEnter < currentIndex) {
          indexToEnter += 1;
        } else {
          break;
        }
      }

      const otpArray = value.split('');

      for (let i = indexToEnter; i < length; i += 1) {
        const lastValue = pastedText[i - indexToEnter] ?? ' ';
        otpArray[i] = lastValue;
      }

      onChange(otpArray.join(''));
    }
  };

  return (
    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
      {new Array(length).fill(null).map((_, index) => (
        <React.Fragment key={index}>
          <BaseInput
            slots={{
              input: InputElement,
            }}
            aria-label={`Digit ${index + 1} of OTP`}
            slotProps={{
              input: {
                ref: (ele) => {
                  inputRefs.current[index] = ele;
                },
                onKeyDown: (event) => handleKeyDown(event, index),
                onChange: (event) => handleChange(event, index),
                onClick: (event) => handleClick(event, index),
                onPaste: (event) => handlePaste(event, index),
                value: value[index] ?? '',
              },
            }}
          />
          {index === length - 1 ? null : separator}
        </React.Fragment>
      ))}
    </Box>
  );
}

OTP.propTypes = {
  length: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  separator: PropTypes.node,
  value: PropTypes.string.isRequired,
};

export default function OTPInput(props) {
  const [otp, setOtp] = React.useState('');
  const [disabled, setDisabled] = React.useState(false);
  const navigate = useNavigate();
  const cancel = () =>{
    Swal.fire({
        title: "Do you want to continue your cancelation process?",
        showDenyButton: true,
        confirmButtonText: "Continue",
        denyButtonText: `Cancle`,
        confirmButtonColor:"red",
        denyButtonColor:"green"
      }).then((result) => {
        if (result.isConfirmed) {
          console.log("isconfirmed!");
            navigate("/login");
        }
      });
  }

  const sendOTP = () =>{
    if(otp.toString().length < 5){
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-right',
        iconColor: 'white',
        customClass: {
          popup: 'colored-toast',
        },
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
      (async () => {
        await Toast.fire({
          icon: 'error',
          title: 'OTP Required',
          text:'Please Provide a valid OTP!'
        })
      })()
      return;
    }
    setLoading(true);
    setText("Verifying...");
    setDisabled(true);
    if(props.user.purpose == "Registration"){
      props.user.otp = otp;
        registerUserAPI(props.user)
        .then((response)=>{
          if(response.data){
            Swal.fire({
              title: "OTP Submittion",
              text: "Registration Successfull!",
              icon: "success"
            });
            navigate("/login");
          } else {
            Swal.fire({
              title: "OTP Submittion",
              text: "Incorrect OTP",
              icon: "error"
              });
              setLoading(false);
              setText("Submit OTP");
              setDisabled(false);
            }
          })
        .catch((error)=>{
            Swal.fire({
              title: "Network",
              text: "Network Error!",
              icon: "error"
              });
              setLoading(false);
              setText("Submit OTP");
              setDisabled(false);
        })
    } else {
        props.user.otp = otp;
        const credentials = {
          name:props.user.name,
          email:props.user.email
        }
        verifyOTP(otp) 
        .then((response)=>{
          if(response.data){
              navigate('/reset-password',{state:credentials});
          } else {
            Swal.fire({
              title: "Network",
              text: "Incorrect OTP!",
              icon: "error"
              });
              setLoading(false);
              setText("Submit OTP");
              setDisabled(false);
          }
        }).catch((error)=>{
          Swal.fire({
            title: "Network",
            text: "Please Check your Internet Connection!",
            icon: "error"
            });
        })
    
    }
  }

  const [loading, setLoading] = useState(false);
  const [text, setText] = useState('Submit OTP');


  return (
    <>
      <div className='OTPContainer'>

        <div className='subContainer'>
    <h1 className='headingOTP'>Enter OTP sent on {props.user.email}</h1>

        </div>
        <div className='subContainer'>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            <OTP separator={<span>-</span>} value={otp} onChange={setOtp} length={5} />
          </Box>
        </div>

              <div className='subContainer'>
              <LoadingButton
                  color="success"
                  onClick={sendOTP}
                  loading={loading}
                  loadingPosition="start"
                  variant="contained"
                  startIcon={<Send/>}
                  className='inp'
                  style={{"margin":"20px"}}
                >
                  <span>{text}</span>
                </LoadingButton>
              <Button style={{"margin":"20px"}} className="inp" disabled={disabled} onClick={cancel} variant='contained' color='error'>CANCEL</Button>
              </div>

      </div>
    </>
  );
}

const blue = {
  100: '#DAECFF',
  200: '#80BFFF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const InputElement = styled('input')(
  ({ theme }) => `
  width: 40px;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px 0px;
  border-radius: 8px;
  text-align: center;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  box-shadow: 0px 2px 4px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.5)' : 'rgba(0,0,0, 0.05)'
    };

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`,
);
