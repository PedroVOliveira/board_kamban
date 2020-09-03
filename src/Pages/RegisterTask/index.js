import React,{useState,useEffect} from 'react'
import Input from '../../components/Input';
import {Container} from './styles';
import {Link} from 'react-router-dom';
import { api,getToken,getboard } from '../../server/api';
export default function RegisterStep() {
  const [title,setTitle] = useState('');
  const [content,setContent] = useState('');
  const [date,setDate] = useState('');
  // const [step_id,setStep_id] = useState();
  async function createTask(){
    const token = getToken();
    const { data } = await getboard();
    const step_id = data.user_id;
    const insertTask = {
      title,
      content,
      date,
      step_id,

    }
     if(token){
       await api.post('task',insertTask,{
         headers:{'authorization': token}
       });
     }


  }
  return (
    <Container>
      <form>
          <fieldset>
            <legend>Cadastrar Tarefa</legend>
            <Input name="task" label="Titulo do Tarefa" type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
            <Input name="content" label="Conteúdo da Tarefa" type="text" value={content} onChange={(e)=>{setContent(e.target.value)}}/>
            <Input name="text" label="Data da Tarefa" type="string" value={date} onChange={(e)=>{setDate(e.target.value)}}/>
            {/* <Input name="step_task" label="Step da Tarefa" type="number" value={step_id} onChange={(e)=>{setStep_id(e.target.value)}} placeholder="Digita a Posição da tarefa: 1,2,3,4,5, etc."/> */}
            <button type="button" onClick={createTask}>
              Criar Tarefa
            </button>
            <Link to="/dashboard">
              Voltar
            </Link>
          </fieldset>
        </form>
    </Container>
  )
}
