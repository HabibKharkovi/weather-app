import React from 'react';

const Welcome = props => {
    const {changeCheckbox, checked, list} = props;
    return ( 
        <div className="col-lg-4">
            <div className="welcome-box">
            <h5>Welcome</h5>
            <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'
            </p>

            <div className="wc-bottom">
                <span className="temperature">
                    {
                        list
                        .filter((array, index) => index < 1)
                        .map(h => 
                            <div>
                                <img alt="a" src={`http://openweathermap.org/img/wn/${h.weather[0].icon}.png`} />
                                {checked ? (h.main.temp - 273.15).toFixed(2) + "C": (((h.main.temp - 273.15) * 9) / 5 +
                                32).toFixed(2) + "F"}
                            </div>
                    )}
                </span>
                <span className="deg">C</span>
                <span className="deg">F</span>
                <div className="slideThree">
                <input
                    onChange={changeCheckbox()}
                    type="checkbox"
                    value="None"
                    id="slideThree"
                    name="check"
                    defaultChecked={checked}
                />
                <label htmlFor="slideThree" />
                </div>
            </div>
            </div>
        </div>
     );
}
 
export default Welcome;