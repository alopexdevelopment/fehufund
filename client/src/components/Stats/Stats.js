import React from 'react';
import './Stats.css';

class Stats extends React.Component {
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
            <div className={this.props.transitioning ? "stats-wrapper close":"stats-wrapper"} onClick={this.sectionClicked}>
                <h1>
                    Stats
                </h1>
            </div>
        )
    }
}

export default Stats;