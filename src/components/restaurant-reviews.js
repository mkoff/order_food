import React, {Component} from 'react';
import RestaurantReview from "./restaurant-review";

class RestaurantReviews extends Component {
    render() {
        const {restaurant} = this.props;
        return (
            <div>
                <ul>
                    <h3>Reviews:</h3>
                    {restaurant.reviews.map(
                        (review) => (
                            <RestaurantReview
                                review={review}
                                key={review.id}
                            />
                        )
                    )}
                </ul>
            </div>
        )
    }
}

export default RestaurantReviews;