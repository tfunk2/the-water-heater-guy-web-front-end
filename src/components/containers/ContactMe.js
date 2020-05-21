import React, { Component } from 'react'
import '../../stylesheets/ContactMe.css'

export default class ContactMe extends Component {

    state = {
        full_name: "",
        email: "",
        phone_number: "",
        address: "",
        message: ""
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch('http://localhost:3000/contact_messages', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ 
                    full_name: this.state.full_name,
                    email: this.state.email,
                    phone_number: this.state.phone_number,
                    address: this.state.address,
                    message: this.state.message
            })
        }).then(this.setState({ 
            full_name: "",
            email: "",
            phone_number: "",
            address: "",
            message: ""
        }))
        
    }

    render() {
        return (
            <div className="contact-me-div">
                <div className="contact-me-form-div">
                    <div className="contact-me-text-div">
                        <p id="contact-me-main-title">Let's get in touch!</p>
                        <hr/>
                        <p><span className="contact-me-span">Email:</span> mikethewaterheaterguy@gmail.com</p>
                        <hr/>
                        <p><span className="contact-me-span">Cell:</span> 816-903-4688</p>
                        <hr/>
                    </div>
                    <div className="form-div">
                    <h1 className="contact-me-title">Enter some / all of your contact information and leave a message or ask question! <br/>(Great option after normal business hours)</h1>
                        <form 
                            name="contact-messages" 
                            className="contact-me-form"
                            onSubmit={this.handleSubmit} 
                            autoComplete="off"
                        >
                            <input placeholder="Full Name" onChange={this.handleChange} value={this.state.full_name} name="full_name" type="text"></input>
                            <input placeholder="Email" onChange={this.handleChange} value={this.state.email} name="email" type="text"></input>
                            <input placeholder="Phone Number" onChange={this.handleChange} value={this.state.phone_number} name="phone_number" type="text"></input>
                            <input placeholder="Address" onChange={this.handleChange} value={this.state.address} name="address" type="text"></input>
                            <textarea placeholder="What can I help you with?" onChange={this.handleChange} value={this.state.message} name="message" rows={10} cols={30}></textarea>
                            <input type="submit" value="Submit"/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
    
}