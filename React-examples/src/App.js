import React, { Component } from 'react'
import styled from 'styled-components';
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
const EmpItem = styled.div`
padding: 20px;
margin-bottom: 15px;
border-radius: 5px;
box-shadow: 5px 5px 10px #000;
`;

const Header =styled.h2`
font-size: 22px;
color: green;
`;
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
        <EmpItem>
          <Button onClick={this.nextYear}>{this.state.text}</Button> 
          <Header>My name is {name}, 
              surname - {surname}, 
              age - {years}, 
              position - {position}
          </Header>
            <a href={link}>My Link</a>
            <form>
              <span>Form</span>
              <input  
              type="text"
              onChange={(e) => this.commitChanges(e, 'some color')} />
            </form>
        </EmpItem>
    )
  }
}

const Wrapper = styled.div`
  width: 600px;
  margin: 80px auto;
`;

const Button = styled.button`
border-radius: 25px;
color: yellow;
background-color: blue;
`

function App() {
  return (
    <Wrapper>
      <StrictMode>
        <WhoAmI name='Alex' surname="роппаak" link="facebook.com" />
        <WhoAmI name='Mari' surname="Gabchak" link="facebook.com" />
        {/* <WhoAmI name="Maria" name="Maria" surname="Gerot" link="facebook.com" /> */}
      </StrictMode>
      {/* <Fields/> */}
    
    </Wrapper>
  );
}


export default App;
