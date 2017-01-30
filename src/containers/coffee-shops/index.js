import React, { PropTypes, Component } from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router';
import './../../styles/styles.css';

import Cards from './../../components/cards'

export default class CoffeeShops extends Component{
    render(){
        return(
            <div className="cards-interaction">
                <Cards />
            </div>
        )
    }
}
