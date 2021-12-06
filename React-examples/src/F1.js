import React, { Component } from 'react'

export default class F1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "PERESSED BUTTON!!!" 
        }

     // this.updateData = this.updateData.bind(this);

    }

    // updateData = (value) => {
    //     this.setState ({
    //         nane: value
    //     });
    // }
    
    render() {
        return (
            <div>
              <button onClick={() => {this.props.updateData(this.state.name)}}> change state</button>
            </div>
        );
    }
}
