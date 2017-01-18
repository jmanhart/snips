import React, { PropTypes, Component, StyleSheet } from 'react';
import {render} from 'react-dom';
import dynamics from 'dynamics.js';
import ReactDOM from 'react-dom';
import { open, close, btnOnAnimation, btnOffAnimation, iconAnimation } from '../lib/helpers'
import { Link } from 'react-router';
import s from '../styles/home.style';

export default class Home extends Component{
    constructor() {
        super()
        this.state = {open: false, value:[]};
        this.handleSubmit = this.handleSubmit.bind(this)
        this.toggle = this.toggle.bind(this)
        this.open = this.open.bind(this)
        this.close = this.close.bind(this)
        this.buttonOn = this.buttonOn.bind(this)
    }

    handleSubmit(event){
        event.preventDefault();
        let val = this.refs.message.value;
        let messageArray = [
            ...this.state.value,
            val
        ]
        this.setState({value: messageArray});
        this.refs.message.value = ""
    }

    toggle(){
        this.setState({ open: !this.state.open})
        this.state.open ? this.close() : this.open();
        this.state.open ? this.buttonOff() : this.buttonOn();
    }

    open(e){
        console.log("open")
        let el = ReactDOM.findDOMNode(this.refs.logo)
        open(el)
    }

    close(e){
        console.log("close")
        let el = ReactDOM.findDOMNode(this.refs.logo)
        close(el)
    }

    buttonOn(e){
        console.log("dude")
        let el = ReactDOM.findDOMNode(this.refs.button)
        btnOnAnimation(el)
    }

    buttonOff(e){
        console.log("dude")
        let el = ReactDOM.findDOMNode(this.refs.button)
        btnOffAnimation(el)
    }


    render(){
        console.log(this.state.value)
        return(
            <div className="msgAll">
                <div className="msgContainer" >
                    <div className="msgContent" ref="logo">

                        <div className="profileContainer">
                            <div className="profileThumbnail">
                                <div className="thumbnailMask" />
                            </div>
                            <div className="profileInfo">
                                <h1>Logan Sparlin</h1>
                            </div>
                        </div>

                        <div className="messageContainer">
                            <div className="messageBlock">
                                <div>
                                {this.state.value.map(msg =>{
                                    return(
                                        <div className="msgWrapper">
                                            <p key={msg}>{msg}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        </div>

                        <div className="input">
                            <form
                                onSubmit={this.handleSubmit}>
                                <input
                                    ref="message"
                                    className="btnInput"
                                    placeholder="Send a message..."
                                    onSubmit={this.handleSubmit}
                                    />
                            </form>
                        </div>

                    </div>
                </div>
                <div className="msgButton">
                    <div className="test" ref="button" onClick={this.toggle}>
                        <div className="icon" ref="icon"/>
                    </div>
                </div>
            </div>
        )
    }
}


export const styles = Object.create({


});
