import React from "react";
import MenuIcon from '../MenuIcon/MenuIcon';
import { Link } from "react-scroll";
import './Navigation.css'; 


class Navigation extends React.Component {
    render () {
      return (
        <nav>
            <MenuIcon updateSideNavBarOpen={this.props.updateSideNavBarOpen} sideNavBarOpen={this.props.sideNavBarOpen} currentPageTitle={this.props.currentPageTitle}/>
            <div className="nav-title-container">
              <Link  
                to="home-anchor" 
                spy={true}
                smooth={true}
                offset={0}
                duration={500}>
                  <h3 className="nav-title">FEHU FUND</h3>
              </Link>
            </div>
        </nav>
      )
    }
}

export default Navigation;