import { useParams } from "react-router-dom";

export default function OTP(props){


    const {role} = useParams();

    if(role == "ADMIN"){
        return(<>
            <h1>ADMIN ROLE!</h1>
            
        </>);
    }
    else {
        return (<>
        <h1>USER ROLE!</h1>
        </>);
    }
}