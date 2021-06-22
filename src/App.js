import React from 'react';
import './App.css';

class Example extends React.Component {
  render(){
    return(
      
     <div>
       some text 
       <element />
     </div>
    )
  }
}

class App extends React.Component {
render(){
  return (
    <div className="App">
     <h2>Hello, world!</h2>
     <Example/>
    </div>
  );
}
}

export default App;
