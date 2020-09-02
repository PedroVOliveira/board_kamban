import  styled from 'styled-components';

export const Container = styled.div`
  height:80px;
  padding:0 30px;
  background:#7b18c1;
  color:#fff;
  width:100vw;

  display:flex;
  justify-content:space-between;
  align-items:center;

  button {
    background: transparent;
    border: 0;
    color: #fff;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    cursor:pointer;

    span {
      display:none;
    }
  }

@media (min-width:700px) {
  button {

    span {
      display:block;
    }
  }
}
`


