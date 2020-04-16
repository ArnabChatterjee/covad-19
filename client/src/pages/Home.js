import React, { Component } from 'react';
import {Form, Input, FormBtn} from '../components/search';
import { RiskTitle, Address, Recommendation, LocationCard } from '../components/location';
import API from '../services/baseWebApi';

class App extends Component {
  state = {
    input: '',
    locations: []
  }

  handleInputChange = event => {
    const value  = event.target.value;
    this.setState({ input: value });
  }

  handleFormSubmit = event => {
    event.preventDefault();

    if (this.state.input) {
        API
        .getLocationsRisk({
            locations: this.state.input
        })
        .then(res => {
            this.setState({
            locations: res.data
            });
        })
        .catch(error => {
            let errorCode = error.status;
            if (errorCode !== 401 && errorCode >= 399 && errorCode < 500){
                errorCode = 400;
            }
            switch (errorCode) {
            case 401:
            case 400:
                window.location.assign(`/`);//should make an error page if have time
                break;
            default:
                window.location.assign(`/`);
            }
            console.log(error);
        }
      );
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
                onChange={this.handleInputChange}>
                </Input>
                <FormBtn 
                onClick={this.handleFormSubmit}>
                </FormBtn>
            </Form>
        </div>

        {(this.state.locations).length > 0? (this.state.locations).map(e => 
            <LocationCard>
                <div className="risk-level-title">
                    <h3>Risk Level: <RiskTitle>{e.risk}</RiskTitle></h3>
                </div>
                <Address>{e.address}</Address>
                <Recommendation>{e.categoryName}</Recommendation>
            </LocationCard>
        ): (<div></div>)}
      </div>
    </div>
  );
  }
}

export default App;
