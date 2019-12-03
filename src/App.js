import React from 'react';
import './App.css';

const API = '916a71597c80ea3a6ee3cee29348868b'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
       city: {},
       list: [],
       cityName: 'skardu',
       countryName: 'pakistan',
       data: {}
    }
  }


  componentDidMount(){
    let x;
    fetch(`https://geolocation-db.com/json/`)
    .then(res => res.json())
    .then(data => this.current(data))
    
  }

  current = (data) => {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${data.city},${data.country}&appid=${API}`)
    .then(res => res.json())
    .then(data => this.setState({ list: data.list, city: data.city }))
  }

  handleChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
        [name]: value
    })
  }

  handleSearch = e => {
     e.preventDefault();
     fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.cityName},${this.state.countryName}&appid=${API}`)
    .then(res => res.json())
    .then(data => this.setState({ list: data.list, city: data.city }))
  }

  render(){
    console.log(this.state.data.city)
    let date;
    let reggie = /(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/;
    this.state.list.filter((array, i) => i === 0).map(currentDay => 
            { 
                const dateArray  = reggie.exec(currentDay.dt_txt);
                date = new Date((+dateArray[1]),
                (+dateArray[2])-1, // Careful, month starts at 0!
                (+dateArray[3]),
                (+dateArray[4]),
                (+dateArray[5]),
                (+dateArray[6]))
            })

    function convert(str) {
        const date = new Date(str),
            mnth = ("0" + (date.getMonth() + 1)).slice(-2),
            day = ("0" + date.getDate()).slice(-2);
        return [mnth, day, date.getFullYear()].join("-");
    }

    return (
      <div className="App">
         <div className="wrapper">
            <div className="header">
                <div className="weather-title">
                    <h3>Weather App</h3>                   
                </div>
            </div>

            <div className="dashboard">
                <div className="btn-toggle side">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className="weather-wrap">
                    <form onSubmit={(e) => this.handleSearch(e)} className="btns-list search-wrapper">
                        <div className="input-group input-group-lg">
                            <input onChange={(e) => this.handleChange(e)} name="cityName" type="text" className="form-control" placeholder="search by city" aria-label="Large" aria-describedby="inputGroup-sizing-sm"/>
                            <input onChange={(e) => this.handleChange(e)} name="countryName" type="text" className="form-control" placeholder="search by country" aria-label="Large" aria-describedby="inputGroup-sizing-sm"/>
                            <button type="submit" className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-lg">search</span>
                            </button>
                        </div>
                    </form>

                    <div className="row mb-5">
                        <div className="col-lg-4">
                            <div className="welcome-box">
                                <h5>Welcome Back West Virginia</h5>
                                <p>
                                    A small river named Duden flows by their place and supplies it with the necessary regelialia. 
                                    It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                                </p>
                                

                                <div className="wc-bottom">
                                    <span className="temperature"><img alt="a" src="images/cloud-img.png"/>24oC</span>
                                    <span className="deg">C</span>
                                    <span className="deg">F</span>
                                    <div className="slideThree">
                                        <input type="checkbox" value="None" id="slideThree" name="check" />
                                        <label htmlFor="slideThree"></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="today-report">
                                <div className="repo-head">
                                    <h4><img alt="a" src="images/today-repo-icon1.png"/>Today Report</h4>
                                    <span>Charleston, West Virginia</span>
                                </div>
                                <div className="row align-items-end">
                                    <div className="col-sm-4">
                                        <div className="today-deg">
                                            <h1>18</h1>
                                            <div className="icon">
                                                <img alt="a" src="images/today-repo-icon3.png"/>
                                            </div>
                                            <span>Clouds & Sunshine</span>  
                                        </div>
                                    </div>
                                    <div className="col-sm-8">
                                        <div className="deg-list">
                                            <li>
                                                <h3>Sat</h3>
                                                <img alt="a" src="images/today-repo-icon3.png"/>
                                                <span>32o</span>
                                            </li>
                                            <li>
                                                <h3>Sat</h3>
                                                <img alt="a" src="images/today-repo-icon3.png"/>
                                                <span>32o</span>
                                            </li>
                                            <li>
                                                <h3>Sat</h3>
                                                <img alt="a" src="images/today-repo-icon3.png"/>
                                                <span>32o</span>
                                            </li>
                                            <li>
                                                <h3>Sat</h3>
                                                <img alt="a" src="images/today-repo-icon3.png"/>
                                                <span>32o</span>
                                            </li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="weather-report">
                                <div className="wr-top">
                                    <div className="weather-info">
                                        <p className="dayreport">{this.state.city.name}</p>
                                        <div className="wr-content">
                                            <div className="wr-img">
                                                <img alt="a" src="images/weather-main.png" alt="" />
                                            </div>
                                            {this.state.list.filter((array, i) => i === 0).map(currentDay => <div key={currentDay.dt} className="wr-result">
                                                <h2>{((currentDay.main.temp - 273.15) * 9/5 + 32).toFixed(2)} <span>F</span></h2>
                                                <h3 className="text-blue">{(currentDay.main.temp - 273.15).toFixed(2)}<span>C</span></h3>
                                                <h3 className="text-orange">{((currentDay.main.temp - 273.15) * 9/5 + 32).toFixed(2)}<span>F</span></h3>
                                            </div>)}
                                        </div>
                                    </div>
                                    <div className="weather-descript">
                                        <p className="dayreport">{convert(date)}</p>
                                        {this.state.list.filter((array, i) => i === 0).map(currentDay => 
                                            <div className="wd-blog-section">
                                                <div className="wd-blog">
                                                    <div className="wd-blg-img">
                                                        <img alt="a" src="images/weather-icon1.png" alt="" />
                                                    </div>
                                                    <div className="wd-blg-info">
                                                        <h6>{currentDay.main.temp}</h6>
                                                        <p>temperature</p>
                                                    </div>
                                                </div>
                                                <div className="wd-blog">
                                                    <div className="wd-blg-img">
                                                        <img alt="a" src="images/weather-icon2.png" alt="" />
                                                    </div>
                                                    <div className="wd-blg-info">
                                                        <h6>{currentDay.main.temp_max}</h6>
                                                        <p>Max temperature</p>
                                                    </div>
                                                </div>
                                                <div className="wd-blog">
                                                    <div className="wd-blg-img">
                                                        <img alt="a" src="images/weather-icon3.png" alt="" />
                                                    </div>
                                                    <div className="wd-blg-info">
                                                        <h6>{currentDay.main.sea_level}ft</h6>
                                                        <p>Sea Level</p>
                                                    </div>
                                                </div>
                                                <div className="wd-blog">
                                                    <div className="wd-blg-img">
                                                        <img alt="a" src="images/weather-icon4.png" alt="" />
                                                    </div>
                                                    <div className="wd-blg-info">
                                                        <h6>{currentDay.main.humidity} %</h6>
                                                        <p>Humidity</p>
                                                    </div>
                                                </div>
                                                <div className="wd-blog">
                                                    <div className="wd-blg-img">
                                                        <img alt="a" src="images/weather-icon5.png" alt="" />
                                                    </div>
                                                    <div className="wd-blg-info">
                                                        <h6>17 mph</h6>
                                                        <p>ESE Wind</p>
                                                    </div>
                                                </div>
                                                <div className="wd-blog">
                                                    <div className="wd-blg-img">
                                                        <img alt="a" src="images/weather-icon6.png" alt="" />
                                                    </div>
                                                    <div className="wd-blg-info">
                                                        <h6>{currentDay.main.pressure} ps</h6>
                                                        <p>Pressure</p>
                                                    </div>
                                                </div>
                                            </div>)}
                                        <div className="wd-detail">
                                            <div className="wd-detail-img">
                                                <img alt="a" src="images/weather-icon7.png" alt="" />
                                            </div>
                                            <div className="wd-detail-text">
                                                Excellent time for planting root crops that can be planted now and for staring seedbeds.Good days for transplanting
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="wr-bottom">
                                    {this.state.list.filter((array, index) => index % 7 == 0 ).map(i => 
                                    <div className="weekly-report">
                                        <h6>Thu</h6>
                                        <div className="weekly-report-info">
                                            <div className="wri-img">
                                                <img alt="a" src="images/weather-cast1.png" alt="" />
                                            </div>
                                            <div className="wri-detail">
                                                <p>{((i.main.temp - 273.15) * 9/5 + 32).toFixed(2)} oF</p>
                                                <span>{(i.main.temp - 273.15).toFixed(2)} oC</span>
                                            </div>
                                        </div>
                                    </div>
                                    )}
                                    {/* <div className="weekly-report">
                                        <h6>Fri</h6>
                                        <div className="weekly-report-info">
                                            <div className="wri-img">
                                                <img alt="a" src="images/weather-cast2.png" alt="" />
                                            </div>
                                            <div className="wri-detail">
                                                <p>69oF</p>
                                                <span>34oC</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="weekly-report">
                                        <h6>Sat</h6>
                                        <div className="weekly-report-info">
                                            <div className="wri-img">
                                                <img alt="a" src="images/weather-cast3.png" alt="" />
                                            </div>
                                            <div className="wri-detail">
                                                <p>47oF</p>
                                                <span>16oC</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="weekly-report">
                                        <h6>Sun</h6>
                                        <div className="weekly-report-info">
                                            <div className="wri-img">
                                                <img alt="a" src="images/weather-cast4.png" alt="" />
                                            </div>
                                            <div className="wri-detail">
                                                <p>72oF</p>
                                                <span>37oC</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="weekly-report">
                                        <h6>Mon</h6>
                                        <div className="weekly-report-info">
                                            <div className="wri-img">
                                                <img alt="a" src="images/weather-cast5.png" alt="" />
                                            </div>
                                            <div className="wri-detail">
                                                <p>44oF</p>
                                                <span>32oC</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="weekly-report">
                                        <h6>Thu</h6>
                                        <div className="weekly-report-info">
                                            <div className="wri-img">
                                                <img alt="a" src="images/weather-cast6.png" alt="" />
                                            </div>
                                            <div className="wri-detail">
                                                <p>64oF</p>
                                                <span>32oC</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="weekly-report">
                                        <h6>Sat</h6>
                                        <div className="weekly-report-info">
                                            <div className="wri-img">
                                                <img alt="a" src="images/weather-cast7.png" alt="" />
                                            </div>
                                            <div className="wri-detail">
                                                <p>45oF</p>
                                                <span>16oC</span>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="city-list">
                                <ul>
                                    <li>
                                        <h4>Location</h4>
                                        <h3><img alt="a" src="images/city-weather.png"/></h3>
                                    </li>
                                    <li>
                                        <h4>New York</h4>
                                        <h3>45<span>C</span></h3>
                                    </li>
                                    <li>
                                        <h4>Los Angeles</h4>
                                        <h3>38<span>C</span></h3>
                                    </li>
                                    <li>
                                        <h4>Houston</h4>
                                        <h3>12<span>C</span></h3>
                                    </li>
                                    <li>
                                        <h4>San Antonio</h4>
                                        <h3>32<span>C</span></h3>
                                    </li>
                                    <li>
                                        <h4>Jackconville</h4>
                                        <h3>39<span>C</span></h3>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                <div className="footer">
                    <div className="container-fluid">
                        <div className="copyright">
                            <p>
                                2019 Copyrights © <a href="#">Habib Kharkovi</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
