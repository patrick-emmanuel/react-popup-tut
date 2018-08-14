import React, { Component } from 'react';
import Popup from '../Popup';
import handIcon from './ok-hand.png';
import './styles.css';

class ContactForm extends Component {

    state = {
        name: '',
        email: '',
        message: '',
        showPopup: false,
        submitted: false
    }

    handleChange(e) {
        let change = {}
        change[e.target.name] = e.target.value
        this.setState(change)
    }

    handleSubmit(e) {
        e.preventDefault()
        this.setState({
            submitted: true
        })
    }

    render() {
        return (
            <div className="form-wrapper">
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Your name"
                        name="name"
                        value={this.state.name}
                        handleChange={this.handleChange}
                        required />

                    <input
                        type="text"
                        placeholder="Your email"
                        name="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required />

                    <textarea
                        cols="4"
                        rows="5"
                        type="text"
                        placeholder="Your message"
                        message="message"
                        value={this.state.message}
                        handleChange={this.handleChange}
                        required />
                    <button type="submit">Submit</button>
                    <Popup showPopup={this.state.showPopup}>
                        <div className="confirm">
                            <div className="close-icon">
                                <div className="inner-content">
                                    <img src={handIcon} alt="OK" />
                                    <p> Done</p>
                                </div>
                            </div>
                        </div>
                    </Popup>
                </form>
            </div>
        );
    }
}

export default ContactForm;