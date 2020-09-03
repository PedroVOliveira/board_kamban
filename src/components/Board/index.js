import React,{ useState,useEffect } from 'react';
// Immer permite mudar estdados do useState e converter automaticamente para estados imutaveis
// Essa biblioteca permite que seja possivel a utilização de metodos como push, slice, e etc.
import immer from 'immer';

import { loadLists } from '../../services/api';

import { Container } from './styles';
import List from '../List';
// Puxa a api
import ContextBoard from './context';
import { getboard } from '../../server/api';
const data = loadLists();

export default function Board() {

  const [lists,setLists] = useState(data);
  const [board,setBoard] = useState('');

  useEffect(()=>{
    handleTask();

  },[])

  async function handleTask() {
    const { data } = await getboard();
    setBoard(data);
  }

  function move(fromList,toList,from,to) {
    setLists(immer(lists,draft =>{
      const dragged = draft[fromList].cards[from]
      draft[fromList].cards.splice(from, 1);
      draft[toList].cards.splice(to, 0, dragged);

    }))
  }
  // getboard();
  return (
    <ContextBoard.Provider value={{lists,move}}>
      <Container>
        {/* {lists.map((list,index) => <List key={list.title} index={index} data={list}/>)} */}
        {/* Optional chaning */}
        {board?.steps?.map((step,index) => <List key={step.id} index={index} data={step} />)}
      </Container>
    </ContextBoard.Provider>
  )
}
