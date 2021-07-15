import React from 'react';
import {White, Black} from '../Cubes/Cube';
import './Chess.css';

const Chess = () => {
    const checks = [];
    for (let i = 0; i < 81; ++i) 
        (i%2 === 0) ? checks.push(<White key={i} />) : checks.push(<Black key={i} />);
    
    return (
        <div className="board">
            {checks}
        </div>
    );
};

export default Chess;