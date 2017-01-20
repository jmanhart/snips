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
    btnIconOffAnimation,
    messengerOnMount,
 } from './../../lib/helpers'
import { Link } from 'react-router';
import './styles.css';

export default class Cards extends Component{
    constructor() {
        super()
    }

    render(){
        return(
            <div className="cards-container">
                <div className="card-one">
                    <div id="content">
                        <div className="card--container">
                            <div className="card--body">
                                <div className="card--content">
                                    <div className="dude" />
                                    <span className="card--title">This is a title and cool oh yeah great</span>
                                    <span className="card--author">By John Manhart</span>
                                </div>
                                <div className="card--meta">
                                    <span className="card--tag">750k</span>
                                    <span className="card--tag">works with This</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export const styles = Object.create({


});
