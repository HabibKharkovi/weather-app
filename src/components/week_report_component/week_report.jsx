
import React from 'react';

const Week_report = props => {
    const { list, city } = props;

    let date;
    let reggie = /(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/;
    list
      .filter((array, i) => i === 0)
      .map(currentDay => {
        const dateArray = reggie.exec(currentDay.dt_txt);
        date = new Date(
          +dateArray[1],
          +dateArray[2] - 1, // Careful, month starts at 0!
          +dateArray[3],
          +dateArray[4],
          +dateArray[5],
          +dateArray[6]
        );
      });

    function convert(str) {
      const date = new Date(str),
        mnth = ("0" + (date.getMonth() + 1)).slice(-2),
        day = ("0" + date.getDate()).slice(-2);
      return [mnth, day, date.getFullYear()].join("-");
    }
    
    function weatherIcon(weather){
      if(weather === "Clouds"){
          return "images/weather-cast2.png"
      } else if(weather === "Snow"){
          return "images/weather-cast3.png"
      } else if(weather === "Clear") {
          return "images/weather-cast4.png"
      }
    }

    return ( 
        <div className="col-lg-12">
            <div className="weather-report">
                <div className="wr-top">
                    <div className="weather-info">
                    <p className="city_name">{city.name}</p>
                    <div className="wr-content">
                        <div className="wr-img">
                        <img alt="a" src="images/weather-main.png" alt="" />
                        </div>
                        {list
                        .filter((array, i) => i === 0)
                        .map(currentDay => (
                            <div key={currentDay.dt} className="wr-result">
                            <h2>
                                {(
                                ((currentDay.main.temp - 273.15) * 9) / 5 +
                                32
                                ).toFixed(2)}{" "}
                                <span>F</span>
                            </h2>
                            <h3 className="text-blue">
                                {(currentDay.main.temp - 273.15).toFixed(2)}
                                <span>C</span>
                            </h3>
                            <h3 className="text-orange">
                                {(
                                ((currentDay.main.temp - 273.15) * 9) / 5 +
                                32
                                ).toFixed(2)}
                                <span>F</span>
                            </h3>
                            </div>
                        ))}
                    </div>
                    </div>
                    <div className="weather-descript">
                    <p className="dayreport">{convert(date)}</p>
                    {list
                        .filter((array, i) => i === 0)
                        .map(currentDay => (
                        <React.Fragment>
                            <div className="wd-blog-section" key={currentDay.dt}>
                                <div className="wd-blog">
                                <div className="wd-blg-img">
                                    <img
                                    alt="a"
                                    src="images/weather-icon1.png"
                                    alt=""
                                    />
                                </div>
                                <div className="wd-blg-info">
                                    <h6>{currentDay.main.temp}</h6>
                                    <p>temperature</p>
                                </div>
                                </div>
                                <div className="wd-blog">
                                <div className="wd-blg-img">
                                    <img
                                    alt="a"
                                    src="images/weather-icon2.png"
                                    alt=""
                                    />
                                </div>
                                <div className="wd-blg-info">
                                    <h6>{currentDay.main.temp_max}</h6>
                                    <p>Max temperature</p>
                                </div>
                                </div>
                                <div className="wd-blog">
                                <div className="wd-blg-img">
                                    <img
                                    alt="a"
                                    src="images/weather-icon3.png"
                                    alt=""
                                    />
                                </div>
                                <div className="wd-blg-info">
                                    <h6>{currentDay.main.sea_level}ft</h6>
                                    <p>Sea Level</p>
                                </div>
                                </div>
                                <div className="wd-blog">
                                <div className="wd-blg-img">
                                    <img
                                    alt="a"
                                    src="images/weather-icon4.png"
                                    alt=""
                                    />
                                </div>
                                <div className="wd-blg-info">
                                    <h6>{currentDay.main.humidity} %</h6>
                                    <p>Humidity</p>
                                </div>
                                </div>
                                <div className="wd-blog">
                                <div className="wd-blg-img">
                                    <img
                                    alt="a"
                                    src="images/weather-icon5.png"
                                    alt=""
                                    />
                                </div>
                                <div className="wd-blg-info">
                                    <h6>17 mph</h6>
                                    <p>ESE Wind</p>
                                </div>
                                </div>
                                <div className="wd-blog">
                                <div className="wd-blg-img">
                                    <img
                                    alt="a"
                                    src="images/weather-icon6.png"
                                    alt=""
                                    />
                                </div>
                                <div className="wd-blg-info">
                                    <h6>{currentDay.main.pressure} ps</h6>
                                    <p>Pressure</p>
                                </div>
                                </div>
                            </div>
                            
                            <div className="wd-detail">
                                <div className="wd-detail-img">
                                <img
                                    alt="a"
                                    src="images/weather-icon7.png"
                                    alt=""
                                />
                                </div>
                                <div className="wd-detail-text">
                                    {currentDay.weather[0].description}
                                </div>
                            </div>
                        </React.Fragment>
                        ))}
                    </div>
                </div>
                <div className="wr-bottom">
                    {list
                    .filter((array, index) => index % 7 == 0)
                    .map(i => (
                        <div className="weekly-report" key={i.dt}>
                        <h6>Thu</h6>
                        <div className="weekly-report-info">
                            <div className="wri-img">
                            <img
                                alt="a"
                                src={weatherIcon(i.weather[0].main)}
                                alt=""
                            />
                            </div>
                            <div className="wri-detail">
                            <p>
                                {(
                                ((i.main.temp - 273.15) * 9) / 5 +
                                32
                                ).toFixed(2)}{" "}
                                oF
                            </p>
                            <span>
                                {(i.main.temp - 273.15).toFixed(2)} oC
                            </span>
                            </div>
                        </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
     );
}
 
export default Week_report;