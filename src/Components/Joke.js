import React from 'react'

<<<<<<< HEAD
const Joke = (props) => {
    const quest = props.question
    return (
        <div className="joke">
            {quest == undefined ? '' : <h1 className="joke_question"> This is  a question: {props.question}</h1>}
            <h1> This is  a punchline: {props.punchline}</h1>
=======
function Joke(props) {
    console.log(props.question);
    return (
        <div className="joke">
            <h1 className="joke_question"> This is  a question: {props.question}</h1>

            {props.punchline &&   // условный рендеринг 
                <h1> This is  a punchline: {props.punchline}</h1>
            }
>>>>>>> 95c09e7d1cd81dce985822c4d023816816608953
        </div>
    )

}
export default Joke