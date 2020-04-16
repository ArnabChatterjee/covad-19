import React from 'react';

function Search() {
    return (
        <div className="search">
            <h2 className="search-title">Where are you going?</h2>
            <form className="search-form">
                <input className="search-field" placeholder="search"></input>
                <button className="submit-btn" type="submit">Go</button>
            </form>
        </div>
    );
}

export default Search;