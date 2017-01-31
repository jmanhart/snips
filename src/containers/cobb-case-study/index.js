import React, { PropTypes, Component, StyleSheet } from 'react';
import {render} from 'react-dom';
import dynamics from 'dynamics.js';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import Video from 'react-html5video';
import './../../styles/styles.css';
import {
    studyOnMount,
 } from './../../lib/helpers'

import Cards from './../../components/cards'
import './styles.css'


const imgPath = "https://jmanhart.github.io/cobb-connection-case-study/images/"

export default class CobbCaseStudy extends Component{

    constructor() {
        super()
    }

    componentDidMount(){
        this.dude()
    }

    dude(e){
        let el = ReactDOM.findDOMNode(this.refs.study)
        studyOnMount(el)
    }

    render(){
        return(
            <div className="cobb-case-study">
                <div className="animated__wrapper" >

                    <div className="hero--block">
                        <div className="hero__image">
                            <img src="https://jmanhart.github.io/interactions/src/public/images/cobb-case-study/hero-angled.png"/>
                        </div>
                    </div>

                    <div className="copy--content">

                        <div className="copy--block">
                            <span className="copy__header">Cobb-Connection 2.0 Case Study</span>
                            <hr/>
                            <span className="copy__body">
                                Cobb-Vantress is the global leader in poultry research and development. They rely heavily on their native phone application to inform their customers. Cobb tasked the team at Marlin to re-build their app which included a new Development Stack and UX/UI ideation.
                            </span>
                        </div>

                        {/*Reserach on exsiting app*/}
                        <div className="copy--block">
                            <span className="copy__header">Research & Audit of Exsisting App</span>
                            <hr/>
                            <span className="copy__body">
                                Our first task was a total experience audit of the exsisting App. We started by mapping out all the flows, analyzing analytics, and collecting the existing graphics and styles. With this information we came to some conclusions regarding UX and adoption.
                                <ol>
                                    <li>
                                        <span className="copy__bullet">UI Language Selection</span> – The most glaring broken feature was requiring the user to select their language on every App open. This created a very un-nessecary bottle neck for every User every time.
                                    </li>
                                    <li>
                                        <span className="copy__bullet">App structure</span> – The App's structure was very rigid and dependent on numerous naviagtion loops, such as back arrows, and entire resets when navigating to a new section of the App.
                                    </li>
                                    <li>
                                        <span className="copy__bullet">Content Structure</span> – The existing app was dependent on very rigid containers for content. It had to many specific categories that yeiled few if any results.
                                    </li>
                                    <li>
                                        <span className="copy__bullet">Content Filtering</span> – Adding the ability for rapid filtering and serving content was essential with the new direction of the App.
                                    </li>
                                    <li>
                                        <span className="copy__bullet">Tools</span> – Creating a style and set of actions for tools and improving the usability.
                                    </li>
                                </ol>
                            </span>
                            <div className="image--block--contain">
                                <img src="https://jmanhart.github.io/interactions/src/public/images/cobb-case-study/wires-old-app.jpg"/>
                                <span className="image__label">User Map of Exisiting App</span>
                            </div>
                            <span className="copy__close"> * * * </span>
                        </div>

                        {/*UI Language Selection*/}
                        <div className="copy--block">
                            <span className="copy__header">UX Phase</span>
                            <hr/>
                            <span className="copy__subheader">Improving the UI Language Selection</span>
                            <span className="copy__body">
                                First, step in solving the problem was defaulting the Users language to their native phone language. Second we created the ability for the User to change their UI language by adding a method in the navigation bar to do so on any page.
                            </span>
                            <div className="image--block--contain">
                                <img src="https://jmanhart.github.io/interactions/src/public/images/cobb-case-study/wires-lang.jpg"/>
                                <span className="image__label">UI language selection wireframe</span>
                            </div>
                            <div className="video--block--contain">
                                <Video autoPlay loop muted
                                     height="500px">
                                    <source src="https://jmanhart.github.io/interactions/src/public/images/cobb-case-study/videos/vid-proto-lang.mov" type="video/mp4" />
                                </Video>
                            </div>
                        </div>

                        {/* New Architecture -----------------------------*/}
                        <div className="copy--block">
                            <span className="copy__subheader">Refining Content Structure</span>
                            <span className="copy__body">
                                After dissecting the content of the application and abiding by the Apple and Google HIG, we arrived at adopting a bottom tab navigation structure. This gives the user the ability to serve desired content with great ease and on their own terms.
                            </span>
                            <div className="image--block--contain">
                                <img src="https://jmanhart.github.io/interactions/src/public/images/cobb-case-study/sketch-random.jpg"/>
                                <span className="image__label">Refining Content Structure</span>
                            </div>
                            <div className="image--block--contain">
                                <img src="https://jmanhart.github.io/interactions/src/public/images/cobb-case-study/wires-all.jpg"/>
                                <span className="image__label">Wireframes of all Content</span>
                            </div>
                        </div>

                        {/* New Naviagtion -----------------------------*/}
                        <div className="copy--block">
                            <span className="copy__subheader">Developing the new Naviagtion System</span>
                            <span className="copy__body">
                                Exploring different layouts and functionality on the new bottom navigation. Options ranging from two, three, and four tab styles were explored.
                            </span>
                            <div className="image--block--contain">
                                <img src="https://jmanhart.github.io/interactions/src/public/images/cobb-case-study/wires-tabs.jpg"/>
                                <span className="image__label">Exploring Different Tab Solutions</span>
                            </div>
                            <div className="video--block--contain">
                                <Video autoPlay loop muted
                                    poster="http://sourceposter.jpg" height="500px">
                                    <source src="https://jmanhart.github.io/interactions/src/public/images/cobb-case-study/videos/vid-proto-tabs.mov" type="video/mp4" />
                                </Video>
                            </div>
                        </div>


                        {/*Content Filtering*/}
                        <div className="copy--block">
                            <span className="copy__subheader">Developing Content Filtering</span>
                            <span className="copy__body">
                                Adding the ability to filter cobb's ever growing library of guides helped in establishing the new structure of the app. Allowing for filtering helped ease the previous app's immense complexity concerning hard stops and repetitive loops.
                            </span>
                            <div className="image--block--contain">
                                <img src="https://jmanhart.github.io/interactions/src/public/images/cobb-case-study/sketch-filtering.jpg"/>
                                <span className="image__label">Early filtering functionality</span>
                            </div>
                            <div className="image--block--contain">
                                <img src="https://jmanhart.github.io/interactions/src/public/images/cobb-case-study/wires-guide-lang.jpg"/>
                                <span className="image__label">Lo-fi filtering prototype</span>
                            </div>
                            <div className="video--block--contain">
                                <Video autoPlay loop muted
                                    height="500px">
                                    <source src="https://jmanhart.github.io/interactions/src/public/images/cobb-case-study/videos/vid-proto-guide.mov" type="video/mp4" />
                                </Video>
                            </div>
                        </div>

                        {/*Creating User Tools*/}
                        <div className="copy--block">
                            <span className="copy__subheader">User Tools for Production</span>
                            <span className="copy__body">
                                Another request from the client was to create and establish a set of tools to aid their clients. Consistency was our main goal here as a team, and having a pleasant experience for the user.
                            </span>
                            <div className="image--block--contain">
                                <img src="https://jmanhart.github.io/interactions/src/public/images/cobb-case-study/sketch-one.jpg"/>
                            </div>
                            <div className="image--block--contain">
                                <img src="https://jmanhart.github.io/interactions/src/public/images/cobb-case-study/wires-tools.jpg"/>
                                <span className="image__label">Tool wireframes</span>
                            </div>
                            <span className="copy__close"> * * * </span>
                        </div>


                        <div className="copy--block">
                            <span className="copy__header">UI Phase</span>
                            <hr/>
                            <span className="copy__body">
                                The final 2.0 version of the updated app before entering development and QA.
                            </span>
                            <div className="image--block--contain">
                                <img src="https://jmanhart.github.io/interactions/src/public/images/cobb-case-study/design-filtering.png"/>
                            </div>
                        </div>

                        <div className="image--block--full">
                            <img src="https://jmanhart.github.io/interactions/src/public/images/cobb-case-study/design-products-trio.jpg"/>
                            <img src="https://jmanhart.github.io/interactions/src/public/images/cobb-case-study/design-products-trio.jpg"/>
                        </div>

                        <div className="hero--block--end">

                            <span className="copy__footer">
                                Check it out in the wild!
                            </span>
                            <div className="hero__cta">
                                <div className="external-links">
                                    <span className="navigation-github">
                                        <a href="https://itunes.apple.com/us/app/cobb-connection/id688161665?mt=8">
                                            <i className="fa fa-apple" aria-hidden="true"></i>
                                        </a>
                                    </span>
                                </div>
                                <div className="external-links">
                                    <span className="navigation-github">
                                        <a href="https://play.google.com/store/apps/details?id=com.cobbvantress.cobbconnection">
                                            <i className="fa fa-google" aria-hidden="true"></i>
                                        </a>
                                    </span>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}


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
</div>

<div className="image--block--full">
    <div className="block__image">
        <img src="https://jmanhart.github.io/interactions/src/public/images/cobb-case-study/wires-old-app.jpg"/>
    </div>
    <span className="image__label">These are sketch's of Components</span>
</div>

<div className="image--block--contain">
    <img src="https://jmanhart.github.io/interactions/src/public/images/cobb-case-study/wires-old-app.jpg"/>
    <span className="image__label"> This is an Image label yay</span>
</div>*/}

{/*
<ul>
<span className="copy__subheader">Major requests from Client:</span>
<li className="copy__bullet">User Experience Update</li>
<li className="copy__bullet">Creating a custom Content Managment System</li>
<li className="copy__bullet">Adding content language support</li>
<li className="copy__bullet">Updating User Analytics</li>
<li className="copy__bullet">Create three custom tools for the user</li>
<li className="copy__bullet">Improve app lifecycle and release schedule</li>
</ul>
<ul>
<span className="copy__subheader">Areas for drastic changes:</span>
<li className="copy__bullet">New Navigation Solution</li>
<li className="copy__bullet">Content re-structure</li>
<li className="copy__bullet">UI Language Selection</li>
<li className="copy__bullet">Content Filtering</li>
<li className="copy__bullet">Creating User Tools</li>
</ul>
*/}

{/*                    <span className="copy__hero">
                        Cobb-Connection Case Study
                    </span>
                    <div className="hero__cta">
                        <div className="external-links">
                            <span className="navigation-github">
                            <a href="https://itunes.apple.com/us/app/cobb-connection/id688161665?mt=8">
                            <i className="fa fa-apple" aria-hidden="true"></i>
                            </a>
                            </span>
                        </div>
                        <div className="external-links">
                            <span className="navigation-github">
                            <a href="https://play.google.com/store/apps/details?id=com.cobbvantress.cobbconnection">
                            <i className="fa fa-google" aria-hidden="true"></i>
                            </a>
                            </span>
                        </div>
                    </div>


                    <div className="copy--block">
                        <span className="copy__intro">
                            Cobb-Vantress is the global leader in research and development for poultry. Cobb challeneged the team at Marlin to streamline their exisiting app to a more flexabile Stack and improve the user's experience.
                        </span>
                    </div>

                    */}
