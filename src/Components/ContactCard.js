import React from 'react'

class  ContactCard extends React.Component{
    render(){
        return(
            <div>
                <img src="" />
                <h3> Name: {this.props.contact.name}</h3>
                <p> Age: {this.props.contact.age} </p>
                <p> About: {this.props.contact.about}</p>
            </div>
        )
    }
} 



export default ContactCard