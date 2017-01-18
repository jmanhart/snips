import React, { PropTypes, Component } from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router';
import s from './styles/app.style';

import Home from ''

export default class Work extends Component{
    render(){
        return(
            <div style={s.root}>
                <Home />
            </div>
        )
    }
}
