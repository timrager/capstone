import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
    render(){
        return(
        <div>
            <div>
                <Link to="/signup">Signup</Link>
            </div>
            <div>
                <Link to="/login">Login</Link>
            </div>
        </div>
        )
    }
}

export default Landing;