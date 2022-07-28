import React from 'react';
import Title from '../Title/Title';
import FehuLogoFront from './fehu-logo-front.png';
import FehuLogoBack from './fehu-logo-back.png';
import './FehuFundLogo.css'


class FehuFundLogo extends React.Component {
    render () {
        return (
            <div className="logo-wrapper">
                <div className="logo-container">
                    <div className="flip-container">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img className="logo" src={FehuLogoFront} alt="Fehu Fund logo front" />
                                </div>
                                <div className="flip-card-back">
                                    <img className="logo" src={FehuLogoBack} alt="Fehu Fund logo back" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Title />
                </div>
            </div>
        )
    }
}

export default FehuFundLogo;