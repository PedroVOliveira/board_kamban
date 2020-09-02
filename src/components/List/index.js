import React from 'react'
import { Container } from './styles';
import { MdAdd } from 'react-icons/md';
import Card from '../Card';
export default function List({data, index: listIndex}) {
  return (

    <Container done={data.done}>
      <header>
        <h2>{data.title}</h2>

        {data.creatable && (
          <button type="submit">
            <MdAdd size={24} color="#fff" />
          </button>
        )}
      </header>

      <ul>
        {/* O index é necessário para pegar a posição do item na lista */}
        {data.cards.map((card,index) =>
          <Card
            key={card.id}
            listIndex={listIndex}
            data={card}
            index={index}/>
        )}
      </ul>
    </Container>
  )
}
