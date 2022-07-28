import React from 'react';
import Banner from './../Banner/Banner';
import './Team.css';
import Scott from './scott-face.png';
import Ed from './ed-face.png';
import FehuLogo from './fehu-logo-front.png';


class Team extends React.Component {
    teamRef = React.createRef();

    componentDidMount() {
        setTimeout(() => {
            const pixelLocations = this.teamRef.current.getBoundingClientRect();
            this.props.assignComponentPosition('teamPos', pixelLocations.top);
        }, 500)
    }

    render(){
        return (
            <div id="team-anchor" className="team-wrapper" ref={this.teamRef} onClick={this.sectionClicked}>
                <div className="team-container">
                    <Banner title="The Team" />
                    <div className="profiles-wrapper">
                        <div className="profiles-container">
                            <div className="profile-container">
                                <div className="photo-container">
                                    <img className="photo" src={ Scott } alt="Portrait of Scott Demuth"></img>
                                </div>
                                <div className="profile-desc-container">
                                    <div className="profile-title-container">
                                        <h3>SCOTT DEMUTH | Analyst</h3>
                                    </div>
                                    <p className="profile-desc-text">With a background in Sociology, Scott uses his understanding of social patterns to cross-intersect them with battle-proven technical analysis in an asymmetrical investment terrain. Many technical trading advisors focus on stocks, real estate, or hard money markets. Scott takes a temperature reading of the current political, financial, and social climate and puts together portfolio strategies that are straight forward and adaptable with a variety of fail-safes to insure you always land "right side up". Scott's expertise through the past 3 bull/bear cycles in crypto sets him apart from other technical analysts as that kind of experience in the most profitable and emerging markets the world has seen in many decades is hard-won and very rare. In his free-time, he is a cigar connoisseur, poker wizard, and advisor for farmers and other forms of environmental restoration projects. Connect below to find out more about his offerings and set up your portfolio.</p>
                                </div>
                            </div>
                            <div className="small-logo-wrapper-team">
                                <div className="small-logo-vert-line-team"></div>
                                <img className="small-logo-team" src={ FehuLogo } alt="Fehu Fund Logo."></img>
                                <div className="small-logo-vert-line-team"></div>
                            </div>
                            <div className="profile-container">
                                <div className="photo-container">
                                    <img className="photo hexagon" src={ Ed } alt="Portrait of Ed Bjørnson"></img>
                                </div>
                                <div className="profile-desc-container">
                                    <div className="profile-title-container">
                                        <h3>ED BJØRNSON | Tech Advisor</h3>
                                    </div>
                                    <p className="profile-desc-text">Start-ups? Fortune 500 companies? Architecture? Bjørnson is your man. His expertise in technical solutions is secondary to none given his time spent as an architect across many teams and many differing business and environments. To name a few of his past roles and accomplishments, Ed architected the migration of Lowe's, Slack's, and Disney's internal software and applications to the Google Cloud, saving said companies a total of 63.7 million dollars in the process. His efforts also extended to smaller start ups in early funding rounds. Ed understand the in's and out's of the current industry on a very high level and brings mammoth expertise to the table for his clients and colleagues. In his free-time he collects basketball cards, is a father of 3, and works with crypto start-ups in the capacity mentioned above. Working with Ed is a once in a lifetime deal. Use this opportunity as a chance to connect with him and find out what he is all about. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Team;