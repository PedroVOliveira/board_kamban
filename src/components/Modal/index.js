import React from 'react';
import { Container, Content, Close } from './styles';

const Modal = ({id="modal", onClose = () => {}, children}) => {

  const handleOutsideClick = (e) => {
    if(e.target.id === id) onClose();
  }

  return (
    <Container id="modal" className="modal" onClick={handleOutsideClick}>
      <Content className="container">
        <Close className="close" onClick={onClose} />
        <div className="content">{children}</div>
      </Content>
    </Container>
  )
}

export default Modal;
