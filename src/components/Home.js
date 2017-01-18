import React, { PropTypes, Component, StyleSheet } from 'react';
import {render} from 'react-dom';
import dynamics from 'dynamics.js';
import ReactDOM from 'react-dom';
import { open, close } from '../lib/helpers'
import { Link } from 'react-router';
import s from '../styles/home.style';

export default class Home extends Component{
    constructor() {
        super()
        this.state = {
            open: false
        }
        this.open = this.open.bind(this)
        this.close = this.close.bind(this)
        this.toggle = this.toggle.bind(this)
    }

    toggle(){
        this.state.open ? this.close() : this.open();
        this.setState({ open: !this.state.open})
    }

    open(e){
        let el = ReactDOM.findDOMNode(this.refs.logo)
        console.log("open")
        open(el)
    }

    close(e){
        let el = ReactDOM.findDOMNode(this.refs.logo)
        console.log("close")
        close(el)
    }

    render(){
        return(
            <div className="msgAll">
                <div className="msgContainer" >
                    <div className="msgContact" ref="logo">
                        <p>Hi, EB!</p>
                    </div>
                </div>
                <div className="msgButton">
                    <div className="test" onClick={this.toggle} />
                </div>
            </div>
        )
    }
}


export const styles = Object.create({


});
