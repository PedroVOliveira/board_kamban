import React,{useState} from 'react'
import { Container, taskButton } from './styles';
import { MdAdd } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import { BounceLoader } from "react-spinners";
import Card from '../Card';
export default function List({data, index: listIndex}) {
  const history = useHistory();
  function handlecreateStep() {
    history.push('/register-step');
  }
   function handlecreateTask() {
    history.push('/register-task');
  }
  return (
    <Container done={data.done}>
      <header>
        <h2>{data.title}</h2>

          <button type="submit" onClick={handlecreateStep}>
            <MdAdd size={24} color="#fff" />
          </button>
      </header>
      <ul>
        {/* O index é necessário para pegar a posição do item na lista */}
        {/* {data.cards.map((card,index) =>
          <Card
          key={card.id}
          listIndex={listIndex}
            data={card}
            index={index}/>
        )} */}
        {data?.tasks?.map((task,index) =>
          <Card
            key={task.id}
            listIndex={listIndex}
            data={task}
            index={index}/>
            )}

      </ul>
      <button type="submit" id="addTask" onClick={handlecreateTask}>
        <MdAdd size={24} color="#7b18c1" />
      </button>
    </Container>
  )
}
