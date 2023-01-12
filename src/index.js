import React from 'react';
import ReactDOM from 'react-dom';
import MyList from './MyList';
import './index.css';

const toDos = ["Grab lunch with Jin", "Finish deliverable after class", "Make dinner", "Watch a tv show", "Get ready for bed"]

ReactDOM.render(
  <MyList theList={toDos}/>,
  document.getElementById('root')
)