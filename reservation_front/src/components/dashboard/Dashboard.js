import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser, updateUser } from '../actions/authActions';

class Dashboard extends Component {


    componentWillReceiveProps(nextProps){
        if(nextProps.errors){
            this.setState({ errors: nextProps.errors });
        }
    }

    onLogoutClick = event => {
        event.preventDefault();
        this.props.logoutUser();
    };


    render(){
        const { user } = this.props.auth;

        return(
            <div>
                <h4>Hello {user.name}</h4>
                <p>Your booking is currently for room {user.roomId}</p>
                <p>Your check-in date is: {user.reserveStartDate}</p>
                <p>Your check-out date is: {user.reserveEndDate}</p>
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
    { logoutUser, updateUser }
)(Dashboard);