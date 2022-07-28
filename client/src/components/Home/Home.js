import React, { Fragment } from 'react';
import FehuFundLogo from '../FehuFundLogo/FehuFundLogo';
import './Home.css';

class Home extends React.Component {
    componentWillUpdate(nextProps){
        const nextPath = nextProps.currPath;
        const currPath = this.props.currPath;

        if (currPath !== nextPath) {
            this.props.history.push(nextPath);
        }
    }

    sectionClicked = () => {
       if (this.props.sideNavBarOpen) {
        this.props.updateSideNavBarOpen();
       } 
    }

    render () {
        return (
                <Fragment>
                    <div id="home-anchor" onClick={this.sectionClicked} className={this.props.sideNavBarOpen ? "home-wrapper opaque":"home-wrapper"}>
                        <div className={this.props.transitioning ? "home-container close":"home-container"}>
                            <FehuFundLogo logoVisible={this.props.logoVisibility} updateFFLogoVisibility={this.props.updateFFLogoVisibility}/>
                        </div>
                    </div>
                </Fragment>
        )
    }
}

export default Home;