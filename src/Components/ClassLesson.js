import React from 'react'

class ClassLesson extends React.Component{
    constructor(){
        super()
    
        this.state = {
            isLoggedIn: false
        }
        

    }
    render(){
        let wordDisplay;
        if (this.state.isLoggedIn===true){
            wordDisplay ="in"
        }
        else{
            wordDisplay="out"
        }
        return(
            <div>
                <h1>You are curently logged {wordDisplay}</h1>
            </div>
        )
    }
}

export default ClassLesson