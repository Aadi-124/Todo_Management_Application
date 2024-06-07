import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { TextField } from "@mui/material";
import Button from '@mui/material/Button';
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import { addTodoAPI } from "../API/APIService";

export default function AddTodo(){

    const navigate = useNavigate();
    const {id} = useParams();
    const [description,setDesription] = useState('');
    const [date,setDate] = useState('');
    const{
        register,
        handleSubmit,
        setValue,
        getValues,
        formState = {errors}
    } = useForm();
   

    const onSubmit = ()=>{

            const todo = {
                description:getValues("tododescription"),
                date:getValues("tododate"),
                isDone:false}
                addTodoAPI(todo)
                .then(()=>{
                Swal.fire({
                    title: 'Todo Added Successfully!',
                    icon: 'success',
                    confirmButtonText: 'OK'
                }).then((response)=>{
                    if(response.isConfirmed){
                        navigate("/table");
                    }
                })
            })
                .catch(()=>{
                    Swal.fire({
                        title: 'Updated!',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    }).then((response)=>{
                        if(response.isConfirmed){
                            navigate("/table");
                        }
                    })
                })
                 
                
            
    }

    const handleOnChange = (event) => {
        setDesription(event.target.value);
    }
 
    
    const cancel = () =>{
        navigate("/table");
    }


    return (
        <>
            <center>

                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div style={{marginTop:"4cm"}}>
                        <br />
                        <br />
                        <TextField label="Description" id="outlined-basic" onChange={handleOnChange}  {...register("tododescription")} variant="outlined" />
                        <br />
                        <br />
                        <br />
                        <br />
                        <span style={{fontFamily:"calibri",fontSize:"20px",margin:"30px"}}>Date</span>
                        <br /> 
                        <TextField id="outlined-basic" onChange={(newValue) => setValue(newValue)}  {...register("tododate")} variant="outlined" type="date"  />
                    </div>
                    
                    <br />
                    <br />
                    <br />
                    <Button variant="contained" onClick={cancel} style={{fontWeight:"bolder",margin:"30px"}} color="error">Cancel</Button>
                    <Button variant="contained" type="submit" style={{fontWeight:"bolder",margin:"30px"}} color="success">Add Todo</Button>
                </form>
            </center>
        </>
    );
}