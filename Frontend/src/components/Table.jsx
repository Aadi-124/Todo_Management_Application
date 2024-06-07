
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import '@fontsource/roboto/300.css';
import { Button } from '@mui/material';
import { deleteTodoAPI,retrieveTodos} from '../API/APIService';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Btn.css';
import { setIsDoneAPI } from '../API/APIService';
import Swal from 'sweetalert2';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));


const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



export default function CustomizedTables() {

  const [todos, setTodos] = useState([]);

  const navigate = useNavigate();

  const setIsDone = (id) => {
    setIsDoneAPI(id)
      .then(() => {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-right",
          showConfirmButton: false,
          timer: 2000,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "success",
          title: "Task Completed!"
        });
        refresh();
      }).catch(() => {

        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "Error",
          title: "Some Error Occured!"
        });
        refresh();
      })
  }

  useEffect(() => refresh(), [])
  function refresh() {
    retrieveTodos()
      .then((response) => { setTodos(response.data) })
      .catch((error) => {})
      .finally(() => {})
  }

  const deleteTodo = (id) => {
    deleteTodoAPI(id);
    refresh();
    refresh();
    refresh();
  }

  const updateTodo = (id) => {
    navigate(`/updatetodo/${id}`);
  }




  return (
    <>
      <Button onClick={refresh} variant='contained' color='secondary' style={{ fontWeight: 'bolder', margin: '30px' }}>Refresh Todos</Button>
      <center>
        <h1>TODOs</h1>

        <TableContainer>
          <Table sx={{ width: "100%", overflowX: 'auto' }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align='center' style={{ fontSize: "30px", fontFamily: "monospace", width: '10%' }}  >ID</StyledTableCell>
                <StyledTableCell align="center" style={{ fontSize: "30px" }} width={'20%'} >Description</StyledTableCell>
                <StyledTableCell align="center" style={{ fontSize: "30px" }} width={'20%'} >isDone</StyledTableCell>
                <StyledTableCell align="center" style={{ fontSize: "30px" }} width={'20%'} >Targated Date</StyledTableCell>
                <StyledTableCell align="center" style={{ fontSize: "30px" }} width={'30%'} >Functionality</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {todos.map((todo) => (
                <StyledTableRow key={todo.id}>
                  <StyledTableCell component="th" align='center' scope="row">{todo.id}</StyledTableCell>
                  <StyledTableCell align="center">{todo.description}</StyledTableCell>
                  <StyledTableCell align="center">{todo.isDone && 'Done'}{!todo.isDone && 'Not Done'}</StyledTableCell>
                  <StyledTableCell align="center">{todo.date}</StyledTableCell>
                  <StyledTableCell align="left">
                    <Button variant='contained' color='error' onClick={() => deleteTodo(todo.id)} style={{ fontWeight: 'bolder', margin: '5px' }}>Delete</Button>
                    <Button variant='contained' color='warning' onClick={() => updateTodo(todo.id)} style={{ fontWeight: 'bolder', margin: '5px', backgroundColor: "rgb(220, 143, 0)" }}>Update</Button>
                    {!todo.isDone && <Button variant='contained' color='success' onClick={() => setIsDone(todo.id)} style={{ fontWeight: 'bolder', margin: '5px' }}>Done</Button>}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
          <br />
          <Button variant='contained' className='addbtn' color='primary' onClick={() => navigate("/addtodo")}>Add todo</Button>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </TableContainer>
      </center>
    </>
  );
}   