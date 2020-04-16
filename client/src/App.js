import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import {Form, Input, FormBtn} from './components/search';
import { RiskTitle, Address, Recommendation, LocationCard } from './components/location';

class App extends Component {
  state = {
    input: '',
    locations: []
  }

  handleInputChange = event => {
    const { input, value } = event.target;
    this.setState({ [input]: value });
    console.log(this.state.input);
  }

  handleFormSubmit = event => {
    event.preventDefault();

    if (this.state.input) {
      // API
      // .getLocations({
      //   input: this.state.input
      // })
      // .then(res => {
      //   let locations = [];

      //   this.setState({
      //     locations: res.data
      //   });
      // })
      // .catch(err => console.log(err));
      console.log(this.state.input);
    }
  };

  render() {
  return (
    <div className="app">
      <Header />
      <div className="container">
      <div className="search">
            <h2 className="search-title">Where are you going?</h2>
            <Form>
                <Input 
                onChange={this.handleInputChange}>
                </Input>
                <FormBtn 
                onClick={this.handleFormSubmit}>
                </FormBtn>
            </Form>
        </div>
        <LocationCard>
            <div className="risk-level-title">
              <h3>Risk Level: <RiskTitle></RiskTitle></h3>
              </div>
            <Address></Address>
            <Recommendation></Recommendation>
        </LocationCard>
      </div>
    </div>
  );
  }
}

export default App;
