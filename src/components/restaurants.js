import React, {Component} from 'react';
import Restaurant from "./restaurant";
import {accordion} from "../decorators/accordion";

class Restaurants extends Component {
    render() {
        const {
            restaurants,
            //from decorator
            openItemId,
            toggleOpen,
            closeItem
        } = this.props
        return (
            <ul>
                {this.props.restaurants.map(
                    (restaurant) => (
                        <Restaurant
                            key={restaurant.id}
                            restaurant={restaurant}
                            isOpen={openItemId === restaurant.id}
                            toggleOpen={toggleOpen}
                            closeItem={closeItem}
                        />
                    )
                )}
            </ul>
        );
    }
}

export default accordion(Restaurants);