import React from 'react'
// Hook de drag in drop use drag faz a lógica de arastar e o use drop cria a funcionalidade adicionar o card em outra lista
import { useDrag, useDrop } from 'react-dnd';
import { Container,Label } from './styles';

export default function Card( {data} ) {

  // Essa parte de código é o que cria a lógica de drag in drop
  const [ {isDragging }, dragRef] = useDrag({
    item:{type:'CARD'},
    collect:monitor=>({
      isDragging:monitor.isDragging(),

    })
  })
  return (
    // o container recebe a referencia e o comportamento.
    <Container ref={dragRef} isDragging={isDragging}>
      <header>

        {data.labels.map(label => <Label key={label} color={label} />)}

      </header>
      <p>{data.content}</p>
      {data.user && <img src={data.user} alt="user"/>}

    </Container>
  )
}
