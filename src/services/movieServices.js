

require('dotenv').config();

const APIKEY = process.env.APIKEY


export async function searchMoviesByKeyword(keyword) {
  // call to server to register user
  const response = await api.get(`search/movie?${APIKEY}=en-US&query=${keyword}&page=1&include_adult=false`)
  return response.data;
}

export async function searchMoviesByYear(year) {
  // call to server to register user
  const response = await api.get("/user/register", xx);
  return response.data;
}

export async function searchMoviesByLanguage(lang) {
  // call to server to register user
  const response = await api.get("/user/register", xx);
  return response.data;
}
