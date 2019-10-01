import React from 'react'

class ClassText extends React.Component {
    render() {
        return (
            <div>
                <Header username="Maria" />
                <Greetings />
            </div>
        )
    }
}


class Header extends React.Component {
    render() {
        return (
            <header>
                <p>Welcome, {this.props.username}!</p>
            </header>
        )
    }
}

class Greetings extends React.Component {
    render() {

        const date = new Date()
        const hours = date.getHours()
        let timeOfday;

        if (hours < 12) {
            timeOfday = "morning"
        }
        else if (hours >= 12 && hours < 17) {
            timeOfday = " afternoon"
        }
        else {
            timeOfday = 'night'
        }
        return (
            <div>
                Good {timeOfday} to you, sir or madam
            </div>
        )
    }
}

export default ClassText