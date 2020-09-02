import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  width:100%;
  height:100vh;
  max-width:74rem;
  border-radius:0.8rem;
  margin:-3.2rem auto 3.2rem;
  padding-top:6.4rem;
  /* overflow: hidden; */

  form {
    width:90vw;
    a {
      text-decoration:none;
      font-size:1.1rem;
      display:flex;
      justify-content:flex-end;
      color:#9871F5;
      margin-top:0.4rem;
    }

    button {
      width: 100%;
      height: 3.6rem;
      border:0;
      border-radius:0.4rem;
      background:#9871F5;
      cursor: pointer;
      font:700 1.6rem;
      display:flex;
      align-items:center;
      justify-content:center;
      text-decoration:none;
      transition: background-color 0.2s;
      margin-top:3.2rem;
      color:white;
      font-size:1.4rem;
    }
  }

@media (min-width:700px) {

  form {
    width:44.0rem;
  }
}

`;



