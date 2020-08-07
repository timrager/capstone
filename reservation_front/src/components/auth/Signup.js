import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signupUser } from '../actions/authActions'
import classnames from 'classnames';


class Signup extends Component{

    state = {
        name: '',
        email: '',
        password: '',
        password2: '',
        roomId: '',
        reserveStartDate: '',
        reserveEndDate: '',
        errors: {}
    };

    componentDidMount(){
        if(this.props.auth.isAuthenticated) {
            this.props.history.push("/");
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.errors){
            this.setState({ errors: nextProps.errors });
        }
    }

    onChange = (event) => {
        this.setState({ [event.target.id]: event.target.value });
    };

    onSubmit = (event) => {
        event.preventDefault();

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,
            roomId: this.state.roomId,
            reserveStartDate: this.state.reserveStartDate,
            reserveEndDate: this.state.reserveEndDate
        };

        console.log(newUser);
        this.props.signupUser(newUser, this.props.history);
    };

    render(){
        const { errors } = this.state;

        return(

                <>
                <div class="bg-gray-400 py-12 w-full flex flex-col items-center border-t-2 border-black">
                <h2 class="font-bold text-xl text-gray-400">Sign up to book your room</h2>
                
                <form class="max-w-xl w-full text-gray-200 mt-4 px-8 md:px-0" onSubmit={this.onSubmit}>
                    <div class="flex flex-col md:flex-row md:-mx-2">
                        <label htmlFor="name" class="sr-only">Name</label>
                        <input class="bg-gray-700 mt-4 border border-gray-600 rounded-lg py-2 px-4 w-full md:mx-2" type="text" placeholder="Full Name" id="name" onChange={this.onChange} value={this.state.name}/>

                    </div>
                    <div class="flex flex-col md:flex-row  md:-mx-2">
                        <label htmlFor="email" class="sr-only">Email address</label>
                        <input class="bg-gray-700 mt-4 border border-gray-600 rounded-lg py-2 px-4 w-full md:mx-2" type="email" placeholder="Email Address" id="email" onChange={this.onChange} value={this.state.email}/>
                        
                    </div>
                    <div class="flex flex-col md:flex-row  md:-mx-2">
                        <label htmlFor="password" class="sr-only">Password</label>
                        <input class="bg-gray-700 mt-4 border border-gray-600 rounded-lg py-2 px-4 w-full md:mx-2" type="password" placeholder="Password" id="password" onChange={this.onChange} value={this.state.password}/>

                        <label htmlFor="password2" class="sr-only">Password</label>
                        <input class="bg-gray-700 mt-4 border border-gray-600 rounded-lg py-2 px-4 w-full md:mx-2" type="password" placeholder="Confirm Password" id="password2" onChange={this.onChange} value={this.state.password2}/>
                        
                    </div>
                    <div class="flex flex-col md:flex-row md:-mx-2">
                        <button class="bg-blue-600 text-sm mt-4 rounded-lg py-2 px-4 w-full md:mx-2" type="submit">Create Account</button>
                    </div>
                </form>
            </div>
            </>


        );
    }
}

Signup.propTypes = {
    signupUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { signupUser }
)(withRouter(Signup));