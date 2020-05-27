import React, {Component} from 'react';
import './TodoItem.css'
import classNames from 'classnames';

class TodoItem extends Component {
    constructor(props) {
        super(props);

        this.onItemClick = this.onItemClick.bind(this);
    }

    onItemClick() {
        
    }
    render() {
        const { item, onClick } = this.props;
        
        return <div onClick={onClick} className={classNames('TodoItem', {
            'TodoItem-complete': item.isComplete === true
        })}>
                <p>{item.title}</p>
            </div>;
    }
}

export default TodoItem;