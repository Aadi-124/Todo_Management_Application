import axios from "axios";

const apiClient = axios.create(
    {
        baseURL:"http://localhost:8080"
    }
);


// As we have enable spring security in our backend applicaiton we must have to send the authorization headers with this requests which enables frontend
// to access the backend service.
// Here we are passing an object as a second parameter to the get method which acts as an authorization headers. 
// This headers should be added in those methods to which you want to make the access available.


export const retrieveTodos = () => apiClient.get("/todos");

export const retrieveTodo = (id) => apiClient.get(`/todos/${id}`);

export const deleteTodoAPI = (id) => apiClient.delete(`/todos/${id}`);

export const updateTodoAPI = (id,todo) => apiClient.put(`/updatetodo/${id}`,todo);

export const addTodoAPI = (todo) => apiClient.post(`/addtodo`,todo);

export const setIsDoneAPI = (id) => apiClient.put(`/setisdone/${id}`);

export const BasicAuthentication = (token) => apiClient.get('/basicAuth');

export const registerUserAPI = (user) => apiClient.post('/register',user);

