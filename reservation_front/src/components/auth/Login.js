import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../actions/authActions';
import classnames from 'classnames';

class Login extends Component{

    state = {
        email: '',
        password: '',
        errors: {}
    };

    // componentDidMount(){
    //     if(this.props.auth.isAuthenticated) {
    //         this.props.history.push("/dashboard");
    //     }
    // }

    // componentWillReceiveProps(nextProps){
    //     if(nextProps.auth.isAuthenticated){
    //         this.props.history.push("/dashboard");
    //     }
    //     if(nextProps.errors){
    //         this.setState({ errors: nextProps.errors })
    //     }
    // }

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
        this.props.loginUser(userData, this.props.history);
    };

    render(){
        const { errors } = this.state;

        return(


            <>
            <div class="bg-gray-400 py-12 w-full flex flex-col items-center border-t-2 border-black">
            <h2 class="font-bold text-xl text-gray-400">Log in to book your room</h2>
            
            <form class="max-w-xl w-full text-gray-200 mt-4 px-8 md:px-0" onSubmit={this.onSubmit}>
                <div class="flex flex-col md:flex-row  md:-mx-2">
                    <label htmlFor="email" class="sr-only">Email address</label>
                    <input class="bg-gray-700 mt-4 border border-gray-600 rounded-lg py-2 px-4 w-full md:mx-2" type="email" placeholder="Email Address" id="email" onChange={this.onChange} value={this.state.email}/>
                    
                </div>
                <div class="flex flex-col md:flex-row  md:-mx-2">
                    <label htmlFor="password" class="sr-only">Password</label>
                    <input class="bg-gray-700 mt-4 border border-gray-600 rounded-lg py-2 px-4 w-full md:mx-2" type="password" placeholder="Password" id="password" onChange={this.onChange} value={this.state.password}/>
                    
                </div>
                <div class="flex flex-col md:flex-row md:-mx-2">
                    <button class="bg-blue-600 text-sm mt-4 rounded-lg py-2 px-4 w-full md:mx-2" type="submit">Log In Account</button>
                </div>
            </form>
        </div>
        </>

        );
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { loginUser }
)(Login);