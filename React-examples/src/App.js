import React from 'react';
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

function WhoAmI({name, surname, link}) {
  return (
    <div>
      <h1>My name is {name.first}, surname - {surname} 
        </h1>
        <a href={link}>My Link</a>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <StrictMode>
        <WhoAmI name={{first: 'Alex'}} surname="Habchak" link="facebook.com" />
        {/* <WhoAmI name="Maria" surname="Gerot" link="facebook.com" /> */}
      </StrictMode>
      {/* <Fields/> */}
    
    </div>
  );
}


export default App;
