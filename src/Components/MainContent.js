import React from 'react'
import ToDoItem from './ToDoItem';
import ContactCard from './ContactCard';
import Joke from './Joke'
function MainContent() {
    
    return (
        <div>
            <h1>Main content should be here..</h1>

            <div className="todo_list">

                <h2 className="todo_heading"> This is a ToDo list</h2>

                <ToDoItem /><br />
                <ToDoItem /><br />
                <ToDoItem /><br />


            </div>

            <ContactCard
                contact ={{name: "ivan", age:"20", about: "i like apples"}}

            />
            <ContactCard
               contact ={{name: "maria", age:"20", about: "i like apples"}}

            />

            <Joke
                question =" have you seen me?"
                punchline ="no"
            />

            <Joke
            
                punchline="I am tired as hell"
            />

        </div>
    )

}

export default MainContent