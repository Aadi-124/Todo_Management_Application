import { checkAuthority } from "../API/APIService";
import { Button } from "@mui/material";
import Auth from "../security/AuthContext";



export default function Sample(){

  const Authentication = Auth();
  const token = Authentication.token;

  const checkAccess = () =>{
    checkAuthority(token).then((response)=>{
      console.log(response)
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  // const checkAccess = () =>{
  //   checkAuthority(token)
  //   .then((response)=>{
  //     console.log(response);
  //   })
  //   .catch((error)=>{
  //     console.log(error);
  //   })
  // }

  return(
    <>  
          <Button color="primary" variant="contained" onClick={checkAccess}>Check Access!</Button>
    </>
  );
}