import { Component } from 'react';
import './App.css';
import Main from './Main';
class App extends Component {

  render() {
    return (
      <div className="App">
      <h1 className="title" style='leftIndent'>Heroes and Villains</h1>
      <Main />
      </div>
    );
  }
}

let leftIndent = {
  marginLeft: '1em'
}

export default App;