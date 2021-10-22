import React from 'react';
import { Component, StrictMode } from 'react';
import './App.css';

const Header = () => {
  return <h2>Hello World</h2>
}

// const  Field = () => {
//   const styledField = {
//     width: '300px'
//   };
//   return <input 
//     placeholder="Type here" 
//     type='text' 
//     style={styledField}/>
// }

function Btn() {
  const text = () =>{
    return "Log in";
  } 
  const p = true;
  return <button>{p ? "Enter" : text()}</button> 
}

class Fields extends Component {
  render() {
    const styledField = {
      width: '300px'
    };

    return <input 
              placeholder="Type here" 
              type='text' 
              style={styledField}/>
  }

}

function App() {
  return (
    <div className="App">
      <StrictMode>
        <Header/>
      </StrictMode>
      <Fields/>
      <Btn/>
    </div>
  );
}

export {Header};
export default App;
