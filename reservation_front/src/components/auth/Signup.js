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
        errors: {}
    };

    componentDidMount(){
        if(this.props.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
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
            password2: this.state.password2
        };

        console.log(newUser);
        this.props.signupUser(newUser, this.props.history);
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
                        <input onChange={this.onChange} value={this.state.name} error={errors.name} id="name" type="text"
                            className={classnames("",{ invalid: errors.name })}
                        />
                        <label htmlFor="name">Name</label>
                        <span>{errors.name}</span>
                    </div>
                    <div>
                        <input onChange={this.onChange} value={this.state.email} error={errors.email} id="email" type="email"
                            className={classnames("",{ invalid: errors.email })}
                        />
                        <label htmlFor="email">Email</label>
                        <span>{errors.email}</span>
                    </div>
                    <div>
                        <input onChange={this.onChange} value={this.state.password} error={errors.password} id="password" type="password" className={classnames("",{ invalid: errors.password })}/>
                        <label htmlFor="password">Password</label>
                        <span>{errors.password}</span>
                    </div>
                    <div>
                        <input onChange={this.onChange} value={this.state.password2} error={errors.password2} id="password2" type="password" className={classnames("",{ invalid: errors.password2 })} />
                        <label htmlFor="password2">Confirm Password</label>
                        <span>{errors.password2}</span>
                    </div>
                    <div>
                        <button type="submit">Sign Up</button>
                    </div>
                </form>
            </div>
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