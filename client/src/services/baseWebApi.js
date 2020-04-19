import axios from "axios";

/**
 * @description methods for interacting with API routes and home routes with axios
 */
export default {
  getLocationsRisk: () => axios.get("https://api.apify.com/v2/datasets/tqOUq6OGZ3sfxhsBW/items"),
  postLocationsRisk: locations => axios.post("/api",  locations)
  };