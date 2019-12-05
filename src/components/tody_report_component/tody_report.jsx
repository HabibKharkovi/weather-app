import React from 'react';

const TodayReport = props => {
    const { city, list } = props;

    return ( 
        <div className="col-lg-8">
            <div className="today-report"> 
                <div className="repo-head">
                    <h4>
                    <img alt="a" src="images/today-repo-icon1.png" />
                        Today Report
                    </h4>
                    <span className="city_name">{city.name}</span>
                </div>    
                <div className="row align-items-end">
                    <div className="col-sm-4">
                    <div className="today-deg">
                        <h1>{list.filter((a , i) => i < 1 ).map(i => (i.main.temp - 273.15).toFixed(2))} C</h1>
                        <div className="icon">
                        <img alt="a" src="images/today-repo-icon3.png" />
                        </div>
                        <span>Clouds & Sunshine</span>
                    </div>
                    </div>
                    <div className="col-sm-8">
                    <div className="deg-list">
                        {
                            list
                            .filter((array, index) => index < 5)
                            .map(h => 
                                <li key={h.dt}>
                                <h3>{h.weather[0].description}</h3>
                                <img alt="a" src={`http://openweathermap.org/img/wn/${h.weather[0].icon}.png`} />
                                <span>{(h.main.temp - 273.15).toFixed(2)} C</span>
                            </li>
                        )}
                    </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default TodayReport;