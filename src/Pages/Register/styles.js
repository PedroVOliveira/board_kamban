import styled from 'styled-components';

export const Container = styled.div`
  background-color:#9871F5;
  display:flex;
  /* align-items:center; */
  flex-direction:column;
  justify-content:center;
  height:100vh;
  color:#32264D;

  form {
    width:90vw;
    margin:0 auto;

    fieldset {
      border: 0;
      padding: 0 2.4rem;
      background-color:#fff;
      height:50rem;
      border-radius:8px;

      legend {
        font: 700 2.4rem;
        position: relative;
        top: 30px;
        padding-top: 100px;
        color:#32264D;
        margin-bottom: 2.4rem;
        display: flex;
        align-items: center;
        justify-content: left;
        width: 100%;
        padding-bottom: 1.6rem;
        border-bottom: 1px solid #E6E6F0;

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

      a {

        width:100%;
        display:flex;
        justify-content:center;
        text-decoration:none;
        color:#32264D;
        margin-top:1.4rem;

      }
    }

  }

  @media (min-width:700px) {
    & {
      width:100%;
      display:flex;
      justify-content:center;
    }

    form {
      display:flex;
      justify-content:center;

      fieldset {
        width:44.0rem;
      }

    }
  }
`;


