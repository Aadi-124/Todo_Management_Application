import axios from "axios";
import Auth from "../security/AuthContext";
const apiClient = axios.create(
    {
        baseURL:"http://localhost:8080"
    }
);

// As we have enable spring security in our backend applicaiton we must have to send the authorization headers with this requests which enables frontend
// to access the backend service.
// Here we are passing an object as a second parameter to the get method which acts as an authorization headers. 
// This headers should be added in those methods to which you want to make the access available.



export const retrieveTodos = () => apiClient.get("/public/getalltodos");

export const retrieveTodo = (id) => apiClient.get(`/todos/${id}`);

export const deleteTodoAPI = (todo) => apiClient.post(`/public/deletetodo`,todo);

export const updateTodoAPI = (todo) => apiClient.put(`/public/updatetodo`,todo);

export const addTodoAPI = (todo) => apiClient.post(`/addtodo`,todo);

export const setIsDoneAPI = (todo) => apiClient.put(`/public/setisdone`,todo);

export const BasicAuthentication = (token) => apiClient.get('/basicAuth',{ headers: { 'Authorization': 'Bearer ' + token } });

export const addUserTodo = (todo) => apiClient.post('/public/addusertodo',todo);

export const getUserTodo = (credentials) => apiClient.post('/public/getusertodos',credentials);

export const registerUserAPI = (user) => apiClient.post('/public/register',user);

export const loginAPI = (credentials) => apiClient.post('/public/login',credentials);

export const OTPAPI = (email) => apiClient.post('/public/otp-registration',email);

export const verifyOTP = (otp) => apiClient.get(`/public/verify-otp/${otp}`);

export const forgotPasswordAPI = (email) => apiClient.post('/public/otp-forgot',email);

export const resetPasswordAPI = (email,credentials) => apiClient.post('/public/reset-password',email,credentials);
