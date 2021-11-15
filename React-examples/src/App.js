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
      text: 'plus 1 for age'
    }
  }


  nextYear = () => {
    console.log('654699');
    this.setState(state => ({
      years: state.years + 1
    }))
  }
  
  commit = (e) => {
    console.log(e.target)
  }
render() {
      const {name, surname, link} = this.props;
      return (
        <div>
          <button onClick={this.nextYear}>{this.state.text}</button> 
          <h1>My name is {name}, surname - {surname}, age - {this.state.years}
            </h1>
            <a href={link}>My Link</a>
            <form>
              <span>Form</span>
              <input  
              type="text"
            onChange={this.commit} />
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
