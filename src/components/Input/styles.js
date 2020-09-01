import styled,{css} from 'styled-components';


export const InputBlock = styled.div`
  display:flex;
  flex-direction:column;

  &:focus-within::after {
    width: calc(100% - 3.2rem);
    height:2px;
    content:'';
    /* background:var(--color-primary-light); */
    position: absolute;
    left:1.6rem;
    right:1.6rem;
    bottom:0;
  }

  & + &  {
    margin-top:1.4rem;
  }

  label {
    font-size:1.4rem;
  }

  input {
    width:100%;
    height:3.4rem;
    margin-top:0.8rem;
    border-radius: 0.4rem;
    border:1px solid #E6E6F0;
    outline: 0;
    padding:0 0.4rem;
    background-color:#F8F8FC;
  }
`;

