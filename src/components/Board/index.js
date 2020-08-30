import React,{ useState } from 'react';
// Immer permite mudar estdados do useState e converter automaticamente para estados imutaveis
// Essa biblioteca permite que seja possivel a utilização de metodos como push, slice, e etc.
import immer from 'immer';

import { loadLists } from '../../services/api';

import { Container } from './styles';
import List from '../List';

import ContextBoard from './context';

const data = loadLists();

export default function Board() {
  const [lists,setLists] = useState(data);

  function move(fromList,toList,from,to) {
    setLists(immer(lists,draft =>{
      const dragged = draft[fromList].cards[from]
      draft[fromList].cards.splice(from, 1);
      draft[toList].cards.splice(to, 0, dragged);

    }))
  }

  return (
    <ContextBoard.Provider value={{lists,move}}>
      <Container>
        {lists.map((list,index) => <List key={list.title} index={index} data={list}/>)}
      </Container>
    </ContextBoard.Provider>
  )
}
