import axios from "axios";


// Create an axios instance
export default axios.create({
  baseURL: ("https://api.themoviedb.org/3/"),
  timeout: 5000,
  //withCredentials: true,
  // headers: {
  //  "Access-Control-Allow-Origin": "*",
  // },
});
