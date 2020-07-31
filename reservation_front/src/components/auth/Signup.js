import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Signup extends Component{

    state = {
        name: '',
        email: '',
        password: '',
        password2: '',
        errors: {}
    };

    onChange = (event) => {
        this.setState({ [event.target.id]: event.target.value });
    };

    onSubmit = (event) => {
        event.preventDefault();

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };

        console.log(newUser);
    };

    render(){
        const { errors } = this.state;

        return(
            <div className="container">
                <div className="row">
                    <Link to="/">Back to Home</Link>
                    <h4>Sign Up Below</h4>
                    <p>Already have an account? <Link to="/login">Log In</Link></p>
                </div>
                <form noValidate onSubmit={this.onSubmit}>
                    <div>
                        <input onChange={this.onChange} value={this.state.name} error={errors.name} id="name" type="text"/>
                        <label htmlFor="name">Name</label>
                    </div>
                    <div>
                        <input onChange={this.onChange} value={this.state.email} error={errors.email} id="email" type="email"/>
                        <label htmlFor="email">Email</label>
                    </div>
                    <div>
                        <input onChange={this.onChange} value={this.state.password} error={errors.password} id="password" type="password"/>
                        <label htmlFor="password">Password</label>
                    </div>
                    <div>
                        <input onChange={this.onChange} value={this.state.password2} error={errors.password2} id="password2" type="password"/>
                        <label htmlFor="pasword2">Confirm Password</label>
                    </div>
                    <div>
                        <button type="submit">Sign Up</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Signup;