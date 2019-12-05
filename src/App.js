import React from "react";
import "./App.css";
import Header from "./components/header_component/header";
import Footer from "./components/footer_component/footer";
import Search from "./components/search_component/search";
import Welcome from "./components/welcome_component/welcome";
import TodayReport from "./components/tody_report_component/tody_report";
import WeekReport from "./components/week_report_component/week_report";

const API = "916a71597c80ea3a6ee3cee29348868b";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: {},
      list: [],
      cityName: "skardu",
      countryName: "pakistan",
      data: {},
      checked: false
    };
  }

  componentDidMount() {
    fetch(`https://geolocation-db.com/json/`)
      .then(res => res.json())
      .then(data => this.current(data));
  }

  current = data => {
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${data.city},${
        data.country
      }&appid=${API}`
    )
      .then(res => res.json())
      .then(data => this.setState({ list: data.list, city: data.city }));
  };

  handleChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value
    });
  };

  handleSearch = e => {
    e.preventDefault();
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${
        this.state.cityName
      },${this.state.countryName}&appid=${API}`
    )
      .then(res => res.json())
      .then(data => this.setState({ list: data.list, city: data.city }));
  };

  changeCheckbox = e => {
    this.setState({
      checked: !this.state.checked
    })
  }

  render() {
    console.log(this.state.checked)
    return (
      <div className="App">
        <div className="wrapper">
          <Header/>

          <div className="dashboard">
            <div className="weather-wrap">

              <Search
                handleChange = {this.handleChange}
                handleSearch = {this.handleSearch}
              />
             
              <div className="row mb-5">
                <Welcome 
                  changeCheckbox={() => this.changeCheckbox} 
                  checked={this.state.checked}
                  list={this.state.list}
                />
                <TodayReport
                  list={this.state.list}
                  city={this.state.city}
                />
              </div>

              <div className="row">
                <WeekReport 
                  list={this.state.list}
                  city={this.state.city}
                />
              </div>

            </div>
          </div>

        <Footer/>
      </div>
    </div>
    );
  }
}

export default App;
