import React, { Component } from 'react';
import './App.css';

import TodoItem from './components/TodoItem';

class App extends Component {
  constructor(){
    super();
    
    this.state = {
      newItem: "",
      todoItems: [
        {title:'Mua bim bim', isComplete: true},
        {title:'Đi đá bóng', isComplete: true},
        {title:'Đi đổ xăng', isComplete: false}
      ]
    }

    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onItemClicked(item) {
    return (event) => {
      console.log(item);
      const isComplete = item.isComplete;
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0,index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...todoItems.slice(index + 1)
        ]
      })
    }
  }

  onKeyUp(event) {
    if (event.keyCode === 13) {
      let text = event.target.value;
      text = text.trim();
      console.log(text);
      if (!text) {
        return;
      }

      this.setState({
        newItem: "",
        todoItems: [
          { title: text, isComplete: false },
          ...this.state.todoItems
        ]
      })
    }
  }

  onChange(event) {
    this.setState({
      newItem: event.target.value
    })
  }

  render() {
    const { newItem, todoItems } = this.state;
    return (
      <div className="App">
        <div className="Header">
          <img src="https://image.flaticon.com/icons/svg/860/860798.svg"/>
          <input 
            type="text" 
            placeholder="Add a new item" 
            value={newItem}
            onKeyUp={this.onKeyUp}
            onChange={this.onChange}  
          />
        </div>
        {
          todoItems.length > 0 && todoItems.map((item, index) => 
            <TodoItem 
              key={index}
              item={item} 
              onClick={this.onItemClicked(item)} /> )
        }
        {
          todoItems.length === 0 && 'Nothing here'
        }
        <div className="Footer">
          <span>1 item lefts</span>
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>
      </div>
    );
  }
}

export default App;
