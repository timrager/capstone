import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component{
    render(){
        return(
            <div>
                <nav>
                    <Link to="/">Main</Link>
                </nav>
            </div>
        )
    }
}

export default Navbar;