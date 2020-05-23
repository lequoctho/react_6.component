import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TodoItem from './components/TodoItem';

class App extends Component {
  constructor(){
    super();
    this.todoItems = [
      'Mua bim bim',
      'Đi đá bóng',
      'Đi đổ xăng'
    ];
  }

  render() {
    return (
      <div className="App">
        {
          this.todoItems.map((item, index) => <TodoItem title={item} key={index}/> )
        }
      </div>
    );
  }
}

export default App;
