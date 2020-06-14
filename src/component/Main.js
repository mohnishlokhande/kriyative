import React, {Component} from 'react';
import Header from './Header/Header';
import Pathways from './Pathways/Pathways';
import Methodology from './Methodology/Methodology';
import About  from './About/Aboutus';
import { Switch,Route, Redirect } from 'react-router-dom';

class Main extends Component {
    render(){
        return(
            <div>
                <Header />
                <About />
            </div>
        );
    }
}

export default Main;