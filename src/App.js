import React, {Component} from 'react';
import './App.css';
import Main from './component/Main';
import { BrowserRouter } from 'react-router-dom';


class App extends Component{

  render(){
    return(
        <div className="App">
          <Main></Main>
        </div>
    );
  }
}
export default App;
