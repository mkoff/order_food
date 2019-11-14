import React, {Component} from 'react';

function RestaurantReviews (props){
    const {restaurant} = props

    return (
        <div>
            Reviews: {restaurant.reviews.length}
        </div>
    )
}

export default RestaurantReviews;