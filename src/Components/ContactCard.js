import React from 'react'

const ContactCard = (props) => (


    <div>
        <img src="" />
        <h3> Name: {props.contact.name}</h3>
        <p> Age: {props.contact.age} </p>
        <p> About: {props.contact.about}</p>
    </div>
)

export default ContactCard