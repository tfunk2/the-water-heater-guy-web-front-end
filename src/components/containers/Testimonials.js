import React, { Component } from 'react'
import '../../stylesheets/Testimonials.css'

export default class Testimonials extends Component {

    state = {
        name: "",
        message: ""
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch('http://localhost:3000/testimonials', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ 
                    name: this.state.name,
                    message: this.state.message
            })
        }).then(this.setState({ 
            name: "",
            message: ""   
        }))
        
    }

    render() {
        return (
            <div className="testimonial-div">
                <div className="testimonial-form-div">
                    <div className="testimonial-text-div">
                        <p id="main-title">Have a good experience?</p>
                        <hr/>
                        <p id="testimonial-main-title">Want to leave a review?</p>
                        <p>Your feedback is appreciated!</p>
                        <hr/>
                    </div>
                    <div className="form-div">
                        <h1 className="testimonial-title">Leave your name and review here!</h1>
                        <form 
                            name="testimonials" 
                            className="testimonial-form"
                            onSubmit={this.handleSubmit} 
                            autoComplete="off"
                        >
                            <input placeholder="First Name Last Initial (ex. Mike S.)" onChange={this.handleChange} value={this.state.name} name="name" type="text"></input>
                            <textarea placeholder="Share your experience..." onChange={this.handleChange} value={this.state.message} name="message" rows={10} cols={30}></textarea>
                            <input type="submit" value="Submit"/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
    
}