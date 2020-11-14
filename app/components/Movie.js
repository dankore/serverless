import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

function Movie() {
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState({ overview: "" });

  useEffect(() => {
    const ourRequest = Axios.CancelToken.source();

    async function sendRequest() {
      setIsLoading(true);
      const response = await Axios.get(
        `https://serverlezz.netlify.app/.netlify/functions/lambda`,
        { cancelToken: ourRequest.token }
      );
      setMovie(response.data);
      setIsLoading(false);
      document.title = `Movie | Our Amazing App`;
    }
    sendRequest();
    return () => {
      ourRequest.cancel();
    };
  }, [name]);

  if (isLoading) {
    return (
      <div className="row">
        <p className="text-center py-5">...</p>
      </div>
    );
  }

  return (
    <div className="row">
      <div className="col-md-8 mb-4 mb-md-0">
        <h2 className="display-4">{movie.title}</h2>
        <p className="lead">{movie.overview}</p>
        <Link className="btn btn-primary" to="/">
          Back home
        </Link>
      </div>
    </div>
  );
}

export default Movie;
