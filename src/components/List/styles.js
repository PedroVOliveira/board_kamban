import styled from 'styled-components';

export const Container = styled.div`
  padding:0 15px;
  height:100%;
  flex: 0 0 320px;
  opacity: ${props => props.done ? 0.6 : 1};

  & + div {
    border-left:1px solid rgba(0,0,0,0.05);
  }

  header {
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:42px;
    margin:10px 0;

    h2 {
      font-weight:500;
      font-size:16px;
      padding:0 10px;
    }

    button[type="submit"] {
      width:42px;
      height:42px;
      border-radius:18px;
      background:#3b5bfd;
      border:0;
      cursor:pointer;
    }

    button[type="button"] {
      position:absolute;
      left:0px;
      border:0;
      background:transparent;
      cursor:pointer;
    }

  }
`;

export const taskButton= styled.button`
  width:100%;
  border:1px solid #7b18c1;
  background:transparent;
  cursor:pointer;

`;
