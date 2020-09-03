import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, .8);
`

export const Content = styled.div`
  background-color: #fff;
  color: #000;
  width: 80%; //Largura do Modal
  height: 100% auto; //Altura do Modal
  padding: 0 20px;
  border-radius: 24px;
`

export const Close = styled.button`
  background-color: transpartent;
  display: flex;
  align-items: center;
  position: relative;
  border: none;
  outline: none
  width: 32px;
  height: 32px;
  right: calc(-100% + 36px);
  top: 16px;
  cursor: pointer;

  &:before,
  &:after {
    content: ' ';
    position: absolute;
    width: 4.5px;
    height: 24px;
    background-color: #7b18d4;
  };
  &:before {
    transform: rotate(45deg);
  };
  &:after {
    transform: rotate(-45deg);
  };
`
