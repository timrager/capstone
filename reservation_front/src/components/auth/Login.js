import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component{

    state = {
        email: '',
        password: '',
        errors: {}
    };

    onChange = (event) => {
        this.setState({ [event.target.id]: event.target.value });
    };

    onSubmit = (event) => {
        event.preventDefault();

        const userData = {
            email: this.state.email,
            password: this.state.password,
        };

        console.log(userData);
    };

    render(){
        const { errors } = this.state;

        return(
            <div className="container">
                <div className="row">
                    <Link to="/">Back to Home</Link>
                    <h4>Login Below</h4>
                    <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
                </div>
                <form noValidate onSubmit={this.onSubmit}>
                    <div>
                        <input onChange={this.onChange} value={this.state.email} error={errors.email} id="email" type="email"/>
                        <label htmlFor="email">Email</label>
                    </div>
                    <div>
                        <input onChange={this.onChange} value={this.state.password} error={errors.password} id="password" type="password"/>
                        <label htmlFor="password">Password</label>
                    </div>
                    <div>
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;