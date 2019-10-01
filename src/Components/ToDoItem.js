import React from 'react'

class ToDoItem extends React.Component{

   render(){

    // function addTick(){
    //     if(tick === true){
    //         tick = false 
    //     }
    //     else{
    //         tick = true;
    //     }
    // }
        return (
            <div className="todo_item">
                <input className ="todo_input" type="checkbox" checked={this.props.tick} onChange={()=> console.log('nc')}></input>
                <span className = 'todo_text'>{this.props.task}</span>
            </div>
        )
    }
}
export default ToDoItem