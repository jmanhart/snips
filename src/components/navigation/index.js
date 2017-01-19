import React, { PropTypes, Component, StyleSheet } from 'react';
import {render} from 'react-dom';
import dynamics from 'dynamics.js';
import ReactDOM from 'react-dom';
import {
    open,
    close,
    btnOnAnimation,
    btnOffAnimation,
    btnIconOnAnimation,
    btnIconOffAnimation } from './../../lib/helpers'
import { Link } from 'react-router';
import s from './navigation-styles.css';

export default class Messenger extends Component{
    constructor() {
        super()
    }

    render(){
        return(
            <div className="navigation-container">
                <Link to="/">
                    <span className="navigation-head"> :) </span>
                </Link>
                <Link to="/msg">
                    <span className="navigation-label">messenger</span>
                </Link>
                <Link to="/cards">
                    <span className="navigation-label">cards</span>
                </Link>
            </div>
        )
    }
}


export const styles = Object.create({


});
