import React from 'react';
import Card from '../Card/Card';
import './Content.css';
import { useState } from 'react';

const Content = () => {
    const [data, setData] = useState([
        {
            id: 0,
            calory: 261,
            food: "Cake"
        },
        {
            id: 1,
            calory: 237,
            food: "Noodles"
        },
        {
            id: 2,
            calory: 280,
            food: "Burger"
        },
        {
            id: 3,
            calory: 311,
            food: "Lasagna"
        },
        {
            id: 4,
            calory: 1037,
            food: "Pizza"
        }
    ]);
    return (
        <div className="content">
            <div className="content-box">
                {data.length ? (
                    data.map(({ calory, food, id }) => (
                        <Card 
                            key = {id}
                            calory = {calory}
                            data = {data}
                            setData = {setData}
                            food = {food}
                            id = {id}
                        />
                    ))
                ) : (
                    <h1 style={{ display: "flex", justifyContent: "center" }}>
                        No Entry
                    </h1>
                )}
            </div>
        </div>
    );
};

export default Content;