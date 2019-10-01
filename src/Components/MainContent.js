import React from 'react'
import ContactCard from './ContactCard';
import Joke from './Joke'
import Product from './Product'
import vschoolProducts from './vschoolProducts'
import Trainee from './Trainee'
import ClassText from './ClassText'
import ClassLesson from './ClassLesson'
import ToDoList from './ToDoList';
import Events from './Events';
class MainContent extends React.Component {
    render() {
        const productsArray = vschoolProducts.map(function (block) {
            return (
                <Product product={block} />
            )
        })
        return (
            <div>
                <h1>Main content should be here..</h1>

                <ToDoList/>
                <Events/>
                <Trainee />
                <ClassText />
                <ClassLesson/>
            </div>
        )
    }
}

export default MainContent