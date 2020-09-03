import React,{ useState,useEffect } from 'react';
// Immer permite mudar estdados do useState e converter automaticamente para estados imutaveis
// Essa biblioteca permite que seja possivel a utilização de metodos como push, slice, e etc.

import { Container } from './styles';
import List from '../List';
// Puxa a api
import { getboard } from '../../server/api';

export default function Board() {

  const [board,setBoard] = useState('');

  useEffect(()=>{
    handleTask();

  },[])

  async function handleTask() {
    const { data } = await getboard();
    setBoard(data);
  }

  // async function move(fromList,toList,from,to) {
  //   await setLists(immer(lists,draft =>{
  //     const dragged =  draft[fromList].steps[from]
  //     draft[fromList].steps.splice(from, 1);
  //     draft[toList].steps.splice(to, 0, dragged);

  //   }))
  // }
  // getboard();
  return (

      <Container>
        {/* {lists.map((list,index) => <List key={list.title} index={index} data={list}/>)} */}
        {/* Optional chaning */}
        {board?.steps?.map((step,index) => <List key={step.id} index={index} data={step} />)}
      </Container>
  )
}
