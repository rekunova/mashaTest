import React from 'react'
import todosData from './todosData'
import ToDoItem from './ToDoItem';

class ToDoList extends React.Component{
    constructor(){
        super()
        this.state ={
            todos: todosData
        }
    }
    render(){
        const todosItems = this.state.todos.map(item => <ToDoItem task={item.text} key={item.id} tick={item.completed} />)
        return(
            <div>
                <div className="todo_list">

                    <h2 className="todo_heading"> This is a ToDo list</h2>

                    {todosItems}

                </div>
            </div>
        )
    }
}

export default ToDoList