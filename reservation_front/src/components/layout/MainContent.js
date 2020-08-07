import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {  updateUser } from '../actions/authActions';
import leaf from '../../images/004-leaf.svg'
import wave from '../../images/007-wave.svg'
import sunrise from '../../images/008-sunrise.svg'

class Front extends Component{


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
            roomId: event.target.id,
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

        return(
        <div class="bg-gray-200 font-sans flex flex-col items-center">
        <main class="mt-16 w-full flex flex-col items-center">
            <div class="max-w-4xl mx-4">
                <h2 class="pb-1 font-bold text-xl text-indigo-700 border-b border-indigo-600">Your Sanctuary Away From Home...</h2>
                <p class="text-sm mt-4 text-gray-600">Located between the Pacific Northwest National Rainforest and the Pacific Ocean, Estate Bay B&B provides a wide assortment of amentities to meet your needs.  From fishing in the sea, to relaxing on the beach, to hiking well-preserved trails, there's a little bit of something for everyone.  Book your reservation today!</p>
                
                <h2 class="mt-8 pb-1 font-bold text-xl text-indigo-700 border-b border-indigo-600">Rooms Available</h2>

                <div class="flex justify-center">
                <form class="max-w-xl w-full text-gray-900 mt-4 px-8 md:px-0" onSubmit={this.onSubmit}>
                    <div class="flex flex-col md:flex-row md:-mx-2">
                        <label htmlFor="reserveStartDate" class="sr-only">Reservation Start Date</label>
                        <input class="bg-indigo-100 mt-4 border border-gray-600 rounded-lg py-2 px-4 w-full md:mx-2" type="text" placeholder="Check-in Date" id="reserveStartDate" onChange={this.onChange} value={this.state.reserveStartDate}/>
                      
                        <label htmlFor="reserveEndDate" class="sr-only">Reservation End Date</label>
                        <input class="bg-indigo-100 mt-4 border border-gray-600 rounded-lg py-2 px-4 w-full md:mx-2" type="text" placeholder="Check-out Date" id="reserveEndDate" onChange={this.onChange} value={this.state.reserveEndDate}/>

                    </div>
                </form>
                </div>
                
                <div class="flex flex-col sm:flex-row sm:-mx-2 mb-8">
                    <div class="mt-4 sm:w-1/3">
                        <div class="bg-green-200 h-full p-8 border-b-4 border-green-500 rounded-lg flex flex-col items-center sm:mx-2 sm:p-3 md:p-8">
                            <div class="bg-gray-200 text-indigo-700 w-16 rounded-full p-2">
                                <img class="h-12 w-12 fill-current" src={leaf} />
                            </div>
                            <div class="mt-4 font-bold">Rainforest Alcove</div>
                            <div class="text-center mt-2 text-gray-600 text-sm">Surrounded by the PNW rainforest, you'll wake up to the sounds of rushing streams and crisp, fresh air.</div>

                            <div id="1" onClick={this.onBooking} class="bg-green-500 text-indigo-100 font-bold mt-2 px-4 py-2 rounded-full text-xs uppercase mt-6">Book This</div>

                        </div>
                    </div>
                    
                    <div class="mt-4 sm:w-1/3">
                        <div class="bg-green-200 h-full p-8 border-b-4 border-green-500 rounded-lg flex flex-col items-center sm:mx-2 sm:p-3 md:p-8">
                            <div class="bg-gray-200 text-indigo-700 w-16 rounded-full p-2">
                                <img class="h-12 w-12 fill-current" src={wave} />
                            </div>
                            <div class="mt-4 font-bold">Fisherman's Nook</div>
                            <div class="text-center mt-2 text-gray-600 text-sm">With the sounds of the sea,  you'll be pampered and relaxed from the salty air.</div>

                            <div id="2" onClick={this.onBooking} class="bg-green-500 text-indigo-100 font-bold mt-2 px-4 py-2 rounded-full text-xs uppercase mt-12">Book This</div>

                        </div>
                    </div>
                    
                    <div class="mt-4 sm:w-1/3">
                        <div class="bg-green-200 h-full p-8 border-b-4 border-green-500 rounded-lg flex flex-col items-center sm:mx-2 sm:p-3 md:p-8">
                            <div class="bg-gray-200 text-indigo-700 w-16 rounded-full p-2">
                            <img class="h-12 w-12 fill-current" src={sunrise} />
                            </div>
                            <div class="mt-4 font-bold">Mossy Cove</div>
                            <div class="text-center mt-2 text-gray-600 text-sm">Enjoy the sunset over the Cove. Free cocktails and hors d'oeuvers served every day. </div>

                            <div id="3" onClick={this.onBooking} class="bg-green-500 text-indigo-100 font-bold mt-2 px-4 py-2 rounded-full text-xs uppercase mt-12">Book This</div>
 
                        </div>
                    </div>
                </div>

            </div>
        </main>

</div>

        )
    }
}

Front.propTypes = {
    updateUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { updateUser }
)(Front);
