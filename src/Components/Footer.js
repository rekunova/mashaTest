import React from 'react'

function MyFamily(){
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay; 

    if (hours < 12){
        timeOfDay = 'morning'
    }
    else if (hours >= 12 && hours < 17 ){
        timeOfDay = 'afternoon'
    }
    else if (hours >= 17){
        timeOfDay = 'evening'
    }
    return(
        <footgher>
            <h3>Let me go, because it is {timeOfDay} , already</h3>
        </footgher>
    )
}

export default MyFamily