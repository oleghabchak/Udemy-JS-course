import React, { Component } from 'react'

export default class ToDoList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            input: "" ,
            items: [] 
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleChange(e) {
        this.setState ({
            input: e.target.value
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            input: this.state.input,
            items: [...this.state.items, this.state.input]
        });
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.input} onChange={this.handleChange} /> 
                    <button type="submit">Submit</button>

            </form>
            <h2 style={{color: "yellow"}}>Greate TODO List:</h2>
            <ul>
                {this.state.items.map((i, index) =>(
                    <li key={index}>{i}</li>
                ))}
            </ul>
            </div>
        )
    }
}
