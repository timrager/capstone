import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateUser } from '../actions/authActions';

import { Link } from 'react-router-dom';

class Landing extends Component {
    render(){
        return(
        <>
            <div>
                <Link to="/signup">Signup</Link>
            </div>
            <div>
                <Link to="/login">Login</Link>
            </div>
        </>
        )
    }
}

export default Landing;