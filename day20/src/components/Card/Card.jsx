import React from 'react';
import "./Card.css";

export default function Card({ calory, food, id, setData, data }) {
    const deleteFood = (e) => {
        const modifiedData = data.filter((ele) => ele.id !== id);
        setData([...modifiedData]);
    };
    return (
        <div className="card">
            <div className="name">
            { food && food }
            <button onClick = {deleteFood}>Delete</button>
            </div>
            <div className="value">
            Calories: {calory && calory}
            </div>
        </div>
    );
}
