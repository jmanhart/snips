import React, { PropTypes, Component } from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router';
import './styles.css';

const data = [
    {
        "title": "Block One",
        "subText": "This is a snippet of copy that goes with above",
    },
	{
		"title": "Block Two",
        "subText": "This is a snippet of copy that ",
	},
	{
		"title": "Block three",
        "subText": "This is a snippet of ",
	},
    {
        "title": "Block three",
        "subText": "This is a snippet of ",
    },
]


export default class Home extends Component{
    render(){
        return(
            <div className="hero-container">
                <div className="hero-content">
                    {/*{data.map((item) => {
                        return (
                            <div className="hero-card-container">
                                <div className="hero-card-content">

                                </div>
                                <span className="card-label" key={item.title}>{item.title}</span>
                            </div>
                        )
                    })}*/}
                </div>
            </div>
        )
    }
}
