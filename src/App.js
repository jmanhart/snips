import React, { PropTypes, Component } from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router';
import s from './styles/app.style';

const propTypes = {
  children: PropTypes.element.isRequired,
  routes: PropTypes.array.isRequired,
};

export default class App extends Component{
    render(){
        return(
            <div style={s.root}>
                <h1 style={s.title}>Its Going good! yay</h1>
                {this.props.children}
            </div>
        )
    }
}
App.propTypes = propTypes;
