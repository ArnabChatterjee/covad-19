import React from 'react';

function Location() {
    return (
        <div className="location">
            <div className="risk-level-title"><h3>Risk Level: <span className="risk-level"></span></h3></div>
            <div className="address"></div>
            <div className="recommendation"></div>
        </div>
    );
}

export default Location;