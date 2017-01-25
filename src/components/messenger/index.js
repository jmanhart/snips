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
import s from './styles.css';

export default class Messenger extends Component{
    constructor() {
        super()
        this.state = {open: false, value:[]};
        this.handleSubmit = this.handleSubmit.bind(this)
        this.toggle = this.toggle.bind(this)
        this.open = this.open.bind(this)
        this.close = this.close.bind(this)
        this.buttonOn = this.buttonOn.bind(this)
        this.btnIconOn = this.btnIconOn.bind(this)

    }

    componentDidMount(){
        this.animateMessenger()
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

    animateMessenger(){
        let el = ReactDOM.findDOMNode(this.refs.buttonDot)
        messengerOnMount(el)
    }

    toggle(){
        this.setState({ open: !this.state.open})
        this.state.open ? this.close() : this.open();
        this.state.open ? this.buttonOff() : this.buttonOn();
        this.state.open ? this.btnIconOff() : this.btnIconOn();
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

    btnIconOn(e){
        let el = ReactDOM.findDOMNode(this.refs.btnIcon)
        btnIconOnAnimation(el)
    }

    btnIconOff(e){
        let el = ReactDOM.findDOMNode(this.refs.btnIcon)
        btnIconOffAnimation(el)
    }


    render(){
        console.log(this.state.value)
        return(
            <div className="messenger-content">
                <div className="msgAll" ref="buttonDot">
                    <div className="msgContainer">
                        <div className="msgContent" ref="logo">

                            <div className="profileContainer">
                                <div className="profileInfo">
                                    <span className="msgRecipent">Logan Sparlin</span>
                                </div>
                            </div>

                            <div className="messageContainer">
                                <div className="messageBlock">
                                    {this.state.value.map(msg =>{
                                        return(
                                            <div className="msgWrapper">
                                                <span
                                                    className="msgText"
                                                    key={msg}>{msg}
                                                </span>
                                            </div>
                                        )
                                    })}
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
                    <div className="msgButton" >
                        <div className="test" ref="button" onClick={this.toggle}>
                            <div className="icon" ref="btnIcon"/>
                        </div>
                        <span className="copy__prompt"> *Click, type, return, and watch!*</span>
                        {/*<i className="fa fa-hand-o-down" aria-hidden="true"></i>*/}
                    </div>
                </div>
            </div>
        )
    }
}


export const styles = Object.create({


});
