import React, { Component } from 'react';
import './App.css';

import TodoItem from './components/TodoItem';

class App extends Component {
  constructor(){
    super();
    
      this.state = {
        todoItems: [
          {title:'Mua bim bim', isComplete: true},
          {title:'Đi đá bóng', isComplete: true},
          {title:'Đi đổ xăng', isComplete: false}
        ]
      }
  }

  onItemClicked(item) {
    return (event) => {
      console.log("test", item);
    }
  }

  render() {
    const { todoItems } = this.state;
    return (
      <div className="App">
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
      </div>
    );
  }
}

export default App;
