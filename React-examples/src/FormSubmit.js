import React, { Component } from 'react'

export default class FormSubmit extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            input: "" ,
            submit: "" 
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
            submit: this.state.input
        });
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.input} onChange={this.handleChange} /> 
                    <button type="submit">Submit</button>

            </form>
            <h5>Submit input:</h5>
            <h2>{this.state.submit}</h2>
            </div>
        )
    }
}
