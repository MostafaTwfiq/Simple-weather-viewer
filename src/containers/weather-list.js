import React from "react";
import { connect } from "react-redux";
import Chart from '../components/chart';
import GoogleMap from "../components/google-map";

class WeatherList extends React.Component {
    constructor(props) {
        super(props);
    }

    get buildList() {
        return this.props.WeatherList.map((cityData) => {
            const name = cityData.city.name;
            const temps = cityData.list.map((weather) => {return weather.main.temp;});
            const pressures = cityData.list.map((weather) => {return weather.main.pressure;});
            const humidities = cityData.list.map((weather) => {return weather.main.humidity;});
            const {lon, lat} = cityData.city.coord;
            return (
                <tr key={name}>
                    <td><GoogleMap lon={lon} lat={lat}/></td>
                    <td><Chart data={temps} color="orange" units="K"/></td>
                    <td><Chart data={pressures} color="green" units="hPa"/></td>
                    <td><Chart data={humidities} color="black" units="%"/></td>
                </tr>
            );
        });
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.WeatherList.length > 0 && this.buildList}
                </tbody>
            </table>
        );
    }
}


function mapStateToProps(state) {
    return {WeatherList: state.weather};
}

export default connect(mapStateToProps)(WeatherList);