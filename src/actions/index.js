import axios from 'axios';

const API_KEY = '714c691859c6dda7c06869617659015a';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

//action types
export const FETCH_WEATHER = 'FETCH_WEATHER';

// action creator
export function fetchWeather(city) {

  const url = `${ROOT_URL}&q=${city}`;
  //const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);  // this will return a promise

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}