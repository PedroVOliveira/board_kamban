import React,{useState,useEffect} from 'react'
import Input from '../../components/Input';
import {Container} from './styles';
import {Link} from 'react-router-dom';
import { api,getToken,getboard } from '../../server/api';

export default function RegisterStep() {
  const [step,setStep] = useState('');

  useEffect(()=>{

  })

  async function createStep(){
    const token = getToken();
    const { data } = await getboard();
    const board_id = data.user_id;
    const title = step;
    const insertStep = {
      title,
      board_id,

    }
     if(token){
       await api.post('step',insertStep,{
         headers:{'authorization': token}
       });
     }
  }
  return (
    <Container>
      <form>
          <fieldset>
            <legend>Cadastrar Step</legend>
            <Input name="Nome" label="Titulo do Step" type="text" value={step} onChange={(e)=>setStep(e.target.value)}/>
            <button type="button" onClick={createStep}>
              Criar Step
            </button>
            <Link to="/dashboard">
              Voltar
            </Link>
          </fieldset>
        </form>
    </Container>
  )
}
