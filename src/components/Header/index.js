import React from 'react'
import { Container } from './styles';
import { useHistory } from 'react-router-dom';
import { logOut } from '../../server/api';
import { MdExitToApp } from 'react-icons/md';
export default function Header({ label }) {
  let history = useHistory();
  function logOff(e) {
    logOut();
    let token = localStorage.getItem('@token');
    if(token === '') {
      history.push('/');
    }
  }
  return (
    <Container>
      <h1>{ label }</h1>
      <button type="button" onClick={logOff}>
        <MdExitToApp size={24} color="#fff" />
        <span>
          Deslogar
        </span>
      </button>
    </Container>
  )
}
