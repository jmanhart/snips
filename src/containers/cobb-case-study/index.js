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
                        <span className="copy__hero">
                            Cobb-Connection Case Study
                        </span>
                    </div>

                    <div className="copy--content">

                        <div className="copy--block">
                            <span className="copy__header">Understanding Cobb</span>
                            <hr/>
                            <span className="copy__body">
                                Cobb-Vantress is the global leader in poultry research and production, with that clients span across the globe. Having offline accesse to their roubust library of artciles, guides, and tools is a must. This requires a native application that must be supported on iOS and Android. Cobb tasked the team at Marlin to re imagine their exsisting app from the ground up to better help their needs. This re-build included a new Development Stack & Cycle and UX/UI ideation.
                            </span>
                        </div>

                        {/*Reserach on exsiting app*/}
                        <div className="copy--block">
                            <span className="copy__header">Research & Audit of Exsisting App</span>
                            <hr/>
                            <span className="copy__body">
                                The first course of action was a total experience audit of the exsisting Application. We started by mapping out all the flows of the App, analyzing analytics, and collecting the exsising graphics and styles. With this information we came to some conclusions regarding UX and adoption.
                                <ol>
                                    <li>
                                        <span className="copy__bullet">UI Language Selection</span> – The most glaring broken feature was requiring the user to select their language on every App open this creates a very un-nessecary bottle neck for every User every time.
                                    </li>
                                    <li>
                                        <span className="copy__bullet">App structure</span> – The App structure was very rigid and dependent on numerous naviagtion loops, such as back arrows, and entire resets when navigating to a new section.
                                    </li>
                                    <li>
                                        <span className="copy__bullet">Content Structure</span> – The exisiting app was dependent on very rigid buckets for content. It had to many catagories that yeiled few if any results.
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
                                The most glaring problem with the previous interation of the App was the User having to select the their language on App load. First we solved this problem was to default the Users language to their native phone language. Second we allowed created the ability for the User to change their UI language by adding a method in the Top Navigation bar to do so on any page.
                            </span>
                            <div className="image--block--contain">
                                <img src="https://jmanhart.github.io/interactions/src/public/images/cobb-case-study/wires-lang.jpg"/>
                                <span className="image__label">UI language selection wireframe</span>
                            </div>
                            <div className="video--block--contain">
                                <Video autoPlay loop muted
                                    poster="http://sourceposter.jpg" height="500px">
                                    <source src="https://jmanhart.github.io/interactions/src/public/images/cobb-case-study/videos/vid-proto-lang.mov" type="video/mp4" />
                                </Video>
                            </div>
                        </div>

                        {/* New Naviagtion -----------------------------*/}
                        <div className="copy--block">
                            <span className="copy__subheader">Developing the new Naviagtion System</span>
                            <span className="copy__body">
                                Woke vegan raclette flannel, banh mi shoreditch occupy readymade af crucifix pop-up ramps fingerstache keffiyeh post-ironic. Post-ironic biodiesel four dollar toast mustache, whatever wolf poke tofu +1 ethical. Cronut pok pok small batch, sriracha food truck leggings beard deep v pop-up meditation echo park. Food truck blog mumblecore air plant flexitarian umami. Chambray ramps snackwave, thundercats street art gentrify 3 wolf moon DIY. Chillwave DIY occupy cliche stumptown affogato. Mlkshk fap tousled, humblebrag next level waistcoat chicharrones etsy shoreditch.
                            </span>
                            <div className="image--block--contain">
                                <img src="https://jmanhart.github.io/interactions/src/public/images/cobb-case-study/wires-tabs.jpg"/>
                                <span className="image__label">Exploring Different Tab Navigation Solutions</span>
                            </div>
                            <div className="video--block--contain">
                                <Video autoPlay loop muted
                                    poster="http://sourceposter.jpg" height="500px">
                                    <source src="https://jmanhart.github.io/interactions/src/public/images/cobb-case-study/videos/vid-proto-tabs.mov" type="video/mp4" />
                                </Video>
                            </div>
                        </div>

                        {/* New Architecture -----------------------------*/}
                        <div className="copy--block">
                            <span className="copy__subheader">Refining Content Structure</span>
                            <span className="copy__body">
                                The exsiting consisted of many hard stops concering navigation. On each load the user would select their language and move on to a nother page to filter down to their desired content. We decided to go with the [APPLE] and [GOOGLE] standard model of using a bottm tabbed navigation model to allow for ease and quick navigation.
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

                        {/*Content Filtering*/}
                        <div className="copy--block">
                            <span className="copy__subheader">Developing Content Filtering</span>
                            <span className="copy__body">
                                Cobb has an ever growing library of hundrends of guides for their customers, and adding the ability to filter and serve content was a must.
                            </span>
                            <div className="image--block--contain">
                                <img src="https://jmanhart.github.io/interactions/src/public/images/cobb-case-study/sketch-filtering.jpg"/>
                                <span className="image__label">Inital Sketchs of Filtering Functionality</span>
                            </div>
                            <div className="image--block--contain">
                                <img src="https://jmanhart.github.io/interactions/src/public/images/cobb-case-study/wires-guide-lang.jpg"/>
                                <span className="image__label">UI language selection wireframe</span>
                            </div>
                            <div className="video--block--contain">
                                <Video autoPlay loop muted
                                    poster="http://sourceposter.jpg" height="500px">
                                    <source src="https://jmanhart.github.io/interactions/src/public/images/cobb-case-study/videos/vid-proto-guide.mov" type="video/mp4" />
                                </Video>
                            </div>
                        </div>

                        {/*Creating User Tools*/}
                        <div className="copy--block">
                            <span className="copy__subheader">User Tools for Production</span>
                            <span className="copy__body">
                                Woke vegan raclette flannel, banh mi shoreditch occupy readymade af crucifix pop-up ramps fingerstache keffiyeh post-ironic. Post-ironic biodiesel four dollar toast mustache, whatever wolf poke tofu +1 ethical. Cronut pok pok small batch, sriracha food truck leggings beard deep v pop-up meditation echo park. Food truck blog mumblecore air plant flexitarian umami. Chambray ramps snackwave, thundercats street art gentrify 3 wolf moon DIY. Chillwave DIY occupy cliche stumptown affogato. Mlkshk fap tousled, humblebrag next level waistcoat chicharrones etsy shoreditch.
                            </span>
                            <div className="image--block--contain">
                                <img src="https://jmanhart.github.io/interactions/src/public/images/cobb-case-study/sketch-one.jpg"/>
                            </div>
                            <div className="image--block--contain">
                                <img src="https://jmanhart.github.io/interactions/src/public/images/cobb-case-study/wires-tools.jpg"/>
                                <span className="image__label">Wireframes of the three tools</span>
                            </div>
                            <span className="copy__close"> * * * </span>
                        </div>


                        <div className="copy--block">
                            <span className="copy__header">UI Phase</span>
                            <hr/>
                            <span className="copy__body">
                                First course of actions was an experience audit of the current Cobb-Connection App.
                                The current UX solution was very chaotic and not consistent. There was no style guide concering images or type, and as a whole felt very disjointed and confusing. The User would encountered many hard stops requiring an action and multiple levels of naviagtion that required multiple steps back.
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
