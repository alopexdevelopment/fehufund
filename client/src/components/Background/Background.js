import React from 'react';
import './Background.css'

class Background extends React.Component {
    state = {
        activeBackgroundImg: "background-img bison",
        currentBackgroundIdx: 0
    }

    backgroundImgClasses = [
        "background-img bison",
        "background-img stonks-two",
        "background-img code",
        "background-img viking"
    ]

    changeBackground = () => {
        if (this.state.currentBackgroundIdx === (this.backgroundImgClasses.length-1)) {
            const updateState = {
                activeBackgroundImg: this.backgroundImgClasses[this.state.currentBackgroundIdx],
                currentBackgroundIdx: 0
            }
            this.setState(updateState);
        } else {
            const incrementedIdx = this.state.currentBackgroundIdx + 1;
            
            const updateState = {
                activeBackgroundImg: this.backgroundImgClasses[(incrementedIdx)],
                currentBackgroundIdx: incrementedIdx
            }
            this.setState(updateState);
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.changeBackground();
        }, 10000);
    }

    render() {
            return (
                <div className={this.state.activeBackgroundImg}></div>
            )
        }
}

export default Background;