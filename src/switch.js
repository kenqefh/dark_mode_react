import React from 'react';
import './switch.css';

function Switch(){
    return(
        <div className="dark-mode">
            <p className="dark-mode-title">Dark Mode</p>
            <input type="checkbox" className="checkbox" id="checkbox" />
            <label htmlFor="checkbox" className="switch"></label>
        </div>
    );
}

export default Switch;