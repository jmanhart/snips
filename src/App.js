import React, { PropTypes, Component, StyleSheet } from 'react';
import {render} from 'react-dom';
import dynamics from 'dynamics.js';
import ReactDOM from 'react-dom';
import Interactive from 'react-interactive';
import { Link } from 'react-router';
import s from './styles/app.style';
import './styles/styles.css';

import Home from './containers/home'

import Navigation from './components/navigation'
import './components/navigation/styles.css'

const propTypes = {
  children: PropTypes.element.isRequired,
  routes: PropTypes.array.isRequired,
};

export default class App extends Component{
    render(){
        return(
            <div className="wrapper">
                <Navigation />
                <div id="content">
                    {this.props.children}
                </div>
                <div className="footer-container">
                    <span className="footer-sign-off">Say Hi! <span className="footer-email">manhartjohn@gmail.com</span></span>
                    <div>
                        <a href="https://github.com/jmanhart">
                            <i className="fa fa-github fa-1x footer-icon"></i>
                        </a>
                        <a href="https://codepen.io/jmanhart/">
                            <i className="fa fa-codepen fa-1x footer-icon"></i>
                        </a>
                        <a href="https://dribbble.com/manhart">
                            <i className="fa fa-dribbble fa-1x footer-icon"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/john-manhart/">
                            <i className="fa fa-linkedin fa-1x footer-icon"></i>
                        </a>
                        <a href="https://twitter.com/johnmanhart">
                            <i className="fa fa-twitter fa-1x footer-icon"></i>
                        </a>
                        <a href="https://angel.co/john-manhart">
                            <i className="fa fa-angellist fa-1x footer-icon" aria-hidden="true"></i>
                        </a>
                        <a href="http://stackoverflow.com/users/story/5644601">
                            <i className="fa fa-stack-overflow fa-1x footer-icon" aria-hidden="true"></i>
                        </a>
                        <a href="https://www.instagram.com/johnmanhart/">
                            <i className="fa fa-instagram fa-1x footer-icon" aria-hidden="true"></i>
                        </a>
                        <a href="https://www.facebook.com/john.manhart.3">
                            <i className="fa fa-facebook fa-1x footer-icon" aria-hidden="true"></i>
                        </a>
                        <a href="https://medium.com/@JohnManhart">
                            <i className="fa fa-medium fa-1x footer-icon" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
App.propTypes = propTypes;
