import React from 'react';
import './About.css';
import Banner from './../Banner/Banner';
import FehuLogo from './fehu-logo-front.png';


class About extends React.Component {
    aboutRef = React.createRef();

    componentWillUpdate(nextProps){
        const nextPath = nextProps.currPath;
        const currPath = this.props.currPath;

        if (currPath !== nextPath) {
            this.props.history.push(nextPath);
        }
    }

    componentDidMount() {
        setTimeout(() => {
            const pixelLocations = this.aboutRef.current.getBoundingClientRect();
            this.props.assignComponentPosition('aboutPos', pixelLocations.top);
        }, 500)
    }

    sectionClicked = () => {
        if (this.props.sideNavBarOpen) {
         this.props.updateSideNavBarOpen();
        } 
    }
    
    render(){
        return (
            <div className={this.props.transitioning ? "about-wrapper close":"about-wrapper"} ref={this.aboutRef} onClick={this.sectionClicked}>
                <div id="about-anchor"></div>
                <div className="about-container">
                    <div className="about-quote-wrapper">
                        <div className="about-quote-container">
                            <p>"Discovering and implementing cross-asset wealth hedging strategies within the perilous modern slash and burn financial landscape is our specialty."</p>
                        </div>
                    </div>
                    <div className="banner-content-wrapper">
                        <Banner title="Who We Are" />
                        <div className="about-content-wrapper">
                            <div className="about-content-container">
                                <div className="about-content first-para">
                                    <p>Here at the Fehu Fund, it is our explicit goal to understand your goals and build a bomb-proof strategy to meet those goals. Whether it is financial investment, technological architecture, or advisement, our expertise is second to none and highly sought after by top-dogs in the crypto and fin-tech industry. Our unique ideas around client centered investment and creative approaches to both ancient and newer problems will almost certainly take your portfolio, business, or life prospects to an entirely new level. Through our experience in a variety of industries, we bring a plethora of experience and knowledge to the table and use it to leverage the</p>
                                </div>
                                <div className="small-logo-wrapper-about">
                                    <div className="small-logo-vert-line-about"></div>
                                    <img className="small-logo-about" src={ FehuLogo } alt="Fehu Fund Logo."></img>
                                    <div className="small-logo-vert-line-about"></div>
                                </div>
                                <div className="about-content">
                                    <p>best possible outcomes for our clients. Our approaches to our work originate in the Austrian school of economics but are not limited to that either. Much of our talents are simply a result of trial and error and learning over the course of a decade and a half how to really knock it out of the park. Our business is architected in a way that positions your success parallel to ours. That is to say, we get paid when you get paid. So you can be absolutely certain that when Scott and Ed step on the field they are both hungry and ready to slam-dunk on our adversaries and all challenges associated with making you rich and all that fun stuff!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;