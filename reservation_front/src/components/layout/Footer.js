import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return(

        <div class="bg-gray-800 w-full h-full text-center pb-8 font-sans flex flex-col items-center pt-8">
            <p class="text-xs text-gray-600 font-light">Copyright © 2020 Estate Bay Bed & Breakfast</p>
        </div>


        )
    }
}

export default Footer;