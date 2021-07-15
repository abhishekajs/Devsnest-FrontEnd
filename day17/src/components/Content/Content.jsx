import React from 'react';
import Card from '../Card/Card';
import './Content.css';

const Content = () => {
    return (
        <div className="content">
            <div className="content-box">
                <Card name="Pasta" value="169" />
                <Card name="Cake" value="261" /> 
                <Card name="Noodles" value="237" /> 
                <Card name="Burger" value="280" /> 
                <Card name="Lasagna" value="311" />
                <Card name="Pizza" value="1037" /> 
            </div>
        </div>
    );
};

export default Content;