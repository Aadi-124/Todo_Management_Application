
import { useParams } from "react-router-dom";
import { retrieveTodo, updateTodoAPI } from "../API/APIService";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import Button from '@mui/material/Button';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from "@mui/x-date-pickers";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

export default function UpdateTodos(){

    // const [value, setV] = useState(dayjs(''));
    const navigate = useNavigate();
    const {id,index} = useParams();
    const [description,setDesription] = useState('');
    const [date,setDate] = useState('');
    // const [todo,setTodo] = useState({});
    const [isDone,setIsDone] = useState(false);
    const{
        register,
        handleSubmit,
        setValue,
        getValues,
        formState = {errors}
    } = useForm();

    useEffect(() => {
            setValue("tododescription",description);
    }, [description]);

    useEffect(() => {
            setValue("tododate",date);
    }, [date]);




    
    useEffect(()=>{
        retrieveTodo(id)
        .then((response) => 
        {
            setDesription(response.data.description)
            setDate(response.data.date)
        })
        .catch((error) => {})
        .finally(() => {})
    },[])
    

   

    const onSubmit = ()=>{
       
        // console.log("Submitted Data = "+data);
        // console.log("id = "+id);
        // console.log("data.description = "+getValues("tododescription"));
        // console.log("data.tododate = "+getValues("tododate"));
        // console.log("isDone = "+isDone);
        // console.log("data.toString() = "+data.toString());
        // setTodo({ id:id,
        //     description:getValues("tododescription"),
        //     date:getValues("tododate"),
        //     isDone:false});
            const todo = { id:id,
                description:getValues("tododescription"),
                date:getValues("tododate"),
                isDone:false}
                updateTodoAPI(id,todo)
                .then((response)=>{})
                .catch((error)=>{})
                .finally(()=>{})
                 
                Swal.fire({
                    title: 'Updated!',
                    icon: 'success',
                    confirmButtonText: 'OK'
                }).then((response)=>{
                    if(response.isConfirmed){
                        navigate("/table");
                    }
                })
                // navigate("/table")
            
    }

    const handleOnChange = (event) => {
        setDesription(event.target.value);
    }
 
    
    const cancel = () =>{
        navigate("/table");
    }


    return(
        <>
        <center>

            <form action="" onSubmit={handleSubmit(onSubmit)}>
                {/* <input type="text" {...register("todojname",{required:{value:true,message:"This is required!"}})} /> */}
                <div style={{marginTop:"4cm"}}>
            <br />
           <span style={{fontFamily:"calibri",fontSize:"20px",margin:"30px"}}>Description</span>
           <br />
            <TextField id="outlined-basic" onChange={handleOnChange}  {...register("tododescription")} variant="outlined" />
            <br />
            <br />
            <br />
            <br />
            {/* <TextField id="outlined-basic"  {...register("tododate")} type="date" variant="outlined" /> */}


            
           <span style={{fontFamily:"calibri",fontSize:"20px",margin:"30px"}}>Date</span>
           <br /> 
           <TextField id="outlined-basic" onChange={(newValue) => setValue(newValue)}  {...register("tododate")} variant="outlined" type="date" />




            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker {...register("tododate")} />
            </LocalizationProvider>  */}

                </div>
                <br />
                <br />
                <br />
                <Button variant="contained" onClick={cancel} style={{fontWeight:"bolder",margin:"30px"}} color="error">Cancel</Button>
                <Button variant="contained" type="submit" style={{fontWeight:"bolder",margin:"30px"}} color="success">Update</Button>
            </form>
        </center>
        </>
    );
}