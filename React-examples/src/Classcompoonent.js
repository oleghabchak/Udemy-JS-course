import React, { Component } from 'react'

export default class Ccompoonent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "Alexandr",
             count:25
        }
        this.handleClick = this.handleClick.bind(this)
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }

handleClick() {
    this.setState({
        count: this.state.count = 25
    })
}
    
increment() {
    this.setState({
        count: this.state.count +1
    })
}
    
decrement() {
    this.setState({
        count: this.state.count - 1
    })
}
    
    render() {
        
        return (
            <div>
                <h2>Class compon {this.state.name} age {this.state.count}</h2>
                <button onClick={this.handleClick}>reset</button>
                <button onClick={this.decrement}>decrement</button>
                <button onClick={this.increment}>increment</button>
            </div>
        )
    }
}
