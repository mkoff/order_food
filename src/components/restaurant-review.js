import React, {Component} from 'react';
import {Rate} from "antd";

class RestaurantReview extends Component {
    render() {
        const {restaurant, review} = this.props;
        return (
            <li>
                <strong>{review.user}</strong>
                <p>{review.text}</p>
                <Rate allowHalf defaultValue={review.rating} />
            </li>
        );
    }
}

export default RestaurantReview;