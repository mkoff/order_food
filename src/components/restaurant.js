import React, {PureComponent} from 'react';
import RestaurantReviews from "./restaurant-reviews";
import Button from 'antd/es/button';

class Restaurant extends PureComponent{
    render() {
        const {isOpen, toggleOpen, restaurant, closeItem} = this.props;
        const {id, image, name, menu} = restaurant;
        return (
            <li>
                <img width={80} height={80} src={image} alt={name}/>
                <Button
                    type={"primary"}
                    onClick={() => {
                        closeItem ?
                            toggleOpen(id)
                        :
                            toggleOpen(false)
                    }}
                >
                    {isOpen ? 'close' : 'open'}
                </Button>
                {
                    isOpen ?
                        (
                            <>
                                <h2>{name}</h2>
                                <div>Menu items: {menu.length}</div>
                                <RestaurantReviews
                                    restaurant={restaurant}
                                />
                            </>
                        ) :
                        null
                }
            </li>
        );
    }

}

export default Restaurant;