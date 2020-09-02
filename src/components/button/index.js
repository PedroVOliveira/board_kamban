import React from 'react'
import { ButtonElement } from './styles';
export default function Button({label,type, ...rest }) {
  return (
      <ButtonElement type={type} >
        {label}
      </ButtonElement>
  )
}
