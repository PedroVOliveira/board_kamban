import axios from 'axios';
import { useHistory } from 'react-router-dom'
const api = axios.create({
  baseURL:"http://localhost:4010/",

})

export const auth = async(email,password)=>{
  const login = await api.post('auth',{
    email,
    password
  })
  localStorage.setItem('@token',`Bearer ${login.data.token}`);
  return login;

}

export const logOut = () => { localStorage.setItem('@token','')}


export const getboard = async(email,password)=>{
  const token = localStorage.getItem('@token');
  const board = await api.get('/board',{
    headers:{'authorization': token}
  })
  return board;

}


