import OTPInput from "./OTP";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function RegistrattionOTP(){

    const location = useLocation();
    const userdata = location.state;

    return(
        <>
            <OTPInput
            email={userdata.email} 
            user={userdata}
            />
        </>
    );
}