import React from 'react';
import BannerImg from './banner.png'
import './banner.css';

class Banner extends React.Component {
    render () {
        return (
                    <div className="banner-wrapper">
                        <div className="div-line"></div>
                        <div className="banner-container">
                            <img src={ BannerImg }></img>
                            <p>{ this.props.title }</p>
                        </div>
                        <div className="div-line"></div>
                    </div>
        )
    }
}

export default Banner;