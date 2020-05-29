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
        let url = "https://image.flaticon.com/icons/svg/846/846004.svg";
        if (item.isComplete) {
            url = "https://image.flaticon.com/icons/svg/845/845646.svg";
        }
        
        return <div className="bor">
        <div className={classNames('TodoItem', {
            'TodoItem-complete': item.isComplete === true
        })}>
                <img onClick={onClick} src={url}/>
                <p>{item.title}</p>
            </div>
            </div>;
    }
}

export default TodoItem;