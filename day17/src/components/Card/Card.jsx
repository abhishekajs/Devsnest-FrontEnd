import React from 'react';
import "./Card.css";

const Card = ({ name, value }) => {
    return (
        <div className="card">
            <div className="name">
            {name}
            </div>
            <div className="value">
            Calories: {value}
            </div>
        </div>
    );
};

export default Card;