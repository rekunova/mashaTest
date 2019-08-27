import React from 'react'

class ToDoItem extends React.Component{
   render(){
        return (
            <div className="todo_item">
                <input className ="todo_input" type="checkbox" checked={this.props.tick}></input>
                <span className = 'todo_text'>{this.props.task}</span>
            </div>
        )
    }
}
export default ToDoItem