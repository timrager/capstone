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

    componentDidMount(){
        if(this.props.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.auth.isAuthenticated){
            this.props.history.push("/dashboard");
        }
        if(nextProps.errors){
            this.setState({ errors: nextProps.errors })
        }
    }

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
        this.props.loginUser(userData);
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
                        <input onChange={this.onChange} value={this.state.email} error={errors.email} id="email" type="email"
                            className={classnames("", { invalid: errors.email || errors.emailnotfound })}
                        />
                        <label htmlFor="email">Email</label>
                        <span>{errors.email}{errors.emailnotfound}</span>
                    </div>
                    <div>
                        <input onChange={this.onChange} value={this.state.password} error={errors.password} id="password" type="password" className={classnames("",{ invalid: errors.password || errors.passwordincorrect })} />
                        <label htmlFor="password">Password</label>
                        <span>{errors.password}{errors.passwordincorrect}</span>
                    </div>
                    <div>
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
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