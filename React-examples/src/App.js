import React, { Component } from 'react'

import {  StrictMode } from 'react';
import './App.css';



// class Fields extends Component {
//   render() {
//     const styledField = {
//       width: '300px'
//     };

//     return <input 
//               placeholder="Type here" 
//               type='text' 
//               style={styledField}/>
//   }

// }

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 27,
      text: 'plus 1 for age',
      position:''
    }
  }


  nextYear = ()  =>{
    console.log('654699');
    this.setState(state => ({
      years: state.years + 1
    }))
  }
  
  commitChanges = (e, color) => {

    console.log(color);
    this.setState({
      position: e.target.value
    })
  }

render() {
      const {name, surname, link} = this.props;
      const {years, position} = this.state;
      return (
        <div>
          <button onClick={this.nextYear}>{this.state.text}</button> 
          <h1>My name is {name}, 
              surname - {surname}, 
              age - {years}, 
              position - {position}
          </h1>
            <a href={link}>My Link</a>
            <form>
              <span>Form</span>
              <input  
              type="text"
              onChange={(e) => this.commitChanges(e, 'some color')} />
            </form>
        </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <StrictMode>
        <WhoAmI name='Alex' surname="роппаak" link="facebook.com" />
        <WhoAmI name='Mari' surname="Gabchak" link="facebook.com" />
        {/* <WhoAmI name="Maria" name="Maria" surname="Gerot" link="facebook.com" /> */}
      </StrictMode>
      {/* <Fields/> */}
    
    </div>
  );
}


export default App;
