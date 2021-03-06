import React from 'react';

export function LocationCard(props) {
    return (
        <div className="location"  {...props}>
            {props.children}
        </div>
    )
}

export function RiskTitle(props) {
    return (
        <span className="risk-level" {...props}>
            {props.children}
        </span>
    )
}

export function Address(props) {
    return (
        <div className="address">
            {props.children}
        </div>
    )
}

export function Recommendation(props) {
    return (
        <div className="recommendation">
            {props.children}
        </div>
    )
}