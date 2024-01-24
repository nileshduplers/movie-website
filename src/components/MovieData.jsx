import axios from "axios";
import React, { useEffect, useState } from "react";

function MovieData() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies"
      )
      .then((response) => {
        setData(response.data);
      });
  }, []);

  return <></>;
}

export default MovieData;
