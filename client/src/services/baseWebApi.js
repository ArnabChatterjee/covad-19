// import axios from "axios";

/**
 * @description methods for interacting with API routes and home routes with axios
 */
export default {
    // getLocationsRisk: locations => axios.post("/api",  locations),
    getLocationsRisk: function(input, geoLocation){
      return ([{
        "title":"Walmart",
        "address": "1871 Chamblee Tucker Rd, Chamblee, GA 30341",
        "recommendation":"watson placeholder",
        "risk":"Medium"
      }])
    },
  };