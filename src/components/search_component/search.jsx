import React from 'react';

const search = props => {
    const {handleChange, handleSearch} = props;
    return ( 
        <form
            onSubmit={e => handleSearch(e)}
            className="btns-list search-wrapper"
        >
            <div className="input-group input-group-lg">
                <input
                    onChange={e => handleChange(e)}
                    name="cityName"
                    type="text"
                    className="form-control"
                    placeholder="search by city"
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                />
                <input
                    onChange={e => handleChange(e)}
                    name="countryName"
                    type="text"
                    className="form-control"
                    placeholder="search by country"
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                />
                <button type="submit" className="input-group-prepend">
                <span
                    className="input-group-text"
                    id="inputGroup-sizing-lg"
                >
                    search
                </span>
                </button>
            </div>
        </form>
     );
}
 
export default search;