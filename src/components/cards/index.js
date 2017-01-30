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

const data = [
    {
        "name": "The Coffee Ethic",
        "rating": "★★★★☆",
        "location": [
            {"city":"Springfield"},
            {"state":"Missouri"},
        ],
    },
]

export default class Cards extends Component{
    constructor() {
        super()
    }

    render(){
        return(
            <div className="cards-container">
                <div className="card-one">
                    <div id="content">

                        {data.map((item, index) => {
                            return (
                                <div className="hero-card-container">
                                    <span className="card-label">{item.name}</span>
                                    <span className="card-label">{item.rating}</span>
                                    <span className="card-label" key={item.location.city}>{item.location.city}</span>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        )
    }
}


export const styles = Object.create({


});
