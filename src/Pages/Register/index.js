import React from 'react'
import { Container } from './styles';
import Input from '../../components/Input';
import { Link, } from 'react-router-dom';
export default function Register() {
  return (
    <Container>
      <form>
        <fieldset>
          <legend>Cadastrar</legend>
          <Input name="Nome" label="Nome" type="text"/>
          <Input name="Email" label="Email" type="email"/>
          <Input name="Senha" label="Senha" type="password"/>
          <button type="button">
            Fazer Login
          </button>
          <Link to="/">
            Voltar
          </Link>
        </fieldset>


      </form>
    </Container>
  )
}
