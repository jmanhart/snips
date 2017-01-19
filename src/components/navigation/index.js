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
import s from './../../styles/home.style';

export default class Messenger extends Component{
    constructor() {
        super()
    }

    render(){
        return(
            <div>
                <h1> :) </h1>
                <Link to="/msg">
                    <p>msg</p>
                </Link>
            </div>
        )
    }
}


export const styles = Object.create({


});
