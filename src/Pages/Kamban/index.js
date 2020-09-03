import React,{ useState } from 'react'
import { DndProvider } from 'react-dnd';
import {HTML5Backend } from 'react-dnd-html5-backend';
import Header from '../../components/Header';
import Board from '../../components/Board';

export default function Kamban() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Header label="Board Kambam"/>
      <Board />
    </DndProvider>

  )
}
