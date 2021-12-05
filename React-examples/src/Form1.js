import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            input: "" 
        }

    this.handleChange = this.handleChange.bind(this);

    }

    handleChange(e) {
        this.setState ({
            input: e.target.value
        });
    }
    
    render() {
        return (
            <div>
             <input onChange={this.handleChange} /> 
            <h5>Controled input:</h5>
            <h2>{this.state.input}</h2>
            </div>
        )
    }
}
