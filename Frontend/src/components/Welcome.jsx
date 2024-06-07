
import { useNavigate } from 'react-router-dom';
import './Welcome.css';
import { useParams } from 'react-router-dom';
import Auth from '../security/AuthContext';


function Welcome(){

    const navigate = useNavigate();
    const {username} = useParams();
    const Authentication = Auth();

    function send(){
        navigate("../table");
    }

    return <>
    <div style={{height:'70vh'}}>
        
        <center>
            <h1>Welcome {Authentication.username} to TODOs List!</h1>
            <button className="button-27" role="button" onClick={send}>SHOW TODOs LIST</button>
        </center>
    </div>
    </>;
}


export default Welcome;