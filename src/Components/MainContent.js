import React from 'react'
import ToDoItem from './ToDoItem';
import ContactCard from './ContactCard';
import Joke from './Joke'
import Product from './Product'
import vschoolProducts from './vschoolProducts'
import toDoList from './todosData'
import Trainee from './Trainee'
class MainContent extends React.Component {

    render (){
        const productsArray = vschoolProducts.map(function (block) {
            return (
                <Product product={block} />
            )
        })
        const toDoArrey = toDoList.map(item => <ToDoItem task={item.text} key={item.id} tick={item.completed} />)
        return (
            <div>
                <h1>Main content should be here..</h1>

                <div className="todo_list">

                    <h2 className="todo_heading"> This is a ToDo list</h2>

                    {toDoArrey}

                </div>
                <Trainee />

                <ContactCard
                    contact={{ name: "ivan", age: "20", about: "i like apples" }}

                />
                <ContactCard
                    contact={{ name: "maria", age: "20", about: "i like apples" }}

                />

<<<<<<< HEAD
                <Joke
                    question=" have you seen me?"
                    punchline="no"
                />
=======
            <Joke
             question =" have you seen me?"

            />
>>>>>>> 95c09e7d1cd81dce985822c4d023816816608953

                <Joke

                    punchline="I am tired as hell"
                />
                {productsArray}
            </div>
        )
    }
}

export default MainContent