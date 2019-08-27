import React from 'react'

const Joke = (props) => {
    const quest = props.question
    return (
        <div className="joke">
            {quest == undefined ? '' : <h1 className="joke_question"> This is  a question: {props.question}</h1>}
            <h1> This is  a punchline: {props.punchline}</h1>
        </div>
    )

}
export default Joke