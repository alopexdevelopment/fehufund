import React from 'react';
import { connect } from 'react-redux';
import { toggleSideNavBar } from './../../redux/actions/uiMotion'
import Hamburger from './menu-icon.png';
import './MenuIcon.css';

class MenuIcon extends React.Component {
    
    toggleNavBar = () => {
        this.props.dispatch(toggleSideNavBar());
    };
    
    render () {
        const currentTitle = this.props.currentTitle.currentTitle;
        const sideNavBarOpen = this.props.sideNavBarOpen.sideNavBarOpen;
        return (
            <div className="menu-icon-wrapper">
                <div className="hamburger-page-name-wrapper">
                    <div className="hamburger-container" onClick={this.toggleNavBar}>
                        <img className={sideNavBarOpen ? "hamburger rotate":"hamburger"} src={Hamburger} alt="'Hamburger' menu icon that leads to navigation links." />
                    </div>
                    <div className="current-page-title">
                        <h3>{currentTitle.toUpperCase()}</h3>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return state
}
  
  export default connect(mapStateToProps)(MenuIcon);