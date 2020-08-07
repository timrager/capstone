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
        console.log("from Dashboard.js")
        console.log(user)

        return(
            <div>
                <h4>Hello {user.name}</h4>
                <p> Here are the details of your stay: </p>
                <p>{user.roomId}</p>
                <button value="1">Book Room 1</button>
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