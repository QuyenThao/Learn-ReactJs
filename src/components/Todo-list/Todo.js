import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todoItems : [
        { title: 'Buy snacks', isComplete: true},
        { title: 'Go shopping'},
        { title: 'Go home', isComplete: true}
      ]
    }
  }

  onItemClicked(item) {
    return (event) => {
      const isComplete = item.isComplete;
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...todoItems.slice(index + 1)
        ]
      })
    }
  }

  render() {
    const { todoItems } = this.state;
    if (todoItems.length) {
      return (
        <div className="Todo">
          { todoItems.length && todoItems.map((item, index) => 
            <TodoItem 
            key={index} 
            item={item} 
            onClick={this.onItemClicked(item)}/>
            )
          }
        </div>
      );
    } else {
      return (
        <div className="Todo">Nothing here</div>
      )
    }
  }
}
export default Todo;