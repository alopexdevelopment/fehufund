import React from 'react';
import './Resources.css';

class Resources extends React.Component {
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
    
    render(){
        return (
            <div className={this.props.transitioning ? "resources-wrapper close":"resources-wrapper"} onClick={this.sectionClicked}>
                <h1>
                    Resources
                </h1>
            </div>
        )
    }
}

export default Resources;