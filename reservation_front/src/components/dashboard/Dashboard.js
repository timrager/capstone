import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authActions';

class Dashboard extends Component {
    onLogoutClick = event => {
        event.preventDefault();
        this.props.logoutUser();
    };
    
    render(){
        const { user } = this.props.auth;

        return(
            <div>
                <h4>Hello {user.name}</h4>
                <p> Here are the details of your stay: </p>
                <button onClick={this.onLogoutClick}>Logout</button>
            </div>
        );
    }
}

Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(Dashboard);