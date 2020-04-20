import React, { Component } from 'react';
import { Form, Input, FormBtn } from '../components/search';
import { RiskTitle, Address, Recommendation, LocationCard } from '../components/location';
import baseWebApi from '../services/baseWebApi';
import DenseTable from '../components/DenceTable';

class App extends Component {
  state = {
    input: '',
    locations: [],
    pageTitle: 'Covid Shopping Risk'
  }

  componentDidMount() {
    document.title = this.state.pageTitle;
  };

  handleInputChange = event => {
    const value = event.target.value;
    this.setState({ input: value });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.input) {
      baseWebApi.getLocationsRisk()
        .then(res => {
          this.setState({
            input: '',
            locations: res.data
          });
        })
        .catch(error => {
          let errorCode = error.status;
          if (errorCode !== 401 && errorCode >= 399 && errorCode < 500) {
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
        )
    }
  };

  render() {
    return (
      <div className="app">
        <div className="container">
          {/* search form */}
          <div className="search">
            <h2 className="search-title">Where are you going?</h2>
            <Form handleFormSubmit={this.handleFormSubmit}>
              <Input
                value={this.state.input}
                onChange={this.handleInputChange}>
              </Input>
              <FormBtn />
            </Form>
          </div>
          {/* details table */}
          {this.state.locations.length ? (
            <div>
              {this.state.locations.map(location => (
                <div>
                  <LocationCard key={location.address} className={location.popularTimesLivePercent && location.popularTimesLivePercent < 30 ? 'location low-risk-border' : location.popularTimesLivePercent < 60 ? 'location med-risk-border' : 'location high-risk-border'}>
                    <div className={location.popularTimesLivePercent && location.popularTimesLivePercent < 30 ? 'risk-level-title low-risk-title' : location.popularTimesLivePercent < 60 ? 'risk-level-title med-risk-title' : 'risk-level-title high-risk-title'}>
                      <h3>Current Risk Level: <RiskTitle>{location.popularTimesLivePercent && location.popularTimesLivePercent < 30 ? 'Low' : location.popularTimesLivePercent < 60 ? 'Medium' : 'High'}</RiskTitle></h3>
                    </div>
                    <div className="location-title">{location.title}</div>
                    <Address>{location.address}</Address>
                    <Recommendation>{location.recommendation}</Recommendation>
                    <DenseTable location={location} />
                  </LocationCard>
                </div>
              )
              )}
            </div>
          ) : (<div></div>)}
        </div>
      </div>
    );
  }
}

export default App;
