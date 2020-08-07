import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import bb from '../../images/003-bed-and-breakfast.svg'

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authActions';

class Header extends Component{

    onLogoutClick = event => {
        event.preventDefault();
        this.props.logoutUser();
    };



    render(){
        return(

    <div class="bg-gray-200 font-sans flex flex-col items-center">
        <div class="bg-indigo-700 w-full px-4 py-3 flex justify-center border-b-4 border-green-500">
            <div class="max-w-4xl w-full">
                <div class="flex items-center justify-between text-green-500">
                </div>
                
                <div class="my-4">
                    <h1 class="text-2xl text-indigo-100">Estate Bay Bed & Breakfast</h1>
                    <p class="text-sm text-indigo-200">Escape to a secluded paradise</p>
                    
                    <div class="relative mt-4 flex">
                        {this.props.auth.isAuthenticated
                           ? <div><Link to="/logout" class="bg-green-500 text-indigo-100 font-bold mt-2 px-4 py-2 rounded-full text-xs mr-4 uppercase" onClick={this.onLogoutClick}>Logout</Link></div>
                            :
                            <div><Link to="/login" class="bg-green-500 text-indigo-100 font-bold mt-2 px-4 py-2 rounded-full text-xs mr-4 uppercase">Login</Link></div>
                        }
                        <div>
                            <Link to="/signup" class="bg-green-500 text-indigo-100 font-bold mt-2 px-4 py-2 rounded-full text-xs uppercase">Sign Up</Link>
                        </div>
                        
                        <div class="absolute right-0 bg-white rounded-full flex justify-center items-center p-5 border-4 border-green-500">
                            <img class="w-16 h-16" src={bb} />
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        )
    }
}

Header.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(Header);