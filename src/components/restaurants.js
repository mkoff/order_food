import React, {Component} from 'react';

class Restaurants extends Component {
    render() {
        return (
            <ul>
                {this.props.restaurants.map(
                    restaurant => (
                        <h2
                            key={restaurant.id}
                        >{restaurant.name}</h2>
                    )
                )}
            </ul>
        );
    }
}

export default Restaurants;