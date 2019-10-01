import React from 'react'
import ToDoItem from './ToDoItem';
import ContactCard from './ContactCard';
import Joke from './Joke'
import Product from './Product'
import vschoolProducts from './vschoolProducts'
import toDoList from './todosData'
import Trainee from './Trainee'
import ClassText from './ClassText'
import ClassLesson from './ClassLesson'
class MainContent extends React.Component {

    render() {
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

                <Joke
                    question=" have you seen me?"

                />

                <Joke

                    punchline="I am tired as hell"
                />
                {productsArray}

                <ClassText />

                <ClassLesson/>
            </div>
        )
    }
}

export default MainContent