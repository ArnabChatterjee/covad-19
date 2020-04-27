import axios from "axios";

/**
 * @description methods for interacting with API routes and home routes with axios
 */
export default {
  getLocationsRisk: address => {
      const encodedAddress = encodeURI(address);
    return axios.get(`http://localhost:8080/popularTimes?address=${encodedAddress}`)
  }
  };