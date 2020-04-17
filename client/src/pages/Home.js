import React, { Component } from 'react';
import { Form, Input, FormBtn } from '../components/search';
import { RiskTitle, Address, Recommendation, LocationCard } from '../components/location';
import baseWebApi from '../services/baseWebApi';

class App extends Component {
  state = {
    input: '',
    locations: []
  }

  handleInputChange = event => {
    const value = event.target.value;
    this.setState({ input: value });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.input) {
      // let res = baseWebApi.getLocationsRisk(
      //     this.state.input, "my location"
      //   )
        // .then(res => {
        //     this.setState({
        //     locations: res.data
        //     });
        //     // console.log(this.state.locations[0].title);
        // })
        // .catch(error => {
        //   let errorCode = error.status;
        //   if (errorCode !== 401 && errorCode >= 399 && errorCode < 500) {
        //     errorCode = 400;
        //   }
        //   switch (errorCode) {
        //     case 401:
        //     case 400:
        //       window.location.assign(`/`);//should make an error page if have time
        //       break;
        //     default:
        //       window.location.assign(`/`);
        //   }
        //   console.log(error);
        // }
        // )
      this.setState({
        locations: [{
          "title":"Walmart",
          "address": "1871 Chamblee Tucker Rd, Chamblee, GA 30341",
          "recommendation":"watson recommendation placeholder",
          "risk":"Medium"
        }]
      });
    }
  };

  render() {
    return (
      <div className="app">
        <div className="container">
          <div className="search">
            <h2 className="search-title">Where are you going?</h2>
            <Form>
              <Input
                value={this.state.input}
                onChange={this.handleInputChange}>
              </Input>
              <FormBtn
                type="submit"
                onClick={this.handleFormSubmit}>
              </FormBtn>
            </Form>
          </div>

          {this.state.locations.length ? (
            <div>
            {this.state.locations.map(location => (
            <LocationCard key={location.address}>
              <div className="risk-level-title">
                <h3>Risk Level: <RiskTitle>{location.risk}</RiskTitle></h3>
              </div>
              <div className="location-title">{location.title}</div>
              <Address>{location.address}</Address>
              <Recommendation>{location.recommendation}</Recommendation>
            </LocationCard>
          ))}
          </div>
     ) : (<div></div>)}
        </div>
      </div>
    );
  }
}

export default App;
