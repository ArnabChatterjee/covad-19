import axios from "axios";

/**
 * @description methods for interacting with API routes and home routes with axios
 */
export default {
    // getLocationsRisk: locations => axios.get("/api",  locations)
    getLocationsRisk: locations => axios.get("https://api.apify.com/v2/datasets/tqOUq6OGZ3sfxhsBW/items")
    // getLocationsRisk: function(input, geoLocation){
    //   return ([{
    //     "title":"Walmart",
    //     "address": "1871 Chamblee Tucker Rd, Chamblee, GA 30341",
    //     "recommendation":"watson placeholder",
    //     "risk":"Medium"
    //   }])
    // }
  };