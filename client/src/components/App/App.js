import React from 'react';
import { connect } from 'react-redux';
import { changeCurrentTitle } from './../../redux/actions/uiMotion'
import './App.css';
import Navigation from '../Navigation/Navigation';
import SideNavBar from '../SideNavBar/SideNavBar';
import Home from '../Home/Home';
import About from '../About/About';
import Team from '../Team/Team';
import Contact from '../Contact/Contact';
import Background from '../Background/Background';
import ZigZag from '../ZigZag/ZigZag';
import Footer from '../Footer/Footer';
    

class App extends React.Component {
  state = {
    aboutPos: undefined,
    teamPos: undefined,
    contactPos: undefined,
    navLinkStatus: {
      home: false,
      about: false,
      team: false,
      stats: false,
      resources: false,
      contact: false
    }
  }
  
  appRef = React.createRef();
  
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }
  
  handleScroll = (e) => {
    const topScreenPosition = e.path[1].pageYOffset;

    if(topScreenPosition < this.state.aboutPos) {
      this.props.dispatch(changeCurrentTitle('HOME'))
    } else if(topScreenPosition >= this.state.aboutPos && topScreenPosition < this.state.teamPos){
      this.props.dispatch(changeCurrentTitle('ABOUT'))
    } else if (topScreenPosition >= this.state.teamPos && topScreenPosition < (this.state.contactPos)){
      this.props.dispatch(changeCurrentTitle('TEAM'))
    } else if (topScreenPosition > (this.state.contactPos)){
      this.props.dispatch(changeCurrentTitle('CONTACT'))
    }
  }

  assignComponentPosition = (key, position) => {
    const updatedState = {};
    updatedState[key] = position;
    this.setState(updatedState);
  }

  updateNavLinkStatus = (linkTitle, status) => {
    const links = {...this.state.navLinkStatus};
    links[linkTitle] = status;
    
    this.setState({
        navLinkStatus: links
    });
  };

  updateSideNavBarOpen = () => {
    this.setState({
      sideNavBarOpen: !this.state.sideNavBarOpen
    });
  };
  

  render () {
    return (
      <div className="App" ref={this.appRef}>
        <Navigation updateSideNavBarOpen={this.updateSideNavBarOpen} sideNavBarOpen={this.state.sideNavBarOpen} />
        <SideNavBar sideNavBarOpen={this.state.sideNavBarOpen} navLinkStatus={this.state.navLinkStatus} updateNavLinkStatus={this.updateNavLinkStatus} />
        <Background />
        <Home navLinkStatus={this.state.navLinkStatus} updateSideNavBarOpen={this.updateSideNavBarOpen} sideNavBarOpen={this.state.sideNavBarOpen}/>
        <ZigZag settings={{color: 'white'}}/>
        <About assignComponentPosition={this.assignComponentPosition} />
        <Team assignComponentPosition={this.assignComponentPosition} teamRef={this.state.teamRef} />
        <ZigZag settings={{position: 'down', color: 'yellow'}} />
        <Contact assignComponentPosition={this.assignComponentPosition} contactRef={this.state.contactRef}/>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state.currentTitle;
}

export default connect(mapStateToProps)(App);