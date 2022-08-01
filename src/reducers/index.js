import { combineReducers } from 'redux';
import WeatherReducer from './reducer-weather.js'

const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;
