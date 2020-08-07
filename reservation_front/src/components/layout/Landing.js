import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateUser } from '../actions/authActions';
import { Link } from 'react-router-dom';

class Landing extends Component {

    state = {
        email: '',
        roomId: '',
        reserveStartDate: '',
        reserveEndDate: ''
    }



    onBooking = (event) => {
        event.preventDefault();
        const userData = { 
            ...this.props.auth.user,
            roomId: this.state.roomId,
            reserveStartDate: this.state.reserveStartDate,
            reserveEndDate: this.state.reserveEndDate
        }
        this.props.updateUser(userData);
        console.log(userData);
    }

    onChange = (event) => {
        this.setState({ [event.target.id]: event.target.value });
    };




    render(){

        const { user } = this.props.auth;

        return(
        <>
            {/* <div>
                <Link to="/signup">Signup</Link>
            </div>
            <div>
                <Link to="/login">Login</Link>
            </div> */}

            <form onSubmit={this.onBooking}>
                    <div>
                        <input onChange={this.onChange} value={this.state.reserveStartDate}  id="reserveStartDate" type="text"/>
                    </div>
                    <div>
                        <input onChange={this.onChange} value={this.state.reserveEndDate}  id="reserveEndDate" type="text"/>
                    </div>
                    <div>
                    <button value={this.state.roomId = "10"} type="submit">10</button>
                    </div>
            </form>
        </>
        )
    }
}

Landing.propTypes = {
    updateUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { updateUser }
)(Landing);
