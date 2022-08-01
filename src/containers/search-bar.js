import { map } from "lodash";
import React from "react";
import { connect } from "react-redux"; 
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions";


class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {term: ''};
        this.termChangeHandle = this.termChangeHandle.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    termChangeHandle({target}) {
        this.setState({term: target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input onChange={this.termChangeHandle} placeholder="Type here" className="form-control" value={this.state.term}/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

function mapActionToProps(dispatch) {
    return bindActionCreators({fetchWeather: fetchWeather}, dispatch);
}

export default connect(null, mapActionToProps)(SearchBar);