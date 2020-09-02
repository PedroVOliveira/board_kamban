import React,{useState,useEffect} from 'react'
import { Link,useHistory } from 'react-router-dom';
import { Container } from './styles';
import logo from '../../assets/logo.png';
import { auth } from '../../server/api';
// Components
import Input from '../../components/Input';
export default function Home() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  let history = useHistory();
  useEffect(()=>{
    function verifyLogin() {
      let token = localStorage.getItem('@token');

      if(token) {
        history.push('/dashboard/');
      }
    }

    verifyLogin();
  },[])
  async function handleClick() {
    const login = await auth(email,password);
    if(login) {
      history.push('/dashboard/');
    }
  }


  return (
    <Container>
      <header>
        <img src={logo} alt="logo"/>
      </header>
      <form action="post" id="login-user">
        <Input name="email" label="Email" type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <Input name="password" label="Senha" type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
        <Link to="/register-user">
          não tenho cadastro
        </Link>
        <button type="button" onClick={handleClick}>
          Fazer Login
        </button>
      </form>
    </Container>
  )
}
