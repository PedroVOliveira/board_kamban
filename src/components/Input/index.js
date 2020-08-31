import React from 'react'
import { InputBlock } from './styles';
export default function Input({label,name,type, ...rest }) {
  return (
    <InputBlock>
      <label htmlFor={name}>{ label }</label>
      <input type={type} id={name} {...rest}/>
    </InputBlock>
  )
}
