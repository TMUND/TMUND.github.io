import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';
import '../styles/WeatherIcon.scss';

class WeatherIcon extends Component {
  constructor(props) {
    super(props)
    this.state = {
      weatherIcon: '',
      temperature: '',
      summary: ''
    }
  }

  getWeatherData = () => {
    let self = this

    fetchJsonp('https://api.darksky.net/forecast/1a4796cce5420f297110d6673b30104b/22.0964, 159.5261/?exclude=hourly')
      .then(function(response) {
        return response.json()
      }).then(function(json) {
        self.setState({
          weatherIcon: json.daily.icon,
          temperature: json.currently.temperature,
          summary: json.daily.summary,
        })
        console.log('parsed json', json)
      }).catch(function(ex) {
        console.log('parsing failed', ex)
      })
  }

  componentDidMount() {
    this.getWeatherData()
  }

  render() {
    return (
      <div className='weather-icon-container'>
        { this.state.weatherIcon }
        { this.state.temperature }
        { this.state.summary }
      </div>
    );
  }
};

export default WeatherIcon;
