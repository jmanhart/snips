import React, { PropTypes, Component } from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router';
import s from './styles/app.style';



export default class Work extends Component{
    render(){
        return(
            <div style={s.root}>
                <h1 style={s.title}>Its Going good! yay</h1>
            </div>
        )
    }
}
