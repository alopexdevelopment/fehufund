import React from 'react';
import Form from './../Form/Form';

import './Contact.css';

class Contact extends React.Component {
    contactRef = React.createRef();

    componentDidMount() {
        setTimeout(() => {
            const pixelLocations = this.contactRef.current.getBoundingClientRect();
            this.props.assignComponentPosition('contactPos', pixelLocations.top);
        }, 500)
    }

    render(){
        return (
            <div className="contact-wrapper" ref={this.contactRef}>
                <div id="contact-anchor" className="contact-container">
                    <div className="contact-title-container">
                        <h3>Looking for a Hedge?</h3>
                        <h3>Let's Connect.</h3>
                    </div>
                    <Form/>
                </div>
            </div>
        )
    }
}

export default Contact;