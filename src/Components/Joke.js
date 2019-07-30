import React from 'react'

function  Joke (props){
    console.log(props.question );
   return (
    <div className="joke">
        <h1 className="joke_question"> This is  a question: {props.question}</h1>
        <h1> This is  a punchline: {props.punchline}</h1>
    </div>    
    )

   }
export default Joke