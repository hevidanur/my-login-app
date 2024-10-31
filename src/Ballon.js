
import React from 'react';
import './Balloon.css';

function Balloon({ left, delay, color }) {
    return (
        <div
            className="balloon"
            style={{
                left: `${left}%`,
                animationDelay: `${delay}s`,
                backgroundColor: color,
            }}
        ></div>
    );
}

export default Balloon;
