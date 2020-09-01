import React from 'react'
import { Link } from 'react-router-dom';
import { Container } from './styles';
import logo from '../../assets/logo.png'
// Components
import Input from '../../components/Input';
export default function Home() {
  return (
    <Container>
      <header>
        <img src={logo} alt="logo"/>
      </header>
      <form action="" id="login-user">
        <Input name="email" label="Email" type="text"/>
        <Input name="password" label="Senha" type="password"/>
        <Link to="/register-user">
          não tenho cadastro
        </Link>
        <button type="button">
          Fazer Login
        </button>

      </form>

    </Container>
  )
}
