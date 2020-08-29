import React from 'react';
import { loadLists } from '../../services/api';
import { Container } from './styles';
import List from '../List';

const list = loadLists();

export default function Board() {
  return (
    <Container>
      {list.map(list => <List key={list.title} data={list}/>)}
      {/* <List />
      <List />
      <List />
      <List /> */}
    </Container>
  )
}
