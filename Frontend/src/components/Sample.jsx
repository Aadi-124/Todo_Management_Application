import { addUserTodo, forgotPasswordAPI } from "../API/APIService";
import Auth from "../security/AuthContext";

export default function Sample(){

  const Authentication = Auth();

  const run = () => {
    console.log("Clicked!");
    const todo = {
      id:0,
      userid:12,
      description:"This is from frontend",
      isDone:false,
      data:"FrontEndData",
      like:200,
      dislike:400,
      createdDate:"12/04/2004",
      userspecifictodoid:0
    }

    addUserTodo(todo)
    .then((response)=>{console.log(response)})
    .catch((error)=>{console.log(error)});
  }


  return(
    <>
      <button onClick={run}>clickme</button>
    </>
  );
}