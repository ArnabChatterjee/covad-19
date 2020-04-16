import axios from "axios";

/**
 * @description methods for interacting with API routes and home routes with axios
 */
export default {
    getLocationsRisk: locations => axios.post("/api",  locations),
  };