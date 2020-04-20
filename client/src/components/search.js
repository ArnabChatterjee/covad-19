import React from 'react';

export function Input(props) {
    return (
        <input className="search-field" placeholder="search" {...props}></input>
    );
  }

export function Form(props) {
    return (
        <form className="search-form" onSubmit={props.handleFormSubmit}>
            {props.children}
        </form>
    );
}

export function FormBtn(props) {
    return (
    <button className="submit-btn" type="submit" {...props}>Go</button>
    )
}