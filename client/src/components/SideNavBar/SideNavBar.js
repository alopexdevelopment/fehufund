import React from 'react';
import './SideNavBar.css';
import FehuLogo from './fehu-logo-front.png';
import { Link } from "react-scroll";
import { connect } from 'react-redux';


class SideNavBar extends React.Component {
    handleMouseOverLink = (name) => {
        if (this.props.navLinkStatus[name] === false) {
            this.props.updateNavLinkStatus(name, true);
        } else {
            this.props.updateNavLinkStatus(name, false);
        }
    };

    render() {
        const sideNavBarOpen = this.props.sideNavBarOpen.sideNavBarOpen;
        const currentTitle = this.props.currentTitle.currentTitle;

        return (
            <div className={!sideNavBarOpen ? "side-nav-bar-wrapper close-side-nav-bar":"side-nav-bar-wrapper"}>
                <div className={!sideNavBarOpen ? "side-nav-bar-container hide":"side-nav-bar-container show"}>
                    <div>
                        <div className="link-wrapper" onMouseEnter={() => {this.handleMouseOverLink("home")}} onMouseLeave={() => {this.handleMouseOverLink("home")}}>
                            <div className="link-container home">
                                <Link  
                                    to="home-anchor" 
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}>
                                        HOME
                                </Link>
                                <span className={(this.props.navLinkStatus.home || currentTitle === "HOME") ? "strike-out":""}></span>
                            </div>
                        </div>
                        <div className="link-wrapper" onMouseEnter={() => {this.handleMouseOverLink("about")}} onMouseLeave={() => {this.handleMouseOverLink("about")}}>
                            <div className="link-container about">
                                <Link  
                                    to="about-anchor" 
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}>
                                    ABOUT
                                </Link>
                                <span className={(this.props.navLinkStatus.about || currentTitle === "ABOUT") ? "strike-out":""}></span>
                            </div>
                        </div>
                        <div className="link-wrapper" onMouseEnter={() => {this.handleMouseOverLink("team")}} onMouseLeave={() => {this.handleMouseOverLink("team")}}>
                            <div className="link-container team">
                                <Link 
                                    to="team-anchor" 
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}>
                                    TEAM
                                </Link>
                                <span className={(this.props.navLinkStatus.team || currentTitle === "TEAM") ? "strike-out":""}></span>
                            </div>
                        </div>
                        <div className="link-wrapper" onMouseEnter={() => {this.handleMouseOverLink("contact")}} onMouseLeave={() => {this.handleMouseOverLink("contact")}}>
                            <div className="link-container contact">
                                <Link 
                                    to="contact-anchor" 
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}>
                                    CONTACT
                                </Link>
                                <span className={(this.props.navLinkStatus.contact || currentTitle === "CONTACT") ? "strike-out":""}></span>
                            </div>
                        </div>  
                    </div>  
                    <div className="side-nav-logo-container">
                    <Link  
                        to="home-anchor" 
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}>
                        <img src={ FehuLogo } alt="Fehu Fund Logo"></img>
                    </Link>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(SideNavBar);