import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {
  constructor() {
    super();
    this.todoItems = [
      { title: 'Buy snacks', isComplete: true},
      { title: 'Go shopping', isComplete: true},
      { title: 'Go home'}
    ];
  }
  render() {
    return (
      <div className="App">
        {
          this.todoItems.map((item, index) => 
          <TodoItem key={index} item={ item } />)
        }
      </div>
    );
  }
}
export default App;
