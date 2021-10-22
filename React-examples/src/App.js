import { Component, StrictMode } from 'react';
import './App.css';

const Header = () => {
  return <h2>Hello World</h2>
}

const  Field = () => {
  return <input placeholder="Type here" type='text'/>
}

functi

function App() {
  return (
    <div className="App">
      <StrictMode>
        <Header/>
      </StrictMode>
      <Field/>
    </div>
  );
}

export default App;
