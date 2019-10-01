import React from 'react'
class Events extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    handleClick() {
        this.state.count++
    }

    render() {
        return (
            <div>
                <div className="redSquare">{this.state.count}</div>
                <button className="button" onClick={this.handleClick}> click</button>
            </div>

        )
    }
}
export default Events