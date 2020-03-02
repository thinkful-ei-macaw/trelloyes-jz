import React from 'react';
import STORE from './store';


class Card extends React.Component {
    render() {
        return (
            <div className="Card">
                <h3>{this.title}</h3>
                <p>{this.content}</p>
            </div>
        )
    }
};

export default Card;