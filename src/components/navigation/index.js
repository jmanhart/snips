import React, { PropTypes, Component, StyleSheet } from 'react';
import {render} from 'react-dom';
import dynamics from 'dynamics.js';
import ReactDOM from 'react-dom';
import { navOnMount } from './helpers'
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router';
import './styles.css';

const ACTIVE = { background: 'rgba(0,0,0,0.2)'}

export default class Messenger extends Component{
    constructor() {
        super()
    }

    componentDidMount(){
        this.animateHead()
    }

    animateHead(){
        let el = ReactDOM.findDOMNode(this.refs.head)
        navOnMount(el)
    }

    render(){
        return(
            <div className="navigation-container">

                <Link activeClassName="is-active" onlyActiveOnIndex={true} to="/" >
                    <span className="navigation-head">
                        {/*
                            <i className="fa fa-male fa-2x" aria-hidden="true"></i>
                            <i className="fa fa-heart fa-2x" aria-hidden="true"></i>
                            */}
                        <i className="fa fa-smile-o fa-2x" aria-hidden="true"></i>
                    </span>
                </Link>

                <div className="internal-links">
                    <span className="navigation-label">
                        <Link activeClassName="is-active" to="/msg">
                            messenger
                        </Link>
                    </span>
                    <span className="navigation-label">
                        <Link activeClassName="is-active" to="/cobb">
                            cobb-connection
                        </Link>
                    </span>
                </div>

            </div>
        )
    }
}

{/*<span className="navigation-label">
    <Link activeClassName="is-active" to="/cards">
    cards
    </Link>
    </span>*/}

    {/*<div className="external-links">
        <span className="navigation-github">
        <a href="https://github.com/jmanhart/interactions">
        to github!
        </a>
        </span>
        </div>*/}


export const styles = Object.create({


});
