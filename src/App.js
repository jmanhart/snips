import React, { PropTypes, Component, StyleSheet } from 'react';
import {render} from 'react-dom';
import dynamics from 'dynamics.js';
import ReactDOM from 'react-dom';
import Interactive from 'react-interactive';
import { Link } from 'react-router';
import s from './styles/app.style';
import './styles/styles.css';

import Navigation from './components/navigation'

const propTypes = {
  children: PropTypes.element.isRequired,
  routes: PropTypes.array.isRequired,
};

export default class App extends Component{
    render(){
        return(
            <div className="wrapper">
                <Navigation />
                {this.props.children}
            </div>
        )
    }
}
App.propTypes = propTypes;
