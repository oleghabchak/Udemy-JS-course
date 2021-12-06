import React, { Component } from 'react'
import F1 from './F1';

export default class Father extends Component {
    constructor(props) {
        super(props);
            this.state = {
            name: "Button not pressed" 
        }; 
        this.updateData = this.updateData.bind(this);
    }
        updateData = (value) => {
            this.setState({
                name: value
            })
        }
    
    render() {
        return (
            <div>
             <p>First State: {this.state.name}</p>
             <F1 updateData={this.updateData}/>
            </div>
        );
    }
}
