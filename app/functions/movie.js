require("dotenv").config();
import Axios from "axios";

exports.handler = async event => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Cache-Control": "max-age=10",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
  };
 
  const { httpMethod } = event;

  if (httpMethod === "GET") {
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/latest?api_key=${process.env.movieDbApiKey}`
    );

    const movieData = response.data;

    return { statusCode: 200, headers, body: JSON.stringify(movieData) };
  }

  return { statusCode: 404 };
};
