import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todo extends Component {
  constructor() {
    super();
    this.todoItems = [
      { title: 'Buy snacks', isComplete: true},
      { title: 'Go shopping'},
      { title: 'Go home'}
    ];
  }
  render() {
    return (
      <div className="Todo">
        {
          this.todoItems.length > 0 && this.todoItems.map((item, index) => 
          <TodoItem key={index} item={ item } />)
        }
        {
          this.todoItems.length === 0 && 'Nothing here.'
        }
      </div>
    );
  }
}
export default Todo;