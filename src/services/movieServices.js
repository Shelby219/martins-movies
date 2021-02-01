
import api from "../config/api";


if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const apiKey = process.env.REACT_APP_APIKEY


//let randomPage = Math.floor(Math.random() * 500);


//Get all API movie data
export async function getAllMovieData(page) {
  // call to server to register user
  const response = await api.get(`discover/movie?api_key=${apiKey}&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`);
  return response.data;
}

//Searching movies in search bar via keyword which can be keyword/title/language
export async function searchMoviesByKeyword(keyword, page) {
  // call to server to register user
  const response = await api.get(`search/movie?api_key=${apiKey}&en-US&query=${keyword}&page=1&include_adult=false&page=${page}`)
  return response.data;
}


//API endpoint for getting IMDB ID
export async function getMovieIMDBID(id) {
  // call to server to register user
  const response = await api.get(`/movie/${id}/external_ids?api_key=${apiKey}`)
  return response.data;
}








// export async function searchMoviesByYear(year) {
//   // call to server to register user
//   const response = await api.get(`discover/movie?api_key=${apiKey}&sort_by=popularity.desc&include_adult=false&include_video=false&page=${randomPage}&year=${year}`);
//   return response.data;
// }

// export async function searchMoviesByLanguage(lang) {
//   // call to server to register user
//   const response = await api.get(`discover/movie?api_key=${apiKey}&language=${lang}&sort_by=popularity.desc&include_adult=false&include_video=false&page=${randomPage}`);
//   return response.data;
// }
