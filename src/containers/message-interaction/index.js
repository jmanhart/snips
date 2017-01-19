import React, { PropTypes, Component } from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router';
import s from './../../styles/app.style';

import Messenger from './../../components/messenger'

export default class MessageInteraction extends Component{
    render(){
        return(
            <div>
                <Messenger />
            </div>
        )
    }
}
