import React, { Component } from 'react';
import { connect } from 'react-redux';
import  Chart   from '../components/chart';
import  GoogleMap   from '../components/google_map';

class WeatherList extends Component {

  renderWeather(cityData){
    const name = cityData.city.name;
    const temps  = cityData.list.map(weather =>  (weather.main.temp - 273.15)*1.8 + 32) 
    const pressures  = cityData.list.map(weather => weather.main.pressure)
    const humidities  = cityData.list.map(weather => weather.main.humidity)
    //const lon = cityData.city.coord.lon;
    //const lat = cityData.city.coord.lat;
    const { lon, lat } = cityData.city.coord; // using ES6 destructuring

    return(
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td> <Chart data={temps} color="orange" /> </td>
        <td> <Chart data={pressures} color="green" /> </td>
        <td> <Chart data={humidities} color="blue" /> </td>
      </tr>
    )
  }

  render() {
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({ weather }) {
  return { weather };  // this should match a key of the combinedReducers function in reducers/index.js
}

export default connect(mapStateToProps)(WeatherList)

