import React from 'react';
import ReactDOM from 'react-dom';
//import {render} from 'react-dom';
import KanbanBoard from './KanbanBoard';
import Parentx from './Parentx';
let cardsList = [
  {
    id: 1,
    title: "Read the Book",
    description: "I should read the whole book",
    status: "in-progress",
    tasks: []
  },
  {
    id: 2,
    title: "Write some code",
    description: "Code along with the samples in the book",
    status: "todo",
    tasks: [
      {
      id: 1,
      name: "ContactList Example",
      done: true
      },
      {
      id: 2,
      name: "Kanban Example",
      done: false
      },
      {
      id: 3,
      name: "My own experiments",
      done: false
      }
    ]
  },
];

//ReactDOM.render(<KanbanBoard cards={cardsList} />, document.getElementById('rootx'));
ReactDOM.render(<Parentx/>, document.getElementById('rootx'));
