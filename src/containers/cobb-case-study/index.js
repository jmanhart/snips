import React, { PropTypes, Component } from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router';
import './../../styles/styles.css';

import Cards from './../../components/cards'
import './styles.css'


const imgPath = "https://jmanhart.github.io/cobb-connection-case-study/images/"

export default class CardsInteraction extends Component{
    render(){
        return(
            <div className="cards-interaction">
                <div className="hero--block">
                    <div className="hero__image">
                    <img src="https://jmanhart.github.io/interactions/src/public/images/cobb-case-study/hero-angled.png"/>
                    </div>
                </div>

                <div className="copy--content">

                    {/*Intro and lead in*/}
                    <div className="copy--block">
                        <span className="copy__body">
                            Cobb-Vantress is the global leader in research and development for poultry. Cobb challeneged the team at Marlin to streamline their exisiting app to a more flexabile Stack and improve the user's experience.
                        </span>
                        <ul>
                            <span className="copy__subheader">Major requests from Client:</span>
                            <li className="copy__bullet">User Experience Update</li>
                            <li className="copy__bullet">Creating a custom Content Managment System</li>
                            <li className="copy__bullet">Adding content language support</li>
                            <li className="copy__bullet">Updating User Analytics</li>
                            <li className="copy__bullet">Create three custom tools for the user</li>
                            <li className="copy__bullet">Improve app lifecycle and release schedule</li>
                        </ul>
                    </div>

                    {/*Tools used and Team
                    <div className="copy--block">
                        <span className="copy__header">Tools</span>
                        <hr/>
                        <span className="copy__subheader">Design:</span>
                        <span className="copy__body">
                            Sketch, Framer, Invision, White Board Sketching, and lots of Paper & Pencil.
                        </span>

                        <span className="copy__subheader">Developing:</span>
                        <span className="copy__body">
                            React-Native, Xcode, Atom, and Source Tree
                        </span>

                        <span className="copy__subheader">Communications:</span>
                        <span className="copy__body">
                            JIRA, Slack, Agile, and Scrum
                        </span>
                    </div>*/}

                    <div className="image--block--full">
                        <div className="block__image">
                            <img src="https://jmanhart.github.io/cobb-connection-case-study/images/sketch-random.jpg"/>
                        </div>
                        <span className="image__label">These are sketch's of Components</span>
                    </div>

                    <div className="image--block--contain">
                        <img src="https://jmanhart.github.io/cobb-connection-case-study/images/wires-guides.jpg"/>
                        <span className="image__label"> This is an Image label yay</span>
                    </div>

                    <div className="copy--block">
                        <span className="copy__header">This is a header</span>
                        <span className="copy__subheader">This is a SubHeader:</span>
                        <span className="copy__body">
                            Woke vegan raclette flannel, banh mi shoreditch occupy readymade af crucifix pop-up ramps fingerstache keffiyeh post-ironic. Post-ironic biodiesel four dollar toast mustache, whatever wolf poke tofu +1 ethical. Cronut pok pok small batch, sriracha food truck leggings beard deep v pop-up meditation echo park. Food truck blog mumblecore air plant flexitarian umami. Chambray ramps snackwave, thundercats street art gentrify 3 wolf moon DIY. Chillwave DIY occupy cliche stumptown affogato. Mlkshk fap tousled, humblebrag next level waistcoat chicharrones etsy shoreditch.
                        </span>
                    </div>

                    <div className="image--block--full">
                        <div className="image__fpo" />
                        <span className="image__label"> This is an Image label yay</span>
                    </div>
                </div>

            </div>
        )
    }
}
