import React from 'react';
import axios from 'axios';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import './Form.css';



class Form extends React.Component {
    name = React.createRef();
    email = React.createRef();
    message = React.createRef();

    state = {
        formError: {
            name: {
                hasError: false,
                error: ''
            },
            email: {
                hasError: false,
                error: ''
            },
            message: {
                hasError: false,
                error: ''
            }
        }
    }

    toggleFormError = () => {
        this.setState({
            formError: {
                status: !this.state.formError
            }
        })
    }

    createNewFormErrorState = (validations) => {
        let newFormErrorState = {}

        Object.keys(validations).map((inputType) => {
            const validationResults = validations[inputType];

            if (validationResults === 'valid') {
                newFormErrorState[inputType] = {hasError: false, error: ''};
            } else {
                newFormErrorState[inputType] = {hasError: true, error: validationResults};
            }
        })

        return newFormErrorState;
    }

    updateFormErrorState = (newFormErrorState) => {
        this.setState({
            formError: newFormErrorState
        })
    }

    sendEmail = (e) => {
        e.preventDefault();
        // TODO: validate | name: exists. less than 60 chars. Not javascript. | email: exists. is an email. is less than 100 chars. Not Javascript. | message: less than 5000 chars. exists. is not javascript.

        const emailContents = {
            name: this.name.current.value,
            email: this.email.current.value,
            message: this.message.current.value
        };

        const newFormErrorState = this.createNewFormErrorState({
                                                                name: this.nameValidation(emailContents['name']), 
                                                                email: this.emailValidation(emailContents['email']),
                                                                message: this.messageValidation(emailContents['message'])
                                                                });

        this.updateFormErrorState(newFormErrorState);
        const emailIsValid = !(newFormErrorState.name.hasError || newFormErrorState.email.hasError || newFormErrorState.message.hasError); 


        if (emailIsValid) {
            // TODO: URL to have placeholder
            axios.post('http://ec2-18-224-173-234.us-east-2.compute.amazonaws.com:5000/contact/send', emailContents).then((res) => {
                if(res.data.error) {
                    NotificationManager.error('Contact web-admin.', 'Message Not Delivered.');
                } else {
                    NotificationManager.success("We'll reach out to you shortly!", 'Message delivered!');
                }
            }).catch((err) => {
                console.log(err);
            })
        }
    }
    
                        
    nameValidation = (text) => {
        if(text.length === 0) {
            return 'Name cannot be empty. Tell us who you are before resending.';
        } else if(text.length > 100) {
            return 'Your name needs to be less than 100 characters.';
        } else {
            return 'valid';
        }
    }
    
    messageValidation = (text) => {
        if(text.length === 0) {
            return 'Message cannot be empty. Share your thoughts before resending.';
        } else if(text.length > 1000) {
            return 'Your message needs to be less than 1000 characters.';
        } else {
            return 'valid';
        }
    }
    
    emailValidation = (text) => {
        const isEmail = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i).test(text);
        return isEmail ? 'valid' : 'Email is not valid. Please enter a valid email.';
    }
    
    
    render() {
        return (
            <div className="form-wrapper">
                <NotificationContainer/>
                <div className="form-container">
                    <form id="form" className="topBefore" onSubmit={(event) => {this.sendEmail(event)}}>
                        <div className="inputs-container">
                            <input id="name" name="name" type="text" ref={this.name} placeholder="NAME"></input>
                            <div className={!this.state.formError.name.hasError ? "error-msg close" : "error-msg"}>{this.state.formError.name.error}</div>
                        </div>
                        <div className="inputs-container">
                            <input id="email" name="email" type="text" ref={this.email} placeholder="EMAIL"></input>
                            <div className={!this.state.formError.email.hasError ? "error-msg close" : "error-msg"}>{this.state.formError.email.error}</div>
                        </div>
                        <div className="textarea-container">
                            <textarea id="message" name="message" type="text" ref={this.message} placeholder="SPEAK YOUR MIND..."></textarea>
                            <div className={!this.state.formError.message.hasError ? "error-msg close" : "error-msg"}>{this.state.formError.message.error}</div>
                        </div>
                        <div className="submit-container">
                            <input id="submit" type="submit" value="GO!"></input>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Form;