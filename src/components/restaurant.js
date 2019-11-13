import React, {Component} from 'react';

class Restaurant extends Component {
    render() {
        const {isOpen, toggleOpen, restaurant} = this.props;
        const {id, image, name, menu} = restaurant;
        return (
            <li>

                <img width={80} height={80} src={image} alt={name}/>
                <button
                    onClick={() => toggleOpen(id)}
                >
                    {isOpen ? 'close' : 'open'}
                </button>
                {
                    isOpen ?
                        (
                            <>
                                <h2>{name}</h2>
                                <div>Menu items: {menu.length}</div>
                            </>
                        ) :
                        null
                }
            </li>
        );
    }

}

export default Restaurant;