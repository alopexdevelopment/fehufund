import React from 'react';
import './ZigZag.css';

class ZigZag extends React.Component {
    prepareClasses = (settings) => {
        let classes = "zig-zag";

        if (!settings) {
            return classes;
        } else {
            Object.keys(settings).map((key) => {
                classes += ` ${settings[key]}`;
            })
            return classes;
        }
    }

    render() {
         return (
            <div className={this.prepareClasses(this.props.settings)}></div>
         )
     }
}

export default ZigZag;