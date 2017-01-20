import React, { PropTypes, Component } from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router';
import './../../styles/styles.css';

import Messenger from './../../components/messenger'

export default class MessageInteraction extends Component{
    render(){
        return(
            <div className="messenger-interaction">
                <Messenger />
            </div>
        )
    }
}
