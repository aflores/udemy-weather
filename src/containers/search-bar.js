import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {

  constructor(props) {
    super(props)

    this.state = { term: ''}

    // bindings
    this.onInputChange = this.onInputChange.bind(this)
    this.onSubmitForm = this.onSubmitForm.bind(this)
  }

  onInputChange(event) {
    // console.log(event.target.value)
    this.setState({term: event.target.value})
  }

  onSubmitForm(event) {
    event.preventDefault()

    // go get the data
    this.props.fetchWeather(this.state.term)
    this.setState({ term: '' })
  }

  render() {
    return (
      <form onSubmit={this.onSubmitForm} className="input-group">
        <input 
          placeholder="Get a five-day forecast for your favorite city/country (ex. 'Miami,US' 'Toluca,mx')"
          className= "form-control"
          value={this.state.term}
          onChange={this.onInputChange} />

        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( { fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);